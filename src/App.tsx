import { ArrowDown, ArrowUpRight, FileText, Mail, MapPin, Presentation, Sigma } from 'lucide-react';
import type { ReactNode } from 'react';
import Aurora from './components/reactbits/Aurora';
import CountUp from './components/reactbits/CountUp';
import DecryptedText from './components/reactbits/DecryptedText';
import SpotlightCard from './components/reactbits/SpotlightCard';
import MonteCarlo from './components/MonteCarlo';
import { LINKS, PROJECTS, STACK, STATS, type Project } from './data';

function GitHubIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: ReactNode; intro?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 md:py-28">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-mint">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 max-w-2xl text-zinc-400">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-mono font-semibold text-white">
          <span className="grid size-8 place-items-center rounded-lg bg-mint/10 text-mint">μ</span>
          <span className="hidden sm:inline">jessy.waweru</span>
        </a>
        <div className="flex items-center gap-1 text-sm sm:gap-2">
          {[
            ['Simulator', '#simulate'],
            ['Work', '#work'],
            ['Research', '#research'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="rounded-lg px-2 py-1.5 text-zinc-400 transition hover:bg-white/5 hover:text-white sm:px-3">
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Aurora colorStops={['#5eead4', '#a78bfa', '#60a5fa']} amplitude={1.1} blend={0.55} speed={0.6} height={0.55} opacity={0.85} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pt-24 pb-16 sm:px-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-mint" />
          </span>
          Open to full-stack, backend & actuarial-engineering roles
        </p>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Jessy Bryan
          <br />
          Waweru
        </h1>

        <p className="mt-5 font-mono text-xl text-mint sm:text-2xl md:text-3xl">
          <DecryptedText
            text="Actuary × Full-Stack Engineer"
            animateOn="view"
            sequential
            revealDirection="start"
            speed={45}
            characters="0123456789σμλΣ%∫≈"
            encryptedClassName="text-violet/80"
          />
        </p>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
          I build web apps that do serious maths: <span className="text-white">risk models, pricing engines and ranking algorithms</span>, with clean
          React frontends on top.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-ink transition hover:bg-mint">
            See my work <ArrowDown className="size-4" />
          </a>
          <a href="#simulate" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:border-mint/60">
            <Sigma className="size-4 text-mint" /> Play with a risk model
          </a>
          <div className="flex items-center gap-1 pl-1">
            <a href={LINKS.github} aria-label="GitHub" className="rounded-lg p-2.5 text-zinc-400 transition hover:bg-white/5 hover:text-white">
              <GitHubIcon />
            </a>
            <a href={LINKS.linkedin} aria-label="LinkedIn" className="rounded-lg p-2.5 text-zinc-400 transition hover:bg-white/5 hover:text-white">
              <LinkedInIcon />
            </a>
            <a href={LINKS.email} aria-label="Email" className="rounded-lg p-2.5 text-zinc-400 transition hover:bg-white/5 hover:text-white">
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <p className="mt-10 flex items-center gap-1.5 text-sm text-zinc-500">
          <MapPin className="size-4" /> Nairobi, Kenya · Actuarial Science (UoN) · Software Engineering (Moringa)
        </p>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
        {STATS.map(s => (
          <div key={s.label} className="bg-ink px-5 py-6">
            <div className="font-mono text-4xl font-bold text-white">
              <CountUp to={s.to} duration={1.6} suffix={s.suffix} />
            </div>
            <p className="mt-1 text-sm text-zinc-500">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, wide }: { project: Project; wide?: boolean }) {
  return (
    <SpotlightCard spotlightColor={project.accent} className={`group flex h-full flex-col border border-line p-0! ${wide ? 'md:col-span-2' : ''}`}>
      <div className={`relative overflow-hidden border-b border-line ${wide ? 'aspect-[21/9]' : 'aspect-[16/9]'}`}>
        {project.image && project.phone ? (
          <div className="grid size-full place-items-center bg-[radial-gradient(circle_at_20%_30%,rgba(74,222,128,0.28),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(94,234,212,0.2),transparent_50%)]">
            <img
              src={project.image}
              alt={`${project.name} mobile checkout`}
              loading="lazy"
              className="h-[88%] rounded-[1.4rem] border-4 border-zinc-800 shadow-2xl shadow-black/60 transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-2deg]"
            />
          </div>
        ) : project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid size-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(167,139,250,0.35),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(94,234,212,0.25),transparent_55%)]">
            <div className="grid grid-cols-3 gap-2 font-mono text-xs">
              {['USD', 'KES', 'EUR', 'GBP', 'paid', 'partial'].map(t => (
                <span key={t} className="rounded-md border border-white/10 bg-ink/70 px-2.5 py-1 text-center text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
        <span className="absolute top-3 left-3 rounded-full border border-white/10 bg-ink/80 px-2.5 py-1 font-mono text-[11px] text-zinc-300 backdrop-blur">
          {project.kicker}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white">
          <span className="mr-2">{project.emoji}</span>
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.blurb}</p>
        <p className="mt-3 border-l-2 border-mint/50 pl-3 text-sm text-zinc-300">{project.hook}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map(t => (
            <li key={t} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={`relative z-[2] inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                i === 0 ? 'bg-white text-ink hover:bg-mint' : 'border border-line text-zinc-300 hover:border-zinc-500 hover:text-white'
              }`}
            >
              {l.label} <ArrowUpRight className="size-3.5" />
            </a>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}

function Research() {
  const findings = [
    { to: 27.8, label: 'of disposable income consumed at KES 5,000/month' },
    { to: 98.2, label: 'default probability' },
    { to: 96.9, label: 'loss ratio restored via APPM' },
  ];
  return (
    <SpotlightCard spotlightColor="rgba(94, 234, 212, 0.25)" className="border border-line p-0!">
      <div className="grid md:grid-cols-2">
        <div className="p-6 md:p-10">
          <span className="rounded-full border border-mint/30 bg-mint/10 px-2.5 py-1 font-mono text-[11px] text-mint">Actuarial research · R</span>
          <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">Coverage Gaps in SHIF: The Cost of a Broken Premium Floor</h3>
          <p className="mt-4 leading-relaxed text-zinc-400">
            Kenya’s new Social Health Insurance Fund charges 2.75% of income with a KES 300 floor. Using 8 years of NHIF data, logistic default
            modelling and ARIMA forecasts, I showed that the floor pushes the lowest earners past the WHO catastrophic-spending threshold, and
            proposed an <span className="text-white">Adjusted Progressive Premium Model</span> to fix it.
          </p>
          <dl className="mt-6 grid grid-cols-3 gap-3">
            {findings.map(f => (
              <div key={f.label}>
                <dt className="font-mono text-2xl font-bold text-white md:text-3xl">
                  <CountUp to={f.to} decimals={1} duration={1.8} suffix="%" />
                </dt>
                <dd className="mt-1 text-xs leading-snug text-zinc-500">{f.label}</dd>
              </div>
            ))}
          </dl>
          <div className="relative z-[2] mt-8 flex flex-wrap gap-2">
            <a href={LINKS.report} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-mint px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-110">
              <FileText className="size-4" /> Full report (PDF)
            </a>
            <a href={LINKS.deck} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-500">
              <Presentation className="size-4" /> Interactive deck
            </a>
            <a href={LINKS.rModels} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-500">
              <GitHubIcon className="size-4" /> R models
            </a>
          </div>
        </div>
        <div className="border-t border-line bg-white md:border-t-0 md:border-l">
          <img src="/shots/shif.webp" alt="Affordability burden curve under SHIF's KES 300 floor" loading="lazy" className="size-full object-contain p-4" />
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />

        <Section
          id="simulate"
          eyebrow="01 · Try it"
          title={
            <>
              Don’t take my word for it. <span className="text-mint">Simulate it.</span>
            </>
          }
          intro="This is the maths I put into production. Tweak an insurer’s assumptions, run 10,000 years of claims, and watch the tail risk appear."
        >
          <MonteCarlo />
        </Section>

        <Section id="work" eyebrow="02 · Selected work" title="Things I’ve built" intro="Each one is full-stack, deployed and documented. Free-tier hosting: live demos may take ~45s to wake up.">
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.name} project={p} wide={i === 0 || i === PROJECTS.length - 1} />
            ))}
          </div>
        </Section>

        <Section id="research" eyebrow="03 · Research" title="Where the actuary shows up">
          <Research />
        </Section>

        <Section id="stack" eyebrow="04 · Toolbox" title="What I work with">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STACK.map(g => (
              <div key={g.group} className="rounded-2xl border border-line bg-panel p-5">
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500">{g.group}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map(item => (
                    <li key={item} className="rounded-lg border border-line bg-ink px-2.5 py-1 text-sm text-zinc-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <section id="contact" className="relative isolate overflow-hidden border-t border-line">
          <div className="absolute inset-0 -z-10 opacity-60">
            <Aurora colorStops={['#a78bfa', '#5eead4', '#60a5fa']} direction="bottom" speed={0.4} height={0.5} opacity={0.6} mouseInteraction={false} />
          </div>
          <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 md:py-32">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-mint">05 · Contact</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Let’s build something statistically significant.</h2>
            <p className="mx-auto mt-5 max-w-xl text-zinc-400">
              Hiring for full-stack, backend or data/actuarial engineering? Drop me a line. No confidence interval required.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={LINKS.email} className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-ink transition hover:bg-mint">
                <Mail className="size-4" /> bryanjessywaweru@gmail.com
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:border-mint/60">
                <LinkedInIcon className="size-4" /> LinkedIn
              </a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:border-mint/60">
                <GitHubIcon className="size-4" /> GitHub
              </a>
              <a href={LINKS.leetcode} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:border-mint/60">
                LeetCode
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center font-mono text-xs text-zinc-600">
        © {new Date().getFullYear()} Jessy Bryan Waweru · Built with React, Tailwind & React Bits · No servers were harmed 🎲
      </footer>
    </>
  );
}
