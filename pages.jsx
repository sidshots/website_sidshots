// ── INNER PAGES ───────────────────────────────────────────────────────────────
const { useState: useStateP, useEffect: useEffectP } = React;

// ── EXPERIENCE PAGE ───────────────────────────────────────────────────────────
function ExperiencePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Experience"
        title="Six years, four rooms."
        sub="Branding, content and growth across India's gaming and creator economy. The roles, the wins, and what I learned in each."
      />
      <section style={{ padding: '60px clamp(16px,4vw,48px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {EXPERIENCES.map((exp, i) => (
            <ExpCard key={exp.company} exp={exp} defaultOpen={i === 0} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ExpCard({ exp, defaultOpen }) {
  const [open, setOpen] = useStateP(defaultOpen);
  const [logoSrc, setLogoSrc] = useStateP(0);

  const logoMeta = EXP_LOGOS[exp.company] || { color: exp.color };
  const sources = logoMeta.logo
    ? [logoMeta.logo]
    : (logoMeta.domain ? [`https://www.google.com/s2/favicons?domain=${logoMeta.domain}&sz=64`] : []);
  const showImg = logoSrc < sources.length;

  return (
    <div style={{
      borderRadius: 20,
      border: `1px solid ${open ? 'rgba(139,92,246,0.4)' : T.border}`,
      background: open ? 'linear-gradient(135deg,rgba(139,92,246,0.08),rgba(26,18,48,0.8))' : T.card,
      transition: 'all 0.4s ease', overflow: 'hidden',
    }}>
      {/* Header row */}
      <div onClick={() => setOpen(!open)} style={{
        padding: '24px 28px', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flex: 1, minWidth: 0 }}>
          {/* Logo box */}
          <div style={{
            width: 56, height: 56, borderRadius: 14, flexShrink: 0,
            background: `${logoMeta.color || exp.color}15`,
            border: `1px solid ${logoMeta.color || exp.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
          }}>
            {showImg ? (
              <img
                key={logoSrc}
                src={sources[logoSrc]}
                alt={exp.company}
                style={{ width: logoMeta.logo ? 40 : 28, height: logoMeta.logo ? 40 : 28,
                  objectFit: 'contain', borderRadius: logoMeta.logo ? 8 : 4, opacity: 0.95 }}
                onError={() => setLogoSrc(v => v + 1)}
              />
            ) : (
              <span style={{
                fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.1rem',
                color: logoMeta.color || exp.color,
              }}>
                {exp.company.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>

          <div style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: 'Syne,sans-serif', fontWeight: 800,
              fontSize: 'clamp(1rem,2.5vw,1.3rem)', color: T.text,
              marginBottom: 4, lineHeight: 1.2,
            }}>{exp.company}</div>
            <div style={{
              fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.85rem',
              color: logoMeta.color || exp.color, fontWeight: 500,
            }}>{exp.role}</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.75rem', color: T.muted }}>{exp.period}</div>
            <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.65rem', color: T.muted, opacity: 0.6, marginTop: 2 }}>📍 {exp.location}</div>
          </div>
          <div style={{
            width: 28, height: 28, borderRadius: '50%',
            border: `1px solid ${T.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: T.violet, fontSize: '1.1rem', transition: 'transform 0.3s',
            transform: open ? 'rotate(45deg)' : 'none', flexShrink: 0,
          }}>+</div>
        </div>
      </div>

      {/* Expanded body */}
      {open && (
        <div style={{ padding: '0 28px 28px', borderTop: `1px solid ${T.border}` }}>
          <p style={{
            fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '1rem',
            lineHeight: 1.75, color: 'rgba(245,240,255,0.85)', margin: '24px 0 28px',
          }}>{exp.summary}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 32 }}>
            <div>
              <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: T.muted, marginBottom: 16 }}>◆ Key Wins</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {exp.wins.map((w, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: logoMeta.color || exp.color, flexShrink: 0, marginTop: 3 }}>◆</span>
                    <span style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.85rem',
                      color: T.muted, lineHeight: 1.6 }}>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: T.muted, marginBottom: 16 }}>◆ Focus Areas</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {exp.tags.map(tag => <Tag key={tag} color={logoMeta.color || exp.color}>{tag}</Tag>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── BLOG PAGE ─────────────────────────────────────────────────────────────────
function BlogPage() {
  const [posts, setPosts] = useStateP(FALLBACK_POSTS);
  const [loading, setLoading] = useStateP(true);

  useEffectP(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sidhhesh')
      .then(r => r.json())
      .then(data => {
        if (data.items && data.items.length > 0) {
          const mapped = data.items.map(item => {
            const tmp = document.createElement('div');
            tmp.innerHTML = item.description || '';
            return {
              title:       item.title,
              link:        item.link,
              description: tmp.textContent.slice(0, 200) + '…',
              pubDate:     new Date(item.pubDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
              readMin:     Math.max(3, Math.round(tmp.textContent.split(' ').length / 200)),
              tag:         (item.categories && item.categories[0]) || 'Article',
              thumbnail:   item.thumbnail ||
                (item.content && item.content.match(/<img[^>]+src="([^"]+)"/)?.[1]) ||
                `https://picsum.photos/seed/${item.title.slice(0,8)}/800/450`,
            };
          });
          setPosts(mapped);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <PageHeader
        eyebrow="Journal"
        title="Notes, written."
        sub="Essays on brand, growth, and the craft of building audiences from zero. Live-synced from Medium."
      />
      <section style={{ padding: '60px clamp(16px,4vw,48px)' }}>
        {loading && (
          <div style={{ fontFamily: 'Syne,sans-serif', color: T.muted, marginBottom: 32,
            fontSize: '0.9rem', letterSpacing: '0.08em' }}>Loading from Medium…</div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {posts.map((post, i) => (
            <BlogCard key={i} post={post} featured={i === 0} />
          ))}
        </div>
        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <a href="https://medium.com/@sidhhesh" target="_blank" rel="noreferrer" style={{
            fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.8rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: T.violet, textDecoration: 'none',
            padding: '14px 32px', borderRadius: 100,
            border: `1px solid ${T.border}`,
            display: 'inline-block', transition: 'all 0.3s',
          }}
          onMouseEnter={e => e.target.style.background = 'rgba(139,92,246,0.12)'}
          onMouseLeave={e => e.target.style.background = 'transparent'}>
            All Essays on Medium →
          </a>
        </div>
      </section>
    </div>
  );
}

function BlogCard({ post, featured }) {
  return (
    <GlowCard onClick={() => window.open(post.link || 'https://medium.com/@sidhhesh', '_blank')}
      style={{ display: 'grid', gridTemplateColumns: featured ? '1fr' : 'repeat(auto-fit,minmax(240px,1fr))', overflow: 'hidden' }}>
      {post.thumbnail && (
        <div style={{ aspectRatio: featured ? '21/6' : '16/9', overflow: 'hidden', borderRadius: featured ? '20px 20px 0 0' : '20px 0 0 20px', minHeight: 180 }}>
          <img src={post.thumbnail} alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.75) brightness(0.65)' }}
            onError={e => { e.target.src = `https://picsum.photos/seed/blog${post.title.length}/800/450`; }} />
        </div>
      )}
      <div style={{ padding: '24px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
          <Tag>{post.tag}</Tag>
          <span style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.65rem', color: T.muted }}>{post.pubDate}</span>
          <span style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.65rem', color: T.muted }}>· {post.readMin} min read</span>
        </div>
        <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800,
          fontSize: featured ? 'clamp(1.4rem,3vw,2rem)' : '1.15rem',
          lineHeight: 1.25, marginBottom: 12, color: T.text }}>{post.title}</h2>
        <p style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.875rem',
          lineHeight: 1.7, color: T.muted, marginBottom: 16 }}>{post.description}</p>
        <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.78rem',
          letterSpacing: '0.08em', color: T.violet }}>Read on Medium →</div>
      </div>
    </GlowCard>
  );
}

// ── WORK PAGE ─────────────────────────────────────────────────────────────────
const WORK_ITEMS = [
  { id:1, title:'STANFest 2024 — Brand Film', cat:'Case 01', year:'2024', tag:'Brand',
    desc:'30K footfall, 400M+ impressions, 200+ creators. India\'s biggest gaming creator festival.', thumb:'https://picsum.photos/seed/stan24/800/500' },
  { id:2, title:'GameOnAir — Interview IP', cat:'Case 02', year:'2023', tag:'Content IP',
    desc:'Original interview series, 10M+ views across 10 episodes. Built from zero.', thumb:'https://picsum.photos/seed/goa23/800/500' },
  { id:3, title:'Sportskeeda Esports Rebrand', cat:'Case 03', year:'2023', tag:'Rebrand',
    desc:'Repositioned from general gaming to esports-first. Reach 1M→12M in 14 months.', thumb:'https://picsum.photos/seed/sk23/800/500' },
  { id:4, title:'Pick Your Best — Interactive Format', cat:'Case 04', year:'2023', tag:'Format',
    desc:'Voting-led interactive content format. 10K+ follower growth in 5 days.', thumb:'https://picsum.photos/seed/pyb23/800/500' },
  { id:5, title:'STAN Photon Web3 GTM', cat:'Case 05', year:'2022', tag:'Web3',
    desc:'3,000+ onchain wallets at launch. India\'s first gaming Web3 GTM campaign.', thumb:'https://picsum.photos/seed/w3g22/800/500' },
  { id:6, title:'WEC FreeFire Tri-Nation', cat:'Case 06', year:'2021', tag:'Esports',
    desc:'1M+ impressions, 20K+ followers in a short-cycle esports tournament campaign.', thumb:'https://picsum.photos/seed/wec21/800/500' },
];

function WorkPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Work"
        title="Case Studies."
        sub="Campaigns, content IPs, and brand moments from the last six years. Gaming, esports, and the creator economy."
      />
      <section style={{ padding: '60px clamp(16px,4vw,48px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
          {WORK_ITEMS.map(item => <WorkCard key={item.id} item={item} />)}
        </div>
        {/* YouTube Playlist */}
        <div style={{ marginTop: 60 }}>
          <div style={{ fontSize:'0.68rem', letterSpacing:'0.25em', color:T.violet,
            fontFamily:'Syne,sans-serif', textTransform:'uppercase', marginBottom:12 }}>◆ Watch the Work</div>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800,
            fontSize:'clamp(1.6rem,3.5vw,2.4rem)', letterSpacing:'-0.03em', margin:'0 0 24px' }}>Work Reel</h2>
          <PlaylistEmbed />
        </div>
      </section>
    </div>
  );
}

function PlaylistEmbed() {
  // ── Paste your YouTube playlist ID here (part after list= in the URL) ──
  const PLAYLIST_ID = 'PL-eSfG7cS5RixL0rWR73bSPf-dzQLaRDi';
  const isPlaceholder = PLAYLIST_ID.startsWith('PLxxxxx');
  if (isPlaceholder) {
    return (
      <div style={{
        borderRadius:20, border:`1px solid ${T.border}`, background:T.card,
        padding:'48px 40px', textAlign:'center', maxWidth:700,
      }}>
        <div style={{fontSize:'2.5rem',marginBottom:16}}>🎬</div>
        <div style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1.1rem',color:T.text,marginBottom:10}}>
          Add your YouTube Playlist
        </div>
        <p style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'0.85rem',color:T.muted,lineHeight:1.7}}>
          Share your unlisted playlist ID and I'll embed it here.<br/>
          Find it: <strong style={{color:T.violet}}>YouTube Studio → Playlists → copy the ID after list= in the URL</strong>
        </p>
      </div>
    );
  }
  return (
    <div style={{borderRadius:20,overflow:'hidden',border:`1px solid ${T.border}`,maxWidth:900,aspectRatio:'16/9'}}>
      <iframe
        src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&rel=0&modestbranding=1`}
        title="Work Reel" allowFullScreen={true}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{width:'100%',height:'100%',border:'none',display:'block'}}
      />
    </div>
  );
}

function WorkCard({ item }) {
  const [hov, setHov] = useStateP(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 20, overflow: 'hidden',
        border: `1px solid ${hov ? 'rgba(139,92,246,0.4)' : T.border}`,
        background: T.card, cursor: 'pointer',
        transform: hov ? 'translateY(-5px)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
        boxShadow: hov ? '0 20px 60px rgba(139,92,246,0.15)' : '0 4px 20px rgba(0,0,0,0.3)',
      }}>
      <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
        <img src={item.thumb} alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover',
            filter: 'saturate(0.75) hue-rotate(-10deg) brightness(0.65)',
            transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.6s ease' }} />
        <div style={{ position: 'absolute', inset: 0,
          background: hov
            ? 'radial-gradient(circle at 50% 50%,rgba(139,92,246,0.35),rgba(9,7,15,0.3))'
            : 'linear-gradient(to bottom,transparent 30%,rgba(9,7,15,0.7))' }} />
        <div style={{
          position: 'absolute', top: 14, left: 14,
          fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.65rem',
          letterSpacing: '0.15em', textTransform: 'uppercase',
          padding: '5px 12px', borderRadius: 100,
          background: 'rgba(9,7,15,0.8)', color: T.violet,
          border: `1px solid ${T.border}`, backdropFilter: 'blur(8px)',
        }}>{item.tag}</div>
        {/* Play icon overlay */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: `translate(-50%,-50%) scale(${hov ? 1 : 0.85})`,
          opacity: hov ? 1 : 0, transition: 'all 0.3s',
          width: 52, height: 52, borderRadius: '50%',
          background: 'rgba(9,7,15,0.7)', border: `2px solid rgba(139,92,246,0.7)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ width: 0, height: 0, borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent', borderLeft: `14px solid ${T.text}`, marginLeft: 3 }} />
        </div>
      </div>
      <div style={{ padding: '20px 22px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', color: T.muted }}>{item.cat}</span>
          <span style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.65rem', color: T.muted }}>{item.year}</span>
        </div>
        <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1rem',
          lineHeight: 1.3, marginBottom: 8, color: T.text }}>{item.title}</h3>
        <p style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.8rem',
          color: T.muted, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
      </div>
    </div>
  );
}

