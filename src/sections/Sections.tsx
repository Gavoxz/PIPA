import { ArrowUpRight } from "lucide-react";
import { site, areas, steps, diffs } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="h-hero">
      <div className="wrap hero-grid">
        <div>
          <h1 id="h-hero">Marcas e sistemas feitos com <em>intenção.</em></h1>
          <p className="lead">{site.lead}</p>
          <div className="cta">
            <a className="btn btn-p" href={site.instagram} target="_blank" rel="noopener noreferrer">Iniciar uma conversa <ArrowUpRight size={18} aria-hidden /></a>
            <a className="btn btn-s" href="#atuacao">Ver o que fazemos</a>
          </div>
        </div>
        <div className="sphere" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="live" src="/brand/symbols/particle-sphere.gif" alt="" width={1000} height={600} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="still" src="/brand/symbols/particle-sphere-still.jpg" alt="" width={1000} height={600} />
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="sec" id="pipa" aria-labelledby="h-about"><div className="wrap split">
      <div><p className="eyebrow">A PIPA</p><h2 id="h-about">Pensar primeiro. Construir depois.</h2></div>
      <p className="big">Uma marca forte não nasce de um logotipo bonito. <span>Ela nasce de entender o que o negócio quer dizer e de manter isso coerente em cada ponto de contato: da identidade ao site, do site ao sistema que sustenta a operação.</span></p>
    </div></section>
  );
}

export function Areas() {
  return (
    <section className="sec" id="atuacao" aria-labelledby="h-areas"><div className="wrap">
      <p className="eyebrow">Atuação</p><h2 id="h-areas" style={{ marginBottom: 48 }}>Três frentes, uma mesma linha de raciocínio.</h2>
      {areas.map((a) => (
        <article className="row" key={a.n}>
          <span className="n">{a.n}</span>
          <h3>{a.t}</h3>
          <div><p>{a.d}</p><small>{a.b}</small></div>
        </article>
      ))}
    </div></section>
  );
}

export function Process() {
  return (
    <section className="sec" id="processo" aria-labelledby="h-proc"><div className="wrap">
      <p className="eyebrow">Processo</p><h2 id="h-proc">Como um projeto acontece.</h2>
      <div className="steps">
        {steps.map((s, i) => (<div key={s.t}><span>0{i + 1}</span><h3>{s.t}</h3><p>{s.d}</p></div>))}
      </div>
    </div></section>
  );
}

export function Differentials() {
  return (
    <section className="sec" aria-labelledby="h-diff"><div className="wrap"><div className="panel">
      <p className="eyebrow">Por que a PIPA</p><h2 id="h-diff">O que isso significa na prática.</h2>
      <div className="diffs">{diffs.map((d) => (<div key={d.t}><h3>{d.t}</h3><p>{d.d}</p></div>))}</div>
    </div></div></section>
  );
}

export function FinalCta() {
  return (
    <section className="sec final" id="contato" aria-labelledby="h-cta"><div className="wrap">
      <h2 id="h-cta">Tem algo para construir?</h2>
      <p>Conte o contexto e o que você quer alcançar. A conversa começa pelo Instagram da PIPA.</p>
      <a className="btn btn-p" href={site.instagram} target="_blank" rel="noopener noreferrer">Chamar @pipa.etc <ArrowUpRight size={18} aria-hidden /></a>
    </div></section>
  );
}

export function Footer() {
  return (
    <footer className="ftr"><div className="wrap">
      <span className="logo">pipa</span>
      <nav aria-label="Rodapé"><a href="#pipa">A PIPA</a><a href="#atuacao">Atuação</a><a href="#processo">Processo</a>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></nav>
      <small>© {new Date().getFullYear()} PIPA</small>
    </div></footer>
  );
}
