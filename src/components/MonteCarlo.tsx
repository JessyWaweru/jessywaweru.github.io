import { useCallback, useEffect, useRef, useState } from 'react';
import { Dices } from 'lucide-react';

const YEARS = 10_000;
const BINS = 48;
const BATCH = 400;

const kes = new Intl.NumberFormat('en-KE', { notation: 'compact', maximumFractionDigits: 1 });

function poisson(lambda: number) {
  // Knuth's method: fine for the small claim frequencies used here.
  const limit = Math.exp(-lambda);
  let k = 0;
  let p = 1;
  do {
    k++;
    p *= Math.random();
  } while (p > limit);
  return k - 1;
}

function standardNormal() {
  const u = 1 - Math.random();
  const v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

// One simulated year: a Poisson number of claims, each lognormally distributed.
function simulateYear(lambda: number, mu: number, sigma: number) {
  let total = 0;
  for (let i = poisson(lambda); i > 0; i--) total += Math.exp(mu + sigma * standardNormal());
  return total;
}

type Summary = { mean: number; var95: number; var99: number; tvar99: number };

function summarise(losses: number[]): Summary {
  const sorted = [...losses].sort((a, b) => a - b);
  const at = (q: number) => sorted[Math.min(sorted.length - 1, Math.floor(q * sorted.length))];
  const tail = sorted.slice(Math.floor(0.99 * sorted.length));
  return {
    mean: losses.reduce((s, x) => s + x, 0) / losses.length,
    var95: at(0.95),
    var99: at(0.99),
    tvar99: tail.reduce((s, x) => s + x, 0) / tail.length,
  };
}

function Slider(props: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-baseline justify-between text-sm">
        <span className="text-zinc-400">{props.label}</span>
        <span className="font-mono text-mint">{props.display}</span>
      </div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={e => props.onChange(Number(e.target.value))}
        className="w-full accent-[var(--color-mint)]"
      />
    </label>
  );
}

export default function MonteCarlo() {
  const [lambda, setLambda] = useState(4);
  const [severity, setSeverity] = useState(80_000);
  const [sigma, setSigma] = useState(1);
  const [counts, setCounts] = useState<number[]>(() => Array(BINS).fill(0));
  const [done, setDone] = useState(0);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [range, setRange] = useState(1);
  const frame = useRef(0);

  const run = useCallback(() => {
    cancelAnimationFrame(frame.current);
    const mu = Math.log(severity) - (sigma * sigma) / 2;
    // Histogram range from the aggregate's mean and standard deviation, so bins stay fixed while it fills.
    const mean = lambda * severity;
    const sd = Math.sqrt(lambda * severity * severity * Math.exp(sigma * sigma));
    const max = mean + 5 * sd;
    const width = max / BINS;
    const bins = Array(BINS).fill(0);
    const losses: number[] = [];
    const instant = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    setRange(max);
    setSummary(null);

    const step = () => {
      const target = instant ? YEARS : Math.min(YEARS, losses.length + BATCH);
      while (losses.length < target) {
        const loss = simulateYear(lambda, mu, sigma);
        losses.push(loss);
        bins[Math.min(BINS - 1, Math.floor(loss / width))]++;
      }
      setCounts([...bins]);
      setDone(losses.length);
      setSummary(summarise(losses));
      if (losses.length < YEARS) frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);
  }, [lambda, severity, sigma]);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const peak = Math.max(1, ...counts);
  const marker = (x: number) => `${Math.min(100, (x / range) * 100)}%`;

  return (
    <div className="grid gap-8 rounded-3xl border border-line bg-panel/80 p-6 backdrop-blur md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:p-8">
      <div className="space-y-6">
        <Slider label="Claims per year (λ)" value={lambda} min={1} max={15} step={1} display={`${lambda}`} onChange={setLambda} />
        <Slider
          label="Average claim size"
          value={severity}
          min={10_000}
          max={500_000}
          step={10_000}
          display={`KES ${kes.format(severity)}`}
          onChange={setSeverity}
        />
        <Slider label="Claim volatility (σ)" value={sigma} min={0.3} max={1.6} step={0.1} display={sigma.toFixed(1)} onChange={setSigma} />
        <button
          onClick={run}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-mint px-5 py-3 font-semibold text-ink transition hover:brightness-110 active:scale-[0.98]"
        >
          <Dices className="size-5 transition group-hover:rotate-45" />
          Simulate 10,000 years
        </button>
        <p className="text-xs leading-relaxed text-zinc-500">
          Poisson claim counts × lognormal claim sizes: the textbook collective risk model, running in your browser.
        </p>
      </div>

      <div>
        <div className="relative h-56 rounded-xl border border-line bg-ink/60 px-2 pt-4 md:h-64">
          {done === 0 && (
            <div className="absolute inset-0 grid place-items-center text-center text-sm text-zinc-500">
              <span>
                Set your assumptions, then hit <span className="text-mint">Simulate</span>.
                <br />
                Watch the loss distribution take shape. 🎲
              </span>
            </div>
          )}
          <div className="flex h-full items-end gap-[2px]">
            {counts.map((c, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-sky/60 to-mint/80 transition-[height] duration-150"
                style={{ height: `${(c / peak) * 100}%` }}
              />
            ))}
          </div>
          {summary && (
            <>
              <div className="absolute inset-y-2 border-l-2 border-dashed border-amber-300/80" style={{ left: marker(summary.var95) }}>
                <span className="absolute -top-1 left-1 font-mono text-[10px] text-amber-300">VaR95</span>
              </div>
              <div className="absolute inset-y-2 border-l-2 border-dashed border-rose-400" style={{ left: marker(summary.var99) }}>
                <span className="absolute top-3 left-1 font-mono text-[10px] text-rose-400">VaR99</span>
              </div>
            </>
          )}
        </div>
        <div className="mt-1 flex justify-between font-mono text-[10px] text-zinc-600">
          <span>KES 0</span>
          <span>annual aggregate loss →</span>
          <span>KES {kes.format(range)}</span>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['Expected loss', summary?.mean, 'text-zinc-100'],
            ['VaR 95%', summary?.var95, 'text-amber-300'],
            ['VaR 99%', summary?.var99, 'text-rose-400'],
            ['TVaR 99%', summary?.tvar99, 'text-violet'],
          ].map(([label, value, color]) => (
            <div key={label as string} className="rounded-xl border border-line bg-ink/60 p-3">
              <dt className="text-[11px] uppercase tracking-wider text-zinc-500">{label as string}</dt>
              <dd className={`mt-1 font-mono text-lg font-semibold ${color as string}`}>
                {value === undefined ? '—' : `KES ${kes.format(value as number)}`}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 font-mono text-[11px] text-zinc-600">
          {done > 0 ? `${done.toLocaleString()} / ${YEARS.toLocaleString()} simulated years` : ' '}
        </p>
      </div>
    </div>
  );
}
