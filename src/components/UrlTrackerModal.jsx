import React, { useState, useEffect } from 'react';
import { X, Sparkles, TrendingDown, Bell, CheckCircle2, ShieldCheck, ExternalLink, LineChart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function UrlTrackerModal({ url, onClose }) {
  const [loading, setLoading] = useState(true);
  const [alertEmail, setAlertEmail] = useState('');
  const [targetPrice, setTargetPrice] = useState('15,000');
  const [alertSet, setAlertSet] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [url]);

  const handleSetAlert = (e) => {
    e.preventDefault();
    if (!alertEmail) return;
    setAlertSet(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-2xl rounded-3xl p-6 sm:p-8 relative border border-slate-700/80 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {loading ? (
          <div className="py-12 text-center space-y-4">
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 animate-spin" />
              <span className="text-2xl animate-pulse">🧞‍♂️</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">ShoppinGenie is Magic-Tracking...</h3>
              <p className="text-xs text-slate-400 mt-1">Connecting to Amazon / Flipkart price engines...</p>
            </div>
          </div>
        ) : (
          <div>
            
            {/* Header Title */}
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Live Price Tracker & History</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] line-clamp-1">
              Apple AirPods Pro (2nd Generation) USB-C
            </h2>

            {/* Product Meta Pill */}
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
                Amazon India
              </span>
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Seller: Appario Retail
              </span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 flex items-center gap-1 ml-auto"
              >
                <span>View Product</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Price Verdict Card */}
            <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block">
                  Genie Recommendation:
                </span>
                <div className="text-2xl font-extrabold text-white font-['Outfit'] flex items-baseline gap-2 mt-0.5">
                  <span>₹16,999</span>
                  <span className="text-xs text-slate-400 line-through font-normal">₹24,900</span>
                  <span className="text-xs font-bold text-emerald-400">32% OFF</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  🔥 <strong>BUY NOW!</strong> This is the lowest price recorded in the past 90 days.
                </p>
              </div>

              <div className="shrink-0 text-right">
                <span className="px-3 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs inline-block shadow">
                  LOWEST PRICE EVER
                </span>
              </div>
            </div>

            {/* Simulated 30-Day Price History Graph Visual */}
            <div className="mt-5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-3">
                <span className="flex items-center gap-1">
                  <LineChart className="w-3.5 h-3.5 text-emerald-400" />
                  30-Day Price Trend
                </span>
                <span className="text-emerald-400">Current: ₹16,999</span>
              </div>

              {/* Bar Chart Representation */}
              <div className="h-28 flex items-end justify-between gap-2 pt-4 px-2 border-b border-slate-800">
                {[
                  { date: 'Jun 25', price: '₹22,900', height: '85%' },
                  { date: 'Jul 01', price: '₹24,900', height: '100%' },
                  { date: 'Jul 08', price: '₹21,490', height: '75%' },
                  { date: 'Jul 15', price: '₹19,999', height: '60%' },
                  { date: 'Jul 20', price: '₹18,500', height: '45%' },
                  { date: 'Today', price: '₹16,999', height: '30%', active: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                    {/* Hover tooltip */}
                    <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950 text-[10px] text-white px-2 py-0.5 rounded border border-slate-700 whitespace-nowrap z-20">
                      {item.price}
                    </div>
                    <div
                      style={{ height: item.height }}
                      className={`w-full rounded-t-md transition-all ${
                        item.active ? 'bg-gradient-to-t from-emerald-500 to-teal-400' : 'bg-slate-700/60 group-hover:bg-slate-600'
                      }`}
                    />
                    <span className="text-[10px] text-slate-400 font-medium">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Alert Form */}
            <div className="mt-5 pt-4 border-t border-slate-800">
              {alertSet ? (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Price Drop Alert active! We will notify <strong>{alertEmail}</strong> when price drops below ₹{targetPrice}.</span>
                </div>
              ) : (
                <form onSubmit={handleSetAlert} className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="relative w-full flex-1">
                    <Bell className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Enter Email or Telegram Username for price alert..."
                      value={alertEmail}
                      onChange={(e) => setAlertEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl glass-input placeholder-slate-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow whitespace-nowrap transition-colors"
                  >
                    Set Alert Notification
                  </button>
                </form>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
