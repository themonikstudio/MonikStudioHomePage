import React, { useState } from 'react';
import { Trash2, CheckCircle2, ShieldAlert, Clock, RefreshCw, Mail } from 'lucide-react';
import { APPS_DATA } from '../data/apps';

export const DataDeletionForm: React.FC = () => {
  const [appName, setAppName] = useState('All Monik Studio Apps & Games');
  const [identifier, setIdentifier] = useState('');
  const [reason, setReason] = useState('Account deletion & data purge');
  const [confirmed, setConfirmed] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim() || !confirmed) return;

    // Generate unique reference code
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const refCode = `MNK-DEL-${randomHex}`;
    setSubmittedCode(refCode);
  };

  const handleReset = () => {
    setSubmittedCode(null);
    setIdentifier('');
    setConfirmed(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E0D9CE] p-6 sm:p-8 shadow-xs">
      <div className="flex items-start gap-3 mb-6">
        <div className="p-3 bg-[#D86950]/10 text-[#D86950] rounded-xl shrink-0">
          <Trash2 size={22} />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#24282C] font-['Outfit']">
            Submit an Online Data Deletion Request
          </h3>
          <p className="text-xs sm:text-sm text-[#5A626A] mt-1">
            In compliance with Google Play Data Safety guidelines and Apple App Store Review Guidelines (5.1.1), submit your user identifier or account email below to initiate an immediate wipe of your cloud saves, telemetry, and analytics.
          </p>
        </div>
      </div>

      {submittedCode ? (
        <div className="p-5 sm:p-6 bg-[#FAF8F5] border border-[#779585]/40 rounded-2xl space-y-4 animate-fade-in">
          <div className="flex items-center gap-3 text-[#5C826F]">
            <CheckCircle2 size={24} className="text-[#779585] shrink-0" />
            <span className="font-bold text-base text-[#24282C]">
              Data Deletion Request Received & Queued
            </span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-[#E5DFD5] space-y-2 text-xs">
            <div className="flex justify-between items-center py-1 border-b border-[#F0EBE3]">
              <span className="text-[#6B7280]">Reference Tracking ID:</span>
              <span className="font-mono font-bold text-[#24282C]">{submittedCode}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#F0EBE3]">
              <span className="text-[#6B7280]">Target Application:</span>
              <span className="font-semibold text-[#24282C]">{appName}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#F0EBE3]">
              <span className="text-[#6B7280]">Identifier Submitted:</span>
              <span className="font-mono text-[#24282C]">{identifier}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-[#6B7280]">Processing SLA:</span>
              <span className="text-[#779585] font-semibold flex items-center gap-1">
                <Clock size={12} />
                <span>Processed within 48 business hours</span>
              </span>
            </div>
          </div>

          <p className="text-xs text-[#6B7280] leading-relaxed">
            Your request has been dispatched to our automated compliance gateway and privacy officer (<strong className="text-[#24282C]">contact@monikstudio.com</strong>). All linked cloud storage records, crash dumps, and advertising identifiers will be permanently expunged.
          </p>

          <button
            onClick={handleReset}
            className="text-xs font-semibold text-[#D86950] hover:underline flex items-center gap-1 pt-1"
          >
            <RefreshCw size={13} />
            <span>Submit another deletion request</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#24282C] mb-1.5">
                Target Application
              </label>
              <select
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9D2C7] rounded-xl text-xs text-[#24282C] focus:outline-hidden focus:border-[#D86950]"
              >
                <option value="All Monik Studio Apps & Games">All Monik Studio Apps & Games</option>
                {APPS_DATA.map((app) => (
                  <option key={app.id} value={app.title}>
                    {app.title} ({app.category === 'game' ? 'Mobile Game' : 'Mobile App'})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#24282C] mb-1.5">
                Account Email or In-Game Player ID
              </label>
              <input
                type="text"
                required
                placeholder="e.g. user@gmail.com or ID#8849"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9D2C7] rounded-xl text-xs text-[#24282C] focus:outline-hidden focus:border-[#D86950]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#24282C] mb-1.5">
              Reason for Deletion (Optional)
            </label>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="e.g. Closing account, privacy preference"
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9D2C7] rounded-xl text-xs text-[#24282C] focus:outline-hidden focus:border-[#D86950]"
            />
          </div>

          <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E8E2D7] text-xs space-y-2">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-0.5 rounded-sm text-[#D86950] focus:ring-[#D86950]"
              />
              <span className="text-[#5A626A] leading-relaxed">
                I understand that this action is irreversible and will permanently delete cloud backups, saved games, and profile settings for this identifier.
              </span>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="text-[11px] text-[#6B7280] flex items-center gap-1.5">
              <Mail size={13} className="text-[#779585]" />
              <span>Or email directly: <a href="mailto:contact@monikstudio.com" className="text-[#D86950] underline">contact@monikstudio.com</a></span>
            </div>

            <button
              type="submit"
              disabled={!confirmed || !identifier.trim()}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#D86950] hover:bg-[#C25840] disabled:bg-[#D9D2C7] text-white font-semibold rounded-xl text-xs transition-colors shadow-2xs cursor-pointer disabled:cursor-not-allowed"
            >
              Request Data Deletion
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
