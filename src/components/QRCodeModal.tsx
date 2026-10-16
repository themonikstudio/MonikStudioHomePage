import React from 'react';
import { AppItem } from '../types';
import { QRCodeCard } from './QRCodeCard';
import { X } from 'lucide-react';

interface QRCodeModalProps {
  app: AppItem | null;
  onClose: () => void;
  initialPlatform?: 'ios' | 'android' | 'chrome';
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({
  app,
  onClose,
  initialPlatform
}) => {
  if (!app) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="relative max-w-sm w-full animate-scale-up">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 p-2 bg-[#24282C] hover:bg-[#3D444C] text-white rounded-full shadow-lg transition-transform hover:scale-105"
          aria-label="Close QR Modal"
        >
          <X size={16} />
        </button>

        <QRCodeCard app={app} initialPlatform={initialPlatform} />
      </div>
    </div>
  );
};
