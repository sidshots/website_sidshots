// ── HOME PAGE ────────────────────────────────────────────────────────────────
const { useState: useStateH, useEffect: useEffectH, useRef: useRefH } = React;

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ setPage }) {
  const words = ROTATING_WORDS;
  const [wi, setWi] = useStateH(0);
  useEffectH(() => {
    const t = setInterval(() => setWi(v => (v+1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{
      minHeight:'100vh', display:'flex', alignItems:'center',
      padding:'80px clamp(16px,4vw,48px) 60px',
      position:'relative', overflow:'hidden',
    }}>
      {/* Ambient blobs */}
      <div style={{position:'absolute',top:'-10%',left:'-8%',width:600,height:600,
        background:'radial-gradient(circle,rgba(139,92,246,0.22),transparent 65%)',
        filter:'blur(80px)',pointerEvents:'none'}} />
      <div style={{position:'absolute',bottom:'5%',right:'-5%',width:500,height:500,
        background:'radial-gradient(circle,rgba(168,85,247,0.16),transparent 65%)',
        filter:'blur(70px)',pointerEvents:'none'}} />

      <div style={{
        display:'grid', gridTemplateColumns:'1fr', gap:48,
        width:'100%', maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1,
      }} className="hero-grid">
        {/* Left: Text */}
        <div className="hero-text">
          <div style={{fontSize:'0.68rem',letterSpacing:'0.3em',color:T.violet,
            fontFamily:'Syne,sans-serif',textTransform:'uppercase',marginBottom:20}}>
            ◆ Portfolio · 2026
          </div>
          <h1 style={{
            fontFamily:'Syne,sans-serif',fontWeight:800,
            fontSize:'clamp(3.2rem,9vw,7rem)',lineHeight:1,
            letterSpacing:'-0.04em',margin:'0 0 8px',color:T.text,
          }}>
            Hey, I'm
          </h1>
          <h1 style={{
            fontFamily:'Syne,sans-serif',fontWeight:800,
            fontSize:'clamp(3.2rem,9vw,7rem)',lineHeight:1,
            letterSpacing:'-0.04em',margin:'0 0 32px',
            background:'linear-gradient(135deg,#e9d5ff,#8b5cf6 70%)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
          }}>
            Sidhhesh
          </h1>

          {/* Rotating word */}
          <div style={{
            display:'inline-flex',alignItems:'center',gap:12,
            padding:'10px 20px',borderRadius:100,
            border:`1px solid ${T.border}`,
            background:'rgba(139,92,246,0.07)',
            marginBottom:28,
          }}>
            <span style={{width:8,height:8,borderRadius:'50%',background:T.violet,
              display:'inline-block',flexShrink:0,animation:'blink 1.8s ease-in-out infinite'}} />
            <span key={wi} style={{
              fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.85rem',
              letterSpacing:'0.1em',textTransform:'uppercase',color:T.lilac,
              animation:'wordIn 0.4s ease forwards',
            }}>{words[wi]}</span>
          </div>

          <p style={{
            maxWidth:480,lineHeight:1.75,color:T.muted,
            fontSize:'clamp(1rem,2vw,1.15rem)',marginBottom:40,
            fontFamily:'Plus Jakarta Sans,sans-serif',
          }}>
            Six years at the intersection of Branding, Content & Growth in India's gaming and creator economy. Data-informed creativity as the one principle.
          </p>

          <div style={{display:'flex',flexWrap:'wrap',gap:12}}>
            <a href="mailto:sidshot07@gmail.com" style={{
              fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.8rem',
              letterSpacing:'0.1em',textTransform:'uppercase',
              padding:'14px 28px',borderRadius:100,
              background:T.violet,color:'#09070f',textDecoration:'none',
              transition:'all 0.3s',display:'inline-block',
            }}
            onMouseEnter={e=>e.target.style.background=T.lilac}
            onMouseLeave={e=>e.target.style.background=T.violet}>
              Let's Talk →
            </a>
            <button onClick={() => { setPage('experience'); window.scrollTo(0,0); }} style={{
              fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.8rem',
              letterSpacing:'0.1em',textTransform:'uppercase',
              padding:'14px 28px',borderRadius:100,
              border:`1px solid ${T.border}`,
              background:'transparent',color:T.text,cursor:'pointer',
              transition:'all 0.3s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=T.violet;e.currentTarget.style.background='rgba(139,92,246,0.1)'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.background='transparent'}}>
              Explore Work
            </button>
          </div>
        </div>

        {/* Right: Profile photo orbit */}
        <div className="hero-photo" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <OrbitPhoto />
        </div>
      </div>
    </section>
  );
}

function OrbitPhoto() {
  // Words arc from 7PM (210°) to 11PM (330°) — below the photo, not blocking it
  const arcStart = 210, arcEnd = 330;
  return (
    <div style={{position:'relative',width:'min(360px,80vw)',aspectRatio:'1/1'}}>
      {/* Decorative ring */}
      <div style={{
        position:'absolute',inset:0,
        border:'1px dashed rgba(139,92,246,0.18)',borderRadius:'50%',
        pointerEvents:'none',
      }} />
      {/* Words along arc — no full spin, gentle float */}
      {ROTATING_WORDS.map((w,i) => {
        const angle = arcStart + (i/(ROTATING_WORDS.length-1))*(arcEnd-arcStart);
        const rad = (angle - 90) * Math.PI / 180;
        const r = 50; // % radius
        const x = 50 + r * Math.cos(rad);
        const y = 50 + r * Math.sin(rad);
        return (
          <div key={w} style={{
            position:'absolute',
            left:`${x}%`, top:`${y}%`,
            transform:'translate(-50%,-50%)',
            animation:`wordFloat 3s ease-in-out ${i*0.5}s infinite`,
          }}>
            <div style={{
              fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.65rem',
              letterSpacing:'0.1em',textTransform:'uppercase',
              padding:'6px 14px',borderRadius:100,whiteSpace:'nowrap',
              background:'rgba(9,7,15,0.92)',border:`1px solid rgba(139,92,246,0.4)`,
              color:T.lilac,backdropFilter:'blur(10px)',
            }}>{w}</div>
          </div>
        );
      })}
      {/* Photo */}
      <div style={{
        position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-52%)',
        width:'66%',aspectRatio:'1/1',borderRadius:'50%',overflow:'hidden',
        boxShadow:'0 0 80px rgba(139,92,246,0.5),0 0 30px rgba(139,92,246,0.3)',
        border:`3px solid rgba(139,92,246,0.6)`,
      }}>
        <img src="pfp.png" alt="Sidhhesh Shirsath"
          style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
      </div>
    </div>
  );
}

// ── MEDIUM LATEST BLOG ────────────────────────────────────────────────────────
function LatestBlogCard({ setPage }) {
  const [post, setPost] = useStateH(null);
  const [loading, setLoading] = useStateH(true);

  useEffectH(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sidhhesh')
      .then(r => r.json())
      .then(data => {
        if (data.items && data.items.length > 0) {
          const item = data.items[0];
          // Strip HTML from description
          const tmp = document.createElement('div');
          tmp.innerHTML = item.description || '';
          const text = tmp.textContent.slice(0, 160) + '…';
          setPost({
            title:     item.title,
            link:      item.link,
            summary:   text,
            date:      new Date(item.pubDate).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}),
            thumbnail: item.thumbnail || (item.content && item.content.match(/<img[^>]+src="([^"]+)"/)?.[1]),
            tag:       (item.categories && item.categories[0]) || 'Article',
          });
        } else {
          setPost(FALLBACK_POSTS[0]);
        }
      })
      .catch(() => setPost(FALLBACK_POSTS[0]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <GlowCard onClick={() => post && window.open(post.link || 'https://medium.com/@sidhhesh','_blank')} style={{flex:1,minHeight:320}}>
      {post && post.thumbnail && (
        <div style={{height:160,overflow:'hidden',borderRadius:'20px 20px 0 0'}}>
          <img src={post.thumbnail} alt={post.title}
            style={{width:'100%',height:'100%',objectFit:'cover',filter:'saturate(0.8) brightness(0.75)'}} />
          <div style={{position:'absolute',top:0,left:0,right:0,height:160,
            background:'linear-gradient(to bottom,transparent 40%,rgba(26,18,48,0.9))'}} />
        </div>
      )}
      <div style={{padding:'20px 24px 24px'}}>
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
          <Tag>◆ Latest · Medium</Tag>
          {post && <span style={{fontFamily:'Syne,sans-serif',fontSize:'0.65rem',color:T.muted}}>{post.date}</span>}
        </div>
        {loading ? (
          <div style={{fontFamily:'Syne,sans-serif',color:T.muted,fontSize:'0.9rem'}}>Loading latest post…</div>
        ) : post ? (
          <>
            <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1.15rem',
              lineHeight:1.3,marginBottom:12,color:T.text}}>{post.title}</h3>
            <p style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'0.85rem',
              lineHeight:1.65,color:T.muted,marginBottom:16}}>{post.summary}</p>
            <div style={{display:'flex',alignItems:'center',gap:6,
              fontSize:'0.75rem',fontFamily:'Syne,sans-serif',color:T.violet,fontWeight:700}}>
              Read on Medium →
            </div>
          </>
        ) : (
          <div style={{fontFamily:'Syne,sans-serif',color:T.muted}}>Visit medium.com/@sidhhesh</div>
        )}
      </div>
    </GlowCard>
  );
}

