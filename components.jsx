// ── SHARED COMPONENTS ────────────────────────────────────────────────────────
const { useState, useEffect, useRef } = React;

function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ['home','experience','blog','work','contact'];
  const labels = { home:'Home', experience:'Experience', blog:'Blog', work:'Work', contact:'Contact' };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (p) => { setPage(p); setOpen(false); window.scrollTo(0,0); };

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:100,
      padding:'0 clamp(16px,4vw,48px)',
      height:64,
      display:'flex', alignItems:'center', justifyContent:'space-between',
      background: scrolled ? 'rgba(9,7,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? `1px solid ${T.border}` : '1px solid transparent',
      transition:'all 0.4s ease',
    }}>
      <div onClick={() => go('home')} style={{
        fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'1.25rem',
        cursor:'pointer', letterSpacing:'-0.02em', color:T.text,
      }}>
        sidhhesh<span style={{color:T.violet}}>.</span>
      </div>

      {/* Desktop links */}
      <div style={{display:'flex', gap:32, alignItems:'center'}} className="nav-desktop">
        {links.map(l => (
          <span key={l} onClick={() => go(l)} style={{
            fontFamily:'Syne,sans-serif', fontSize:'0.75rem', letterSpacing:'0.1em',
            textTransform:'uppercase', cursor:'pointer',
            color: page===l ? T.violet : T.text,
            opacity: page===l ? 1 : 0.7,
            transition:'all 0.25s',
          }}>{labels[l]}</span>
        ))}
      </div>

      <button onClick={() => go('contact')} className="nav-desktop" style={{
        fontFamily:'Syne,sans-serif', fontSize:'0.7rem', letterSpacing:'0.12em',
        textTransform:'uppercase', padding:'10px 22px', borderRadius:100,
        border:`1px solid ${T.border}`, background:'rgba(139,92,246,0.1)',
        color:T.text, cursor:'pointer', display:'flex', alignItems:'center', gap:8,
        transition:'all 0.3s',
      }}>
        <span style={{width:6,height:6,borderRadius:'50%',background:'#10b981',
          animation:'blink 2s ease-in-out infinite',display:'inline-block'}} />
        Let's Talk
      </button>

      {/* Mobile hamburger */}
      <button onClick={() => setOpen(!open)} className="nav-mobile" style={{
        background:'none', border:'none', color:T.text, cursor:'pointer',
        fontSize:'1.5rem', lineHeight:1, padding:4,
      }}>
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <div style={{
          position:'absolute', top:64, left:0, right:0,
          background:'rgba(9,7,15,0.97)', backdropFilter:'blur(20px)',
          borderBottom:`1px solid ${T.border}`,
          padding:'16px 24px 24px',
          display:'flex', flexDirection:'column', gap:4,
        }}>
          {links.map(l => (
            <div key={l} onClick={() => go(l)} style={{
              fontFamily:'Syne,sans-serif', fontSize:'1rem', fontWeight:600,
              textTransform:'uppercase', letterSpacing:'0.08em',
              padding:'12px 0', cursor:'pointer', color: page===l ? T.violet : T.text,
              borderBottom:`1px solid rgba(139,92,246,0.08)`,
            }}>{labels[l]}</div>
          ))}
        </div>
      )}
    </nav>
  );
}

