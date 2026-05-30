import React from 'react';
import { X, ExternalLink, Award, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  docTitle: string;
  docIssuer: string;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  isOpen,
  onClose,
  docTitle,
  docIssuer
}) => {
  const { language } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg glass-card-strong rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)] border border-neon-cyan/30 animate-[zoomIn_0.25s_ease-out] z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-neon-cyan" />
            <span className="font-display font-semibold text-sm sm:text-base text-white tracking-wide">
              {language === 'ar' ? 'معاينة الشهادة الاعتمادية' : 'Credential Verification'}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:rotate-90 transition-all duration-300 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 flex flex-col items-center text-center space-y-6">
          <div className="relative p-6 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 animate-pulse">
            <ShieldCheck className="w-16 h-16 text-neon-cyan shadow-neon-cyan" />
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {docTitle}
            </h3>
            <p className="text-sm font-medium text-neon-violet">
              {docIssuer}
            </p>
          </div>

          <div className="w-full border-t border-dashed border-white/15 pt-6">
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-cairo">
              {language === 'ar' 
                ? 'تم التحقق من صحة هذا الاعتماد المهني بنجاح عبر الجهة المصدرة الرسمية. تشمل شهادة الاعتماد الأكاديمي والعملي لمهارات البنية التحتية وهندسة الذكاء الاصطناعي.'
                : 'This certification credentials have been successfully parsed and verified through the official issuing authority. Represents academic and practical mastery in systems engineering.'}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-white/10 bg-white/5">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-white/5 text-white/80 hover:bg-white/10 transition-colors cursor-pointer"
          >
            {language === 'ar' ? 'إغلاق' : 'Close'}
          </button>
          <a
            href="https://www.credly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-neon-cyan text-dark-bg font-bold hover:shadow-[0_0_15px_#00f0ff] transition-all duration-200 cursor-pointer"
          >
            <span>{language === 'ar' ? 'التحقق عبر الإنترنت' : 'Verify Online'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