// ── VIDEO PICKS ───────────────────────────────────────────────────────────────
function VideoPicksSection() {
  const [active, setActive] = useStateH(0);

  return (
    <section style={{padding:'80px clamp(16px,4vw,48px)'}}>
      <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',
        flexWrap:'wrap',gap:16,marginBottom:40}}>
        <div>
          <div style={{fontSize:'0.68rem',letterSpacing:'0.25em',color:T.violet,
            fontFamily:'Syne,sans-serif',textTransform:'uppercase',marginBottom:12}}>
            ◆ Recommended This Week
          </div>
          <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,
            fontSize:'clamp(1.8rem,4vw,2.8rem)',letterSpacing:'-0.03em',margin:0}}>
            Watch with me
          </h2>
        </div>
        <p style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'0.85rem',
          color:T.muted,maxWidth:320,lineHeight:1.6,margin:0}}>
          Three picks I'm watching this week — on brand, gaming & the creator economy.
        </p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20}}>
        {VIDEO_PICKS.map((v,i) => (
          <VideoCard key={v.id} video={v} index={i} active={active===i} setActive={setActive} />
        ))}
      </div>
    </section>
  );
}

function parseYTId(raw) {
  if (!raw) return null;
  if (raw.startsWith('CHANNEL:')) return null;
  const short = raw.match(/youtu\.be\/([\w-]+)/);
  if (short) return short[1];
  const watch = raw.match(/[?&]v=([\w-]+)/);
  if (watch) return watch[1];
  if (/^[\w-]{10,12}$/.test(raw.trim())) return raw.trim();
  return null;
}

