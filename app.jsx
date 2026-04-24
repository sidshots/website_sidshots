// ── TWEAKS PANEL + MAIN APP ──────────────────────────────────────────────────
const { useState: useStateA, useEffect: useEffectA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#8b5cf6",
  "video1_id": "dQw4w9WgXcQ",
  "video1_title": "How the creator economy actually works in 2026",
  "video1_channel": "@colinandsamir",
  "video1_note": "Great take on platform shifts",
  "video2_id": "LXb3EKWsInQ",
  "video2_title": "Building brand communities from zero",
  "video2_channel": "@garyvee",
  "video2_note": "Still the blueprint",
  "video3_id": "ZXsQAXx_ao0",
  "video3_title": "The dark side of gaming influencer marketing",
  "video3_channel": "@penguinz0",
  "video3_note": "Important watch for anyone in this space"
}/*EDITMODE-END*/;

function TweaksPanel({ tweaks, setTweaks, visible, onClose }) {
  const field = (key, label, placeholder) => (
    <div style={{ marginBottom: 16 }}>
      <label style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em',
        textTransform: 'uppercase', color: 'rgba(245,240,255,0.5)', display: 'block', marginBottom: 6 }}>
        {label}
      </label>
      <input value={tweaks[key] || ''} placeholder={placeholder}
        onChange={e => {
          const next = { ...tweaks, [key]: e.target.value };
          setTweaks(next);
          window.parent.postMessage({ type: '__edit_mode_set_keys', edits: next }, '*');
          // Sync VIDEO_PICKS global
          window.VIDEO_PICKS = [1,2,3].map(i => ({
            id:      next[`video${i}_id`],
            title:   next[`video${i}_title`],
            channel: next[`video${i}_channel`],
            note:    next[`video${i}_note`],
          }));
        }}
        style={{
          width: '100%', padding: '8px 12px', borderRadius: 8, boxSizing: 'border-box',
          border: '1px solid rgba(139,92,246,0.25)', background: 'rgba(19,15,34,0.9)',
          color: '#f5f0ff', fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.82rem',
          outline: 'none',
        }} />
    </div>
  );

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
      width: 320, maxHeight: '80vh', overflowY: 'auto',
      background: 'rgba(9,7,15,0.97)', border: '1px solid rgba(139,92,246,0.3)',
      borderRadius: 20, padding: 20,
      backdropFilter: 'blur(20px)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '0.9rem',
          letterSpacing: '0.05em', color: '#f5f0ff' }}>⚙ Tweaks</div>
        <button onClick={onClose} style={{
          background: 'none', border: 'none', color: 'rgba(245,240,255,0.5)',
          cursor: 'pointer', fontSize: '1rem', lineHeight: 1,
        }}>✕</button>
      </div>

      <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em',
        textTransform: 'uppercase', color: T.violet, marginBottom: 12 }}>
        ◆ Video Picks (paste YouTube IDs)
      </div>

      {[1,2,3].map(i => (
        <div key={i} style={{
          marginBottom: 20, padding: '14px', borderRadius: 12,
          border: '1px solid rgba(139,92,246,0.15)', background: 'rgba(139,92,246,0.04)',
        }}>
          <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.7rem',
            color: T.lilac, marginBottom: 12, letterSpacing: '0.08em' }}>
            Video {i}
          </div>
          {field(`video${i}_id`,      'YouTube ID',  'e.g. dQw4w9WgXcQ')}
          {field(`video${i}_title`,   'Title',       'Video title')}
          {field(`video${i}_channel`, 'Channel',     '@channelname')}
          {field(`video${i}_note`,    'Your note',   'Why you recommend it')}
        </div>
      ))}

      <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em',
        textTransform: 'uppercase', color: T.violet, margin: '16px 0 12px' }}>
        ◆ Theme
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <label style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.7rem', color: 'rgba(245,240,255,0.5)' }}>
          Accent Color
        </label>
        <input type="color" value={tweaks.accentColor || '#8b5cf6'}
          onChange={e => {
            const next = { ...tweaks, accentColor: e.target.value };
            setTweaks(next);
            window.parent.postMessage({ type: '__edit_mode_set_keys', edits: next }, '*');
            // Update CSS variable live
            document.documentElement.style.setProperty('--violet', e.target.value);
          }}
          style={{ width: 36, height: 28, borderRadius: 6, border: 'none', cursor: 'pointer',
            background: 'none', padding: 0 }} />
        <span style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.7rem', color: T.muted }}>
          {tweaks.accentColor}
        </span>
      </div>

      <div style={{ marginTop: 20, padding: '12px', borderRadius: 10,
        background: 'rgba(250,204,21,0.06)', border: '1px solid rgba(250,204,21,0.2)' }}>
        <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.7rem', color: '#facc15',
          fontWeight: 700, marginBottom: 6 }}>💡 How to update videos</div>
        <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.72rem',
          color: 'rgba(245,240,255,0.55)', lineHeight: 1.6 }}>
          1. Copy the YouTube video ID from the URL (e.g. youtube.com/watch?v=<b style={{color:'#fff'}}>THIS_PART</b>)<br />
          2. Paste into "YouTube ID" above<br />
          3. Changes save automatically
        </div>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useStateA('home');
  const [tweaks, setTweaks] = useStateA(TWEAK_DEFAULTS);
  const [showTweaks, setShowTweaks] = useStateA(false);

  // Sync VIDEO_PICKS from tweaks on load
  useEffectA(() => {
    window.VIDEO_PICKS = [1,2,3].map(i => ({
      id:      tweaks[`video${i}_id`],
      title:   tweaks[`video${i}_title`],
      channel: tweaks[`video${i}_channel`],
      note:    tweaks[`video${i}_note`],
    }));
  }, []);

  // Tweaks panel protocol
  useEffectA(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode')   setShowTweaks(true);
      if (e.data?.type === '__deactivate_edit_mode') setShowTweaks(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const pageEl = {
    home:       <HomePage setPage={setPage} />,
    experience: <ExperiencePage />,
    blog:       <BlogPage />,
    work:       <WorkPage />,
    contact:    <ContactPage />,
  }[page] || <HomePage setPage={setPage} />;

  return (
    <div style={{ minHeight: '100vh', background: T.bg, color: T.text }}>
      <Nav page={page} setPage={setPage} />
      <main style={{ paddingTop: 64 }}>
        {pageEl}
      </main>
      <Footer setPage={setPage} />
      <TweaksPanel
        tweaks={tweaks}
        setTweaks={setTweaks}
        visible={showTweaks}
        onClose={() => {
          setShowTweaks(false);
          window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
        }}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
