'use client';
import { useState } from 'react';
import manual from '@/data/manual';

export default function AdminManual() {
  const [activeChapterId, setActiveChapterId] = useState(null);
  const [expandedVolumes, setExpandedVolumes] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleVolume = (volId) => {
    setExpandedVolumes((prev) => {
      const next = { ...prev };
      next[volId] = !next[volId];
      if (!next[volId]) {
        const currentVol = manual.volumes.find((v) => v.id === volId);
        if (currentVol && currentVol.chapters.some((ch) => ch.id === activeChapterId)) {
          setActiveChapterId(null);
        }
      }
      return next;
    });
  };

  const activeChapter = activeChapterId
    ? manual.volumes.flatMap((v) => v.chapters).find((ch) => ch.id === activeChapterId)
    : null;

  const totalPages = manual.volumes.reduce((sum, v) => sum + v.chapters.length, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-brand-navy text-white sticky top-0 z-30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="text-lg font-bold tracking-tight">{manual.title}</h1>
              <p className="text-xs text-brand-gold/80">{manual.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-300">
            <span>v{manual.version}</span>
            <span className="hidden sm:inline">{manual.date}</span>
            <span className="bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-full font-semibold">
              {totalPages} chapitres
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex">
        <aside
          className={`fixed lg:sticky top-[57px] left-0 h-[calc(100vh-57px)] w-72 bg-white border-r border-gray-200 overflow-y-auto z-20 transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="p-4 space-y-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              Table des matières
            </div>
            {manual.volumes.map((vol) => (
              <div key={vol.id}>
                <button
                  onClick={() => toggleVolume(vol.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between gap-2 ${
                    expandedVolumes[vol.id]
                      ? 'bg-brand-navy/5 text-brand-navy'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex-1 leading-snug">{vol.title}</span>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${expandedVolumes[vol.id] ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedVolumes[vol.id] && (
                  <div className="ml-2 mt-1 space-y-0.5 border-l-2 border-brand-gold/30 pl-2">
                    {vol.chapters.map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => {
                          setActiveChapterId(ch.id);
                          setSidebarOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${
                          activeChapterId === ch.id
                            ? 'bg-brand-gold/15 text-brand-navy font-semibold border-l-2 border-brand-gold -ml-[10px] pl-[14px]'
                            : 'text-gray-500 hover:text-brand-navy hover:bg-gray-50'
                        }`}
                      >
                        {ch.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-10 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="flex-1 min-h-[calc(100vh-57px)]">
          {activeChapter ? (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-xs font-semibold text-brand-gold uppercase tracking-wider mb-4">
                  {manual.volumes
                    .filter((v) => v.chapters.some((ch) => ch.id === activeChapterId))
                    .map((v) => v.title)[0]
                    ?.replace('Volume ', 'Vol. ')}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy leading-tight">
                  {activeChapter.title}
                </h2>
              </div>
              <div
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8"
                dangerouslySetInnerHTML={{ __html: activeChapter.content }}
              />
              <div className="mt-8 flex justify-between items-center border-t border-gray-200 pt-6">
                <div className="text-xs text-gray-400">
                  TOMY Global Services — Document interne confidentiel
                </div>
                <div className="text-xs text-gray-400">
                  Manuel v{manual.version} — {manual.date}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-[80vh]">
              <div className="text-center max-w-lg px-4">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-brand-navy mb-2">Manuel de Consultation</h2>
                <p className="text-gray-500 text-sm">
                  Sélectionnez un chapitre dans la table des matières pour commencer la lecture.
                </p>
                <p className="text-gray-400 text-xs mt-4">
                  {totalPages} chapitres répartis en {manual.volumes.length} volumes
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