function VideoCard({ video, index, active, setActive }) {
  const ytId  = parseYTId(video.id);
  const isChannel = !ytId && video.id && video.id.startsWith('CHANNEL:');
  const thumb = ytId
    ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
    : `https://picsum.photos/seed/vid${index}/800/450`;
  const ytUrl = ytId
    ? `https://www.youtube.com/watch?v=${ytId}`
    : isChannel
    ? `https://www.youtube.com/${video.id.replace('CHANNEL:','')}`
    : `https://www.youtube.com`;

  return (
    <GlowCard onClick={() => { if(ytUrl !== '#') window.open(ytUrl,'_blank','noopener,noreferrer'); }} style={{overflow:'visible',cursor:'pointer'}}>
      {/* Thumbnail */}
      <div style={{position:'relative',aspectRatio:'16/9',borderRadius:'20px 20px 0 0',overflow:'hidden'}}>
        <img src={thumb} alt={video.title}
          style={{width:'100%',height:'100%',objectFit:'cover',
            filter:'saturate(0.85) brightness(0.7)',transition:'filter 0.4s'}}
          onError={e => { e.target.src=`https://picsum.photos/seed/vid${index}/800/450`; }}
        />
        <div style={{position:'absolute',inset:0,
          background:'radial-gradient(circle at 50% 50%,rgba(139,92,246,0.25),transparent 70%)'}} />
        {/* Play button */}
        <div style={{
          position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',
          width:52,height:52,borderRadius:'50%',
          background:'rgba(9,7,15,0.75)',border:`2px solid rgba(139,92,246,0.7)`,
          backdropFilter:'blur(8px)',
          display:'flex',alignItems:'center',justifyContent:'center',
        }}>
          <div style={{width:0,height:0,borderTop:'8px solid transparent',
            borderBottom:'8px solid transparent',
            borderLeft:`14px solid ${T.text}`,marginLeft:3}} />
        </div>
        {/* Index badge */}
        <div style={{
          position:'absolute',top:12,left:12,
          fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'0.7rem',
          letterSpacing:'0.1em',
          padding:'4px 10px',borderRadius:100,
          background:'rgba(9,7,15,0.85)',color:T.violet,
          border:`1px solid ${T.border}`,backdropFilter:'blur(6px)',
        }}>
          {String(index+1).padStart(2,'0')}
        </div>
      </div>

      <div style={{padding:'18px 20px 20px'}}>
        <div style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'0.95rem',
          lineHeight:1.35,marginBottom:8,color:T.text}}>{video.title}</div>
        <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.7rem',letterSpacing:'0.06em',
          color:T.violet,marginBottom:10}}>{video.channel}</div>
        <div style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'0.8rem',
          color:T.muted,fontStyle:'italic',lineHeight:1.5}}>"{video.note}"</div>
      </div>
    </GlowCard>
  );
}