// ── CONTACT PAGE ──────────────────────────────────────────────────────────────
function ContactPage() {
  const [sent, setSent] = useStateP(false);
  const [form, setForm] = useStateP({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:sidshot07@gmail.com?subject=Hi from ${form.name}&body=${encodeURIComponent(form.message + '\n\n— ' + form.name + ' (' + form.email + ')')}`;
    setSent(true);
  };

  return (
    <div>
      <PageHeader eyebrow="Contact" title="Let's talk." sub="Open to brand collaborations, content strategy projects, and interesting conversations." />
      <section style={{ padding: '60px clamp(16px,4vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 48, maxWidth: 1000 }}>
        {/* Left info */}
        <div>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: T.muted, marginBottom: 12 }}>◆ Direct</div>
            <a href="mailto:sidshot07@gmail.com" style={{
              fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.1rem',
              color: T.violet, textDecoration: 'none', display: 'block', marginBottom: 8,
            }}>sidshot07@gmail.com</a>
          </div>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: T.muted, marginBottom: 16 }}>◆ On the Internet</div>
            {[
              { label: 'LinkedIn', url: 'https://linkedin.com/in/sidhhesh-shirsath' },
              { label: 'Medium', url: 'https://medium.com/@sidhhesh' },
              { label: 'Instagram', url: 'https://instagram.com' },
            ].map(l => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer" style={{
                display: 'block', fontFamily: 'Syne,sans-serif', fontWeight: 700,
                fontSize: '0.9rem', color: T.text, textDecoration: 'none',
                padding: '12px 0', borderBottom: `1px solid ${T.border}`,
                transition: 'color 0.25s',
              }}
              onMouseEnter={e => e.target.style.color = T.violet}
              onMouseLeave={e => e.target.style.color = T.text}>
                {l.label} ↗
              </a>
            ))}
          </div>
          <div style={{
            padding: '20px', borderRadius: 16, border: `1px solid ${T.border}`,
            background: 'rgba(139,92,246,0.05)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981',
                display: 'inline-block', animation: 'blink 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.8rem', color: T.text }}>Available for work</span>
            </div>
            <p style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.8rem',
              color: T.muted, lineHeight: 1.6, margin: 0 }}>
              Open to brand strategy, content & growth roles, and creative consulting.
            </p>
          </div>
        </div>

        {/* Right form */}
        <div>
          {sent ? (
            <div style={{ padding: 40, borderRadius: 20, background: T.card,
              border: `1px solid ${T.border}`, textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 16 }}>✉️</div>
              <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.3rem',
                color: T.text, marginBottom: 8 }}>Message sent!</div>
              <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.85rem', color: T.muted }}>
                Your email client opened. I'll get back to you soon.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { field: 'name', label: 'Your Name', type: 'text', placeholder: 'Who are you?' },
                { field: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map(({ field, label, type, placeholder }) => (
                <div key={field}>
                  <label style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.7rem',
                    letterSpacing: '0.12em', textTransform: 'uppercase', color: T.muted,
                    display: 'block', marginBottom: 8 }}>{label}</label>
                  <input type={type} placeholder={placeholder} required
                    value={form[field]}
                    onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                    style={{
                      width: '100%', padding: '14px 18px', borderRadius: 12, boxSizing: 'border-box',
                      border: `1px solid ${T.border}`, background: T.card,
                      color: T.text, fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.9rem',
                      outline: 'none', transition: 'border-color 0.3s',
                    }}
                    onFocus={e => e.target.style.borderColor = T.violet}
                    onBlur={e => e.target.style.borderColor = T.border} />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.7rem',
                  letterSpacing: '0.12em', textTransform: 'uppercase', color: T.muted,
                  display: 'block', marginBottom: 8 }}>Message</label>
                <textarea placeholder="What's on your mind?" required rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{
                    width: '100%', padding: '14px 18px', borderRadius: 12, boxSizing: 'border-box',
                    border: `1px solid ${T.border}`, background: T.card,
                    color: T.text, fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.9rem',
                    outline: 'none', resize: 'vertical', transition: 'border-color 0.3s',
                  }}
                  onFocus={e => e.target.style.borderColor = T.violet}
                  onBlur={e => e.target.style.borderColor = T.border} />
              </div>
              <button type="submit" style={{
                fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '0.85rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '16px 32px', borderRadius: 100, border: 'none',
                background: T.violet, color: '#09070f', cursor: 'pointer',
                transition: 'all 0.3s', alignSelf: 'flex-start',
              }}
              onMouseEnter={e => e.target.style.background = T.lilac}
              onMouseLeave={e => e.target.style.background = T.violet}>
                Send Message →
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ExperiencePage, BlogPage, WorkPage, ContactPage });
