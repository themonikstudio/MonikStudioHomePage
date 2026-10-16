import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { AppItem, Platform } from '../types';
import { Smartphone, Download, QrCode, ExternalLink, Check, Copy, ArrowDownToLine, Sparkles } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

interface QRCodeCardProps {
  app: AppItem;
  className?: string;
  initialPlatform?: 'ios' | 'android' | 'chrome';
}

export const QRCodeCard: React.FC<QRCodeCardProps> = ({
  app,
  className = '',
  initialPlatform
}) => {
  const { t } = useI18n();
  const availablePlatforms: ('ios' | 'android' | 'chrome')[] = [];
  if (app.appStoreUrl) availablePlatforms.push('ios');
  if (app.playStoreUrl) availablePlatforms.push('android');
  if (app.chromeWebStoreUrl) availablePlatforms.push('chrome');

  const [activePlatform, setActivePlatform] = useState<'ios' | 'android' | 'chrome'>(
    initialPlatform && availablePlatforms.includes(initialPlatform)
      ? initialPlatform
      : availablePlatforms[0] || 'ios'
  );

  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const getTargetUrl = (platform: 'ios' | 'android' | 'chrome'): string => {
    switch (platform) {
      case 'ios':
        return app.appStoreUrl || '';
      case 'android':
        return app.playStoreUrl || '';
      case 'chrome':
        return app.chromeWebStoreUrl || '';
      default:
        return app.appStoreUrl || app.playStoreUrl || app.chromeWebStoreUrl || '';
    }
  };

  const currentUrl = getTargetUrl(activePlatform);

  useEffect(() => {
    if (!currentUrl) return;
    let isMounted = true;

    QRCode.toDataURL(currentUrl, {
      width: 280,
      margin: 1.5,
      color: {
        dark: '#24282C',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'M',
    })
      .then((url) => {
        if (isMounted) {
          setQrDataUrl(url);
        }
      })
      .catch((err) => {
        console.error('Failed to generate QR code:', err);
      });

    return () => {
      isMounted = false;
    };
  }, [currentUrl]);

  const handleCopy = async () => {
    if (!currentUrl) return;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  const handleDownloadQR = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = `${app.id}-${activePlatform}-qrcode.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getPlatformLabel = (platform: 'ios' | 'android' | 'chrome') => {
    switch (platform) {
      case 'ios':
        return {
          title: 'Apple App Store',
          sub: 'Scan with Camera on iPhone or iPad',
          badge: 'iOS',
          badgeColor: 'bg-[#24282C] text-white',
        };
      case 'android':
        return {
          title: 'Google Play Store',
          sub: 'Scan with Camera or Google Lens on Android',
          badge: 'Android',
          badgeColor: 'bg-[#779585] text-white',
        };
      case 'chrome':
        return {
          title: 'Chrome Web Store',
          sub: 'Open link or scan on Chromebook',
          badge: 'Extension',
          badgeColor: 'bg-[#D86950] text-white',
        };
    }
  };

  const currentInfo = getPlatformLabel(activePlatform);

  return (
    <div className={`p-6 bg-white rounded-3xl border border-[#EAE4DA] shadow-xs flex flex-col items-center text-center ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-2.5">
        <span className="p-1.5 rounded-xl bg-[#779585]/15 text-[#5C826F]">
          <QrCode size={18} />
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-[#779585]">
          {t.landing.qrScanTitle}
        </span>
      </div>

      <h3 className="text-base font-bold text-[#24282C] mb-1">
        {t.landing.scanWithCamera}
      </h3>
      <p className="text-xs text-[#5A626A] max-w-xs mb-4">
        {t.landing.qrScanSubtitle}
      </p>

      {/* Platform Switcher if multiple platforms exist (e.g. iOS & Android) */}
      {availablePlatforms.length > 1 && (
        <div className="flex p-1 bg-[#FAF8F5] rounded-xl border border-[#EAE4DA] mb-4 gap-1 w-full max-w-xs">
          {availablePlatforms.map((p) => {
            const isSelected = activePlatform === p;
            return (
              <button
                key={p}
                type="button"
                onClick={() => setActivePlatform(p)}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#24282C] text-white shadow-2xs'
                    : 'text-[#5A626A] hover:text-[#24282C] hover:bg-white'
                }`}
              >
                {p === 'ios' ? <Smartphone size={13} /> : <Download size={13} />}
                <span>{p === 'ios' ? 'iOS (App Store)' : 'Google Play'}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* QR Code Canvas Box */}
      <div className="relative p-3.5 bg-white rounded-2xl border-2 border-[#EAE4DA] shadow-inner mb-3 group">
        {qrDataUrl ? (
          <img
            src={qrDataUrl}
            alt={`${app.title} ${currentInfo.title} QR Code`}
            className="w-48 h-48 sm:w-52 sm:h-52 object-contain rounded-xl"
          />
        ) : (
          <div className="w-48 h-48 sm:w-52 sm:h-52 flex items-center justify-center bg-[#FAF8F5] rounded-xl text-xs text-[#808892]">
            Generating QR Code...
          </div>
        )}

        {/* Center overlay badge with app icon */}
        {app.icon && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1.5 bg-white rounded-xl shadow-md border border-[#E0D9CE]">
            <img
              src={app.icon}
              alt="Icon"
              className="w-8 h-8 rounded-lg object-cover"
            />
          </div>
        )}
      </div>

      {/* Platform scanning instructions */}
      <div className="mb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-1 tracking-wider uppercase font-mono">
          <span className={`px-2 py-0.5 rounded-full ${currentInfo.badgeColor}`}>
            {currentInfo.badge}
          </span>
          <span className="text-[#24282C] font-semibold">{currentInfo.title}</span>
        </div>
        <p className="text-[11px] text-[#6B7280]">
          {currentInfo.sub}
        </p>
      </div>

      {/* Action Buttons: Direct Link, Copy URL, Download QR PNG */}
      <div className="flex flex-wrap items-center justify-center gap-2 w-full pt-3 border-t border-[#F0EBE3]">
        {currentUrl && (
          <a
            href={currentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-[#24282C] hover:bg-[#383F46] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
          >
            <span>{t.landing.openLink}</span>
            <ExternalLink size={12} className="opacity-70" />
          </a>
        )}

        <button
          type="button"
          onClick={handleCopy}
          className="px-3 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#F0EBE3] border border-[#EAE4DA] text-[#24282C] text-xs font-semibold flex items-center gap-1.5 transition-colors"
          title={t.landing.copyLink}
        >
          {copied ? <Check size={13} className="text-[#5C826F]" /> : <Copy size={13} className="text-[#779585]" />}
          <span>{copied ? t.landing.shareCopied : t.landing.copyLink}</span>
        </button>

        <button
          type="button"
          onClick={handleDownloadQR}
          className="px-3 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#F0EBE3] border border-[#EAE4DA] text-[#24282C] text-xs font-semibold flex items-center gap-1.5 transition-colors"
          title={t.landing.saveQr}
        >
          <ArrowDownToLine size={13} className="text-[#6B7280]" />
          <span>{t.landing.saveQr}</span>
        </button>
      </div>
    </div>
  );
};