// ── LATEST SECTION (Blog + Videos combined) ───────────────────────────────────
function LatestSection({ setPage }) {
  return (
    <section style={{
      padding:'80px clamp(16px,4vw,48px)',
      borderTop:`1px solid ${T.border}`,
    }}>
      <div style={{marginBottom:40}}>
        <div style={{fontSize:'0.68rem',letterSpacing:'0.25em',color:T.violet,
          fontFamily:'Syne,sans-serif',textTransform:'uppercase',marginBottom:12}}>
          ◆ Latest & Current
        </div>
        <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,
          fontSize:'clamp(1.8rem,4vw,2.8rem)',letterSpacing:'-0.03em',margin:'0 0 8px'}}>
          Fresh off the press
        </h2>
        <p style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'0.9rem',
          color:T.muted,maxWidth:420,lineHeight:1.6,margin:0}}>
          Latest blog synced live from Medium. Updated whenever I publish.
        </p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:20}}>
        <LatestBlogCard setPage={setPage} />
        <MoreOnMediumCard />
      </div>
    </section>
  );
}

function MoreOnMediumCard() {
  return (
    <GlowCard onClick={() => window.open('https://medium.com/@sidhhesh','_blank')}
      style={{minHeight:280,background:`linear-gradient(135deg,${T.violet},#6d28d9)`,
        border:'none',display:'flex',flexDirection:'column',justifyContent:'flex-end',
        padding:28}}>
      <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.7rem',letterSpacing:'0.2em',
        textTransform:'uppercase',color:'rgba(255,255,255,0.65)',marginBottom:16}}>
        ◆ All Essays
      </div>
      <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1.8rem',
        lineHeight:1.1,color:'#fff',marginBottom:16,letterSpacing:'-0.03em'}}>
        Read more<br />on Medium →
      </h3>
      <p style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'0.85rem',
        color:'rgba(255,255,255,0.7)',lineHeight:1.6,marginBottom:0}}>
        Branding, growth, and the craft of building audiences from zero.
      </p>
    </GlowCard>
  );
}