function Footer({ setPage }) {
  const socials = [
    { label: 'LinkedIn',  url: 'https://www.linkedin.com/in/sidhhesh-shirsath' },
    { label: 'X / Twitter', url: 'https://x.com/sidshots' },
    { label: 'Instagram', url: 'https://www.instagram.com/sid_sh0ts/' },
    { label: 'Medium',    url: 'https://medium.com/@sidhhesh' },
  ];
  return (
    <footer style={{
      padding:'48px clamp(16px,4vw,48px) 32px',
      borderTop:`1px solid ${T.border}`,
    }}>
      <div style={{ display:'flex', flexWrap:'wrap', gap:40, justifyContent:'space-between', marginBottom:32 }}>
        <div>
          <div onClick={() => { setPage('home'); window.scrollTo(0,0); }} style={{
            fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'1.3rem',
            cursor:'pointer', letterSpacing:'-0.02em', marginBottom:8,
          }}>
            sidhhesh<span style={{color:T.violet}}>.</span>
          </div>
          <p style={{ fontFamily:'Plus Jakarta Sans,sans-serif', fontSize:'0.82rem',
            color:T.muted, maxWidth:260, lineHeight:1.6 }}>
            Brand, Content & Growth.<br />Six years in India's gaming & creator economy.
          </p>
        </div>
        <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'flex-start' }}>
          {socials.map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" style={{
              display:'inline-flex', alignItems:'center', gap:8,
              padding:'10px 18px', borderRadius:100,
              border:`1px solid ${T.border}`, background:'rgba(139,92,246,0.05)',
              fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'0.72rem',
              letterSpacing:'0.08em', textTransform:'uppercase',
              color:T.muted, textDecoration:'none', transition:'all 0.25s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=T.violet;e.currentTarget.style.color=T.violet;e.currentTarget.style.background='rgba(139,92,246,0.1)'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.muted;e.currentTarget.style.background='rgba(139,92,246,0.05)'}}>
              {s.label} ↗
            </a>
          ))}
          <a href="mailto:sidshot07@gmail.com" style={{
            display:'inline-flex', alignItems:'center', gap:8,
            padding:'10px 18px', borderRadius:100,
            border:`1px solid ${T.violet}`, background:'rgba(139,92,246,0.1)',
            fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'0.72rem',
            letterSpacing:'0.08em', textTransform:'uppercase',
            color:T.violet, textDecoration:'none', transition:'all 0.25s',
          }}>
            Email →
          </a>
        </div>
      </div>
      <div style={{ borderTop:`1px solid ${T.border}`, paddingTop:20,
        display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
        <div style={{ fontFamily:'Syne,sans-serif', fontSize:'0.68rem', color:T.muted, opacity:0.45 }}>
          © 2026 Sidhhesh Shirsath
        </div>
        <div style={{ fontFamily:'Syne,sans-serif', fontSize:'0.68rem', color:T.muted, opacity:0.45 }}>
          Blog synced from Medium · Built with no-cost stack
        </div>
      </div>
    </footer>
  );
}

function PageHeader({ eyebrow, title, sub }) {
  return (
    <section style={{
      padding:'100px clamp(16px,4vw,48px) 56px',
      borderBottom:`1px solid ${T.border}`,
    }}>
      <div style={{fontSize:'0.68rem', letterSpacing:'0.25em', color:T.violet,
        fontFamily:'Syne,sans-serif', textTransform:'uppercase', marginBottom:16}}>
        ◆ {eyebrow}
      </div>
      <h1 style={{
        fontFamily:'Syne,sans-serif', fontWeight:800,
        fontSize:'clamp(2.5rem,7vw,5rem)', lineHeight:1.05,
        letterSpacing:'-0.03em', margin:'0 0 20px', color:T.text,
      }}>{title}</h1>
      {sub && <p style={{
        maxWidth:560, lineHeight:1.7, color:T.muted,
        fontSize:'clamp(0.95rem,2vw,1.1rem)',
        fontFamily:'Plus Jakarta Sans,sans-serif',
      }}>{sub}</p>}
    </section>
  );
}

function Tag({ children, color }) {
  return (
    <span style={{
      display:'inline-block',
      padding:'4px 12px', borderRadius:100,
      fontSize:'0.68rem', letterSpacing:'0.08em', textTransform:'uppercase',
      background: color ? `${color}18` : 'rgba(139,92,246,0.1)',
      border:`1px solid ${color ? color+'40' : T.border}`,
      color: color || T.lilac,
      fontFamily:'Syne,sans-serif',
    }}>{children}</span>
  );
}

function GlowCard({ children, style={}, onClick, hover=true }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => hover && setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background:T.card,
        border:`1px solid ${hov ? 'rgba(139,92,246,0.45)' : T.border}`,
        borderRadius:20,
        transition:'all 0.4s cubic-bezier(0.22,1,0.36,1)',
        transform: hov && hover ? 'translateY(-5px)' : 'none',
        boxShadow: hov && hover ? '0 20px 60px rgba(139,92,246,0.18)' : '0 4px 20px rgba(0,0,0,0.3)',
        cursor: onClick ? 'pointer' : 'default',
        position:'relative', overflow:'hidden',
        ...style,
      }}
    >
      {hov && hover && (
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none',
          background:'radial-gradient(circle at 50% 0%,rgba(139,92,246,0.08),transparent 60%)',
        }} />
      )}
      {children}
    </div>
  );
}

// Export all shared components
Object.assign(window, { Nav, Footer, PageHeader, Tag, GlowCard });
