import { useState, useEffect } from 'react';

const TELEGRAM_URL = 'https://t.me/shoppingenie';
const WHATSAPP_URL = 'https://wa.me/message/shoppingenie';

export default function MaintenancePage() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const id = setInterval(() =>
      setDots(d => d.length >= 3 ? '' : d + '.'), 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Radial glow */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(240,240,240,0.04) 0%, transparent 70%)'
      }} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full gap-8">

        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 999, padding: '6px 16px'
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#f59e0b',
            boxShadow: '0 0 8px rgba(245,158,11,0.6)',
            display: 'inline-block',
            animation: 'pulse-dot 2s ease-in-out infinite'
          }} />
          <span className="label" style={{ color: '#f59e0b', letterSpacing: '0.12em' }}>
            Under Maintenance
          </span>
        </div>

        {/* Wordmark */}
        <div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2rem, 8vw, 3.5rem)',
            fontWeight: 800,
            color: 'var(--text-1)',
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}>
            ShoppeGenie
          </h1>
          <p style={{
            marginTop: 4,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: 'var(--text-3)',
            letterSpacing: '0.15em'
          }}>
            v2.0 — loading{dots}
          </p>
        </div>

        {/* Divider */}
        <div style={{ width: 40, height: 1, background: 'var(--border-2)' }} />

        {/* Message */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <p style={{ margin: 0, fontSize: 16, color: 'var(--text-1)', fontWeight: 500, lineHeight: 1.6 }}>
            We're upgrading the experience.
          </p>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>
            The new version is being prepared with better deals, faster search,
            and a cleaner interface. We'll be back shortly.
          </p>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
          <p className="label" style={{ marginBottom: 4 }}>Stay in the loop</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="btn-telegram" style={{ fontSize: 13, padding: '9px 20px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
              </svg>
              Telegram
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp" style={{ fontSize: 13, padding: '9px 20px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Footer note */}
        <p style={{ margin: 0, fontSize: 12, color: 'var(--text-3)' }}>
          © {new Date().getFullYear()} ShoppeGenie — Back soon.
        </p>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}