// ── EXPERIENCE TEASER ─────────────────────────────────────────────────────────
function ExperienceTeaser({ setPage }) {
  return (
    <section style={{padding:'80px clamp(16px,4vw,48px)',borderTop:`1px solid ${T.border}`}}>
      <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',
        flexWrap:'wrap',gap:16,marginBottom:40}}>
        <div>
          <div style={{fontSize:'0.68rem',letterSpacing:'0.25em',color:T.violet,
            fontFamily:'Syne,sans-serif',textTransform:'uppercase',marginBottom:12}}>◆ Experience</div>
          <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,
            fontSize:'clamp(1.8rem,4vw,2.8rem)',letterSpacing:'-0.03em',margin:0}}>
            Places that shaped me
          </h2>
        </div>
        <button onClick={() => { setPage('experience'); window.scrollTo(0,0); }} style={{
          fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.75rem',letterSpacing:'0.1em',
          textTransform:'uppercase',padding:'10px 22px',borderRadius:100,
          border:`1px solid ${T.border}`,background:'transparent',color:T.text,cursor:'pointer',
          whiteSpace:'nowrap',
        }}>Full Timeline →</button>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>
        {EXPERIENCES.map((exp,i) => (
          <GlowCard key={exp.company} onClick={() => { setPage('experience'); window.scrollTo(0,0); }}
            style={{padding:24}}>
            <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',
              gap:12,marginBottom:16}}>
              <ExpTeaseLogoH exp={exp} />
              <span style={{fontFamily:'Syne,sans-serif',fontSize:'0.65rem',color:T.muted,
                whiteSpace:'nowrap',marginTop:4}}>
                {exp.period.split('—')[0].trim()}
              </span>
            </div>
            <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.85rem',
              color:exp.color||T.violet,marginBottom:8,lineHeight:1.3}}>{exp.role}</div>
            <p style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'0.8rem',
              color:T.muted,lineHeight:1.6,margin:0}}>{exp.summary}</p>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

// ── PARTNERS MARQUEE ──────────────────────────────────────────────────────────
function PartnersMarquee() {
  const row1 = PARTNERSHIPS.slice(0, 7);
  const row2 = PARTNERSHIPS.slice(7);
  return (
    <section style={{padding:'80px 0',borderTop:`1px solid ${T.border}`,overflow:'hidden'}}>
      <div style={{padding:'0 clamp(16px,4vw,48px)',marginBottom:40}}>
        <div style={{fontSize:'0.68rem',letterSpacing:'0.25em',color:T.violet,
          fontFamily:'Syne,sans-serif',textTransform:'uppercase',marginBottom:12}}>
          ◆ Partnerships & Clients
        </div>
        <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,
          fontSize:'clamp(1.8rem,4vw,2.8rem)',letterSpacing:'-0.03em',margin:'0 0 8px'}}>
          Brands in the orbit
        </h2>
        <p style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'0.85rem',
          color:T.muted,maxWidth:480,lineHeight:1.6,margin:0}}>
          Campaigns, content collaborations and client work across 6 years. Not direct employment — partnerships and collaborations.
        </p>
      </div>
      <div style={{position:'relative'}}>
        <div style={{position:'absolute',left:0,top:0,bottom:0,width:100,
          background:`linear-gradient(to right,${T.bg},transparent)`,zIndex:2,pointerEvents:'none'}} />
        <div style={{position:'absolute',right:0,top:0,bottom:0,width:100,
          background:`linear-gradient(to left,${T.bg},transparent)`,zIndex:2,pointerEvents:'none'}} />
        <div style={{overflow:'hidden',marginBottom:12}}>
          <div style={{display:'flex',gap:12,width:'max-content',animation:'marqL 50s linear infinite'}}>
            {[...row1,...row1,...row1].map((p,i) => <PartnerChip key={i} p={p} />)}
          </div>
        </div>
        <div style={{overflow:'hidden'}}>
          <div style={{display:'flex',gap:12,width:'max-content',animation:'marqR 60s linear infinite'}}>
            {[...row2,...row2,...row2].map((p,i) => <PartnerChip key={i} p={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpTeaseLogoH({ exp }) {
  const logoMeta = EXP_LOGOS[exp.company] || {};
  const [err, setErr] = useStateH(false);
  if (logoMeta.logo && !err) return (
    <img src={logoMeta.logo} alt={exp.company}
      style={{height:32,maxWidth:100,objectFit:'contain',borderRadius:6}}
      onError={()=>setErr(true)} />
  );
  return <span style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1rem',
    color:exp.color||T.violet}}>{exp.company}</span>;
}

function PartnerChip({ p }) {
  const [src, setSrc] = useStateH(0);
  // Use local logo if available, else Google favicon
  const sources = p.logo
    ? [p.logo]
    : p.domain ? [`https://www.google.com/s2/favicons?domain=${p.domain}&sz=64`] : [];
  const handleErr = () => setSrc(v => v + 1);
  const showImg = src < sources.length;

  return (
    <div style={{
      display:'inline-flex', alignItems:'center', gap:10,
      padding:'12px 22px', borderRadius:14,
      border:`1px solid ${T.border}`, background:T.card,
      minWidth:170, whiteSpace:'nowrap', flexShrink:0,
    }}>
      {showImg ? (
        <img
          key={src}
          src={sources[src]}
          alt={p.name}
          style={{
            height: src === 0 ? 22 : 18,
            maxWidth: 80,
            objectFit:'contain',
            filter:'brightness(0) invert(1)',
            opacity:0.85,
          }}
          onError={handleErr}
        />
      ) : (
        <span style={{
          width:8, height:8, borderRadius:'50%', flexShrink:0,
          background: p.color || T.violet,
        }} />
      )}
      <span style={{
        fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'0.78rem',
        letterSpacing:'0.06em', color: T.muted, textTransform:'uppercase',
      }}>{p.name}</span>
    </div>
  );
}

// ── MEDIA GALLERY ─────────────────────────────────────────────────────────────
function MediaGallery() {
  return (
    <section style={{ padding:'80px 0', borderTop:`1px solid ${T.border}`, overflow:'hidden' }}>
      <div style={{ padding:'0 clamp(16px,4vw,48px)', marginBottom:40 }}>
        <div style={{ fontSize:'0.68rem', letterSpacing:'0.25em', color:T.violet,
          fontFamily:'Syne,sans-serif', textTransform:'uppercase', marginBottom:12 }}>
          ◆ In The Field
        </div>
        <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800,
          fontSize:'clamp(1.8rem,4vw,2.8rem)', letterSpacing:'-0.03em', margin:'0 0 8px' }}>
          Moments &amp; Media
        </h2>
        <p style={{ fontFamily:'Plus Jakarta Sans,sans-serif', fontSize:'0.85rem',
          color:T.muted, maxWidth:480, lineHeight:1.6, margin:0 }}>
          STANFest, creator shoots, event branding — fragments from six years on the ground.
        </p>
      </div>

      {/* Scrolling strip */}
      <div style={{ position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:100,
          background:`linear-gradient(to right,${T.bg},transparent)`, zIndex:2, pointerEvents:'none' }} />
        <div style={{ position:'absolute', right:0, top:0, bottom:0, width:100,
          background:`linear-gradient(to left,${T.bg},transparent)`, zIndex:2, pointerEvents:'none' }} />

        <div style={{ display:'flex', gap:16, width:'max-content', animation:'marqR 55s linear infinite' }}>
          {[...MEDIA_GALLERY, ...MEDIA_GALLERY, ...MEDIA_GALLERY].map((item, i) => (
            <MediaCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MediaCard({ item, index }) {
  const [err, setErr] = useStateH(false);
  const isVideo   = item.type === 'video';
  const isYT      = item.type === 'youtube';
  const thumbUrl  = isYT
    ? `https://img.youtube.com/vi/${item.src}/maxresdefault.jpg`
    : item.src;

  return (
    <div style={{
      position:'relative', width:260, height:340, borderRadius:18,
      overflow:'hidden', flexShrink:0,
      border:`1px solid ${T.border}`,
      background: T.card,
    }}>
      {/* Image / thumbnail */}
      {!err ? (
        <img
          src={thumbUrl}
          alt={item.caption}
          style={{ width:'100%', height:'100%', objectFit:'cover',
            filter:'saturate(0.85) brightness(0.7)' }}
          onError={() => setErr(true)}
        />
      ) : (
        /* Placeholder when no real image yet */
        <div style={{
          width:'100%', height:'100%',
          display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center',
          background:`linear-gradient(135deg,${T.surface},${T.card})`,
          gap:12,
        }}>
          <div style={{
            fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'2rem',
            color:`${T.violet}40`,
          }}>📷</div>
          <div style={{
            fontFamily:'Syne,sans-serif', fontSize:'0.65rem', letterSpacing:'0.12em',
            textTransform:'uppercase', color:`${T.muted}`, textAlign:'center', padding:'0 20px',
          }}>{item.caption}</div>
          <div style={{
            fontFamily:'Plus Jakarta Sans,sans-serif', fontSize:'0.7rem',
            color:`rgba(245,240,255,0.3)`, textAlign:'center', padding:'0 16px', lineHeight:1.5,
          }}>Drop your photo here:<br /><span style={{color:T.violet}}>{item.src}</span></div>
        </div>
      )}

      {/* Overlay */}
      <div style={{ position:'absolute', inset:0,
        background:'linear-gradient(to bottom,transparent 40%,rgba(9,7,15,0.9))' }} />

      {/* Play icon for video */}
      {(isVideo || isYT) && (
        <div style={{
          position:'absolute', top:'50%', left:'50%',
          transform:'translate(-50%,-50%)',
          width:46, height:46, borderRadius:'50%',
          background:'rgba(9,7,15,0.7)',
          border:`2px solid rgba(139,92,246,0.6)`,
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          <div style={{ width:0, height:0,
            borderTop:'7px solid transparent',
            borderBottom:'7px solid transparent',
            borderLeft:`12px solid ${T.text}`, marginLeft:3 }} />
        </div>
      )}

      {/* Caption */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'16px 18px' }}>
        <div style={{ fontFamily:'Syne,sans-serif', fontSize:'0.6rem', letterSpacing:'0.15em',
          textTransform:'uppercase', color:T.violet, marginBottom:4 }}>◆ {item.tag}</div>
        <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'0.9rem',
          color:T.text, lineHeight:1.3 }}>{item.caption}</div>
      </div>
    </div>
  );
}

// ── RANDOM WORK VIDEO ─────────────────────────────────────────────────────────
const WORK_PLAYLIST_ID = 'PL-eSfG7cS5RixL0rWR73bSPf-dzQLaRDi';

function FeaturedWorkVideo() {
  const randomIndex = useRefH(() => Math.floor(Math.random() * 20)).current;
  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${WORK_PLAYLIST_ID}&index=${randomIndex}&rel=0&modestbranding=1`;
  const playlistUrl = `https://www.youtube.com/playlist?list=${WORK_PLAYLIST_ID}`;

  return (
    <section style={{ padding:'80px clamp(16px,4vw,48px)', borderTop:`1px solid ${T.border}` }}>
      <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:16, marginBottom:32 }}>
        <div>
          <div style={{ fontSize:'0.68rem', letterSpacing:'0.25em', color:T.violet,
            fontFamily:'Syne,sans-serif', textTransform:'uppercase', marginBottom:12 }}>
            ◆ Featured Work · Random Pick
          </div>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800,
            fontSize:'clamp(1.8rem,4vw,2.8rem)', letterSpacing:'-0.03em', margin:0 }}>
            From the work reel
          </h2>
        </div>
        <a href={playlistUrl} target="_blank" rel="noreferrer" style={{
          fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'0.78rem',
          letterSpacing:'0.1em', textTransform:'uppercase',
          padding:'11px 24px', borderRadius:100,
          border:`1px solid ${T.violet}`, color:T.violet,
          textDecoration:'none', whiteSpace:'nowrap',
          transition:'all 0.25s', display:'inline-block',
        }}
        onMouseEnter={e=>{e.target.style.background=T.violet;e.target.style.color='#09070f'}}
        onMouseLeave={e=>{e.target.style.background='transparent';e.target.style.color=T.violet}}>
          View Full Playlist →
        </a>
      </div>

      <div style={{
        borderRadius:20, overflow:'hidden',
        border:`1px solid ${T.border}`,
        aspectRatio:'16/9', maxWidth:900, background:T.card,
        boxShadow:'0 20px 60px rgba(0,0,0,0.4)',
      }}>
        <iframe
          src={embedUrl}
          title="Work Reel"
          allowFullScreen={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ width:'100%', height:'100%', border:'none', display:'block' }}
        />
      </div>

      <p style={{ fontFamily:'Plus Jakarta Sans,sans-serif', fontSize:'0.8rem',
        color:T.muted, marginTop:14, fontStyle:'italic' }}>
        ↑ A random video from the playlist — refreshes on every visit.
      </p>
    </section>
  );
}

// ── LATEST TWEET ──────────────────────────────────────────────────────────────
function LatestTweetSection() {
  const ref = useRefH(null);

  useEffectH(() => {
    const load = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(ref.current);
      }
    };
    if (!document.getElementById('twitter-wjs')) {
      const s = document.createElement('script');
      s.id = 'twitter-wjs';
      s.src = 'https://platform.twitter.com/widgets.js';
      s.onload = load;
      document.body.appendChild(s);
    } else {
      load();
    }
  }, []);

  return (
    <section style={{ padding:'80px clamp(16px,4vw,48px)', borderTop:`1px solid ${T.border}` }}>
      <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:16, marginBottom:32 }}>
        <div>
          <div style={{ fontSize:'0.68rem', letterSpacing:'0.25em', color:T.violet,
            fontFamily:'Syne,sans-serif', textTransform:'uppercase', marginBottom:12 }}>
            ◆ Latest on X
          </div>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800,
            fontSize:'clamp(1.8rem,4vw,2.8rem)', letterSpacing:'-0.03em', margin:0 }}>
            From the feed
          </h2>
        </div>
        <a href="https://x.com/sidshots" target="_blank" rel="noreferrer" style={{
          fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'0.78rem',
          letterSpacing:'0.1em', textTransform:'uppercase',
          padding:'11px 24px', borderRadius:100,
          border:`1px solid ${T.border}`, color:T.text,
          textDecoration:'none', whiteSpace:'nowrap', display:'inline-block',
        }}>
          @sidshots on X ↗
        </a>
      </div>

      <div ref={ref} style={{ maxWidth:550 }}>
        <a className="twitter-timeline"
          data-tweet-limit="1"
          data-theme="dark"
          data-chrome="noheader nofooter noborders transparent"
          href="https://twitter.com/sidshots">
          Latest tweet by @sidshots
        </a>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function HomeCTA({ setPage }) {
  return (
    <section style={{
      padding:'100px clamp(16px,4vw,48px)',
      borderTop:`1px solid ${T.border}`,textAlign:'center',
    }}>
      <div style={{fontSize:'0.68rem',letterSpacing:'0.25em',color:T.violet,
        fontFamily:'Syne,sans-serif',textTransform:'uppercase',marginBottom:20}}>◆ Say Hi</div>
      <h2 style={{
        fontFamily:'Syne,sans-serif',fontWeight:800,
        fontSize:'clamp(3rem,8vw,6rem)',lineHeight:1,
        letterSpacing:'-0.04em',marginBottom:32,
      }}>
        Let's build<br />
        <span style={{background:'linear-gradient(135deg,#e9d5ff,#8b5cf6)',
          WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
          something loud.
        </span>
      </h2>
      <a href="mailto:sidshot07@gmail.com" style={{
        fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'1rem',
        letterSpacing:'0.06em',color:T.text,textDecoration:'none',
        display:'inline-flex',alignItems:'center',gap:8,
        padding:'16px 36px',borderRadius:100,
        border:`1px solid ${T.border}`,
        background:'rgba(139,92,246,0.08)',
        transition:'all 0.3s',
      }}
      onMouseEnter={e=>{e.currentTarget.style.background=T.violet;e.currentTarget.style.color='#09070f'}}
      onMouseLeave={e=>{e.currentTarget.style.background='rgba(139,92,246,0.08)';e.currentTarget.style.color=T.text}}>
        sidshot07@gmail.com →
      </a>
    </section>
  );
}

function HomePage({ setPage }) {
  return (
    <div>
      <Hero setPage={setPage} />
      <LatestSection setPage={setPage} />
      <VideoPicksSection />
      <ExperienceTeaser setPage={setPage} />
      <PartnersMarquee />
      <FeaturedWorkVideo />
      <MediaGallery />
      <LatestTweetSection />
      <HomeCTA setPage={setPage} />
    </div>
  );
}

Object.assign(window, { HomePage });
