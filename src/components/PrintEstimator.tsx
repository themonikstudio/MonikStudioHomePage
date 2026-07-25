import React, { useState } from 'react';
import { Calculator, Cpu, ShieldAlert, Sparkles, Clock, Check, ArrowRight, Zap } from 'lucide-react';
import { Language, QuoteCalculationInput } from '../types';
import { translations } from '../data/translations';

interface PrintEstimatorProps {
  lang: Language;
  onApplyQuoteToOrder: (quoteDetails: string) => void;
}

export const PrintEstimator: React.FC<PrintEstimatorProps> = ({
  lang,
  onApplyQuoteToOrder,
}) => {
  const t = translations[lang].estimator;

  const [input, setInput] = useState<QuoteCalculationInput>({
    material: 'PETG',
    weightGrams: 80,
    infillPercent: 15,
    layerHeight: 0.2,
    electronicsIntegration: false,
    cadDesignRequired: false,
    quantity: 1,
  });

  // Calculation formula
  const getMaterialCostPerGram = (mat: string) => {
    switch (mat) {
      case 'PLA':
        return 800; // VND per gram
      case 'PETG':
        return 950;
      case 'TPU':
        return 1400;
      case 'ABS':
        return 1100;
      case 'Resin':
        return 2200;
      default:
        return 900;
    }
  };

  const basePlasticCost = input.weightGrams * getMaterialCostPerGram(input.material);
  // Machine hour estimation (roughly 1 gram takes 2.5 minutes at 0.2 layer, adjusted by infill & layer height)
  const printTimeHours = Math.round(
    ((input.weightGrams * (0.2 / input.layerHeight) * (1 + input.infillPercent / 200)) / 20) * 10
  ) / 10;

  const machineHourCost = printTimeHours * 18000; // 18,000 VND / machine hour
  const electronicsCost = input.electronicsIntegration ? 220000 : 0;
  const cadDesignCost = input.cadDesignRequired ? 350000 : 0;

  const unitTotal = basePlasticCost + machineHourCost + electronicsCost + cadDesignCost;
  const grandTotalVND = Math.round(unitTotal * input.quantity);
  const grandTotalUSD = Math.round((grandTotalVND / 25400) * 10) / 10;

  const handleOfficialQuoteRequest = () => {
    const details = lang === 'vi'
      ? `Báo Giá Ước Tính: ${input.material} (${input.weightGrams}g, Infill ${input.infillPercent}%, Layer ${input.layerHeight}mm). Số lượng: ${input.quantity}. Mạch điện: ${input.electronicsIntegration ? 'Có' : 'Không'}. CAD Design: ${input.cadDesignRequired ? 'Có' : 'Không'}. Tổng dự kiến: ${grandTotalVND.toLocaleString('vi-VN')} VNĐ (~$${grandTotalUSD})`
      : `Estimated Quote: ${input.material} (${input.weightGrams}g, Infill ${input.infillPercent}%, Layer ${input.layerHeight}mm). Quantity: ${input.quantity}. Electronics: ${input.electronicsIntegration ? 'Yes' : 'No'}. CAD Design: ${input.cadDesignRequired ? 'Yes' : 'No'}. Total Estimate: ${grandTotalVND.toLocaleString('vi-VN')} VND (~$${grandTotalUSD})`;
    onApplyQuoteToOrder(details);
  };

  return (
    <section id="estimator" className="py-20 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-orange-400 font-mono text-xs font-semibold">
            {t.tagline}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Filament Material */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
                {t.material}
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {(['PLA', 'PETG', 'TPU', 'ABS', 'Resin'] as const).map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setInput({ ...input, material: mat })}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold font-mono transition-all ${
                      input.material === mat
                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Weight Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="font-bold text-slate-300 uppercase">{t.weight}</span>
                <span className="text-orange-400 font-bold">{input.weightGrams} Grams</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={input.weightGrams}
                onChange={(e) => setInput({ ...input, weightGrams: Number(e.target.value) })}
                className="w-full accent-orange-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>10g ({lang === 'vi' ? 'Sản phẩm nhỏ' : 'Small part'})</span>
                <span>250g ({lang === 'vi' ? 'Đồng hồ / Mạch' : 'Clock / PCB Enclosure'})</span>
                <span>500g ({lang === 'vi' ? 'Khung lớn' : 'Large frame'})</span>
              </div>
            </div>

            {/* Infill % & Layer Height */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Infill */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="font-bold text-slate-300 uppercase">{t.infill}</span>
                  <span className="text-orange-400 font-bold">{input.infillPercent}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={input.infillPercent}
                  onChange={(e) => setInput({ ...input, infillPercent: Number(e.target.value) })}
                  className="w-full accent-orange-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Layer Height */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase block">
                  {t.layerHeight}
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {([0.12, 0.16, 0.2, 0.28] as const).map((lh) => (
                    <button
                      key={lh}
                      onClick={() => setInput({ ...input, layerHeight: lh })}
                      className={`py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                        input.layerHeight === lh
                          ? 'bg-orange-600 text-white'
                          : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {lh}mm
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Addons Checkboxes */}
            <div className="pt-2 border-t border-slate-800/80 space-y-3">
              <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <input
                  type="checkbox"
                  checked={input.electronicsIntegration}
                  onChange={(e) => setInput({ ...input, electronicsIntegration: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded text-orange-600 accent-orange-500"
                />
                <div className="text-xs">
                  <span className="font-bold text-white block">{t.electronicsAddon}</span>
                  <span className="text-slate-400">
                    {lang === 'vi'
                      ? 'Bao gồm linh kiện ESP32/OLED, hàn mạch, kiểm tra chạy thử firmware.'
                      : 'Includes ESP32/OLED components, circuit soldering, and firmware testing.'}
                  </span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <input
                  type="checkbox"
                  checked={input.cadDesignRequired}
                  onChange={(e) => setInput({ ...input, cadDesignRequired: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded text-orange-600 accent-orange-500"
                />
                <div className="text-xs">
                  <span className="font-bold text-white block">{t.cadAddon}</span>
                  <span className="text-slate-400">
                    {lang === 'vi'
                      ? 'Kỹ sư Monik Studio vẽ lại file CAD 3D Fusion 360 theo phác thảo/ý tưởng của bạn.'
                      : 'Monik Studio engineers recreate 3D CAD Fusion 360 models from your sketch or idea.'}
                  </span>
                </div>
              </label>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between text-xs font-mono pt-2">
              <span className="font-bold text-slate-300 uppercase">{t.quantity}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setInput({ ...input, quantity: Math.max(1, input.quantity - 1) })}
                  className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 text-white font-bold hover:bg-slate-800"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-white text-sm">{input.quantity}</span>
                <button
                  onClick={() => setInput({ ...input, quantity: input.quantity + 1 })}
                  className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 text-white font-bold hover:bg-slate-800"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Result Calculation Card */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-orange-500/30 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-orange-400 font-bold">
                <Calculator className="w-4 h-4" />
                <span>{t.resultTitle}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">Monik Estimate</h3>
            </div>

            {/* Cost Breakdown Summary */}
            <div className="space-y-3 py-4 border-y border-slate-800 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>{lang === 'vi' ? 'Nhựa In' : 'Filament Plastic'} ({input.material} x {input.weightGrams}g):</span>
                <span className="text-white font-semibold">{basePlasticCost.toLocaleString('vi-VN')}đ</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>{lang === 'vi' ? 'Thời Gian Chạy Máy' : 'Machine Print Time'} (~{printTimeHours}h):</span>
                <span className="text-white font-semibold">{machineHourCost.toLocaleString('vi-VN')}đ</span>
              </div>
              {input.electronicsIntegration && (
                <div className="flex justify-between text-cyan-400">
                  <span>{lang === 'vi' ? 'Mạch Điện Tử & Lắp Ráp' : 'Electronics & Assembly'}:</span>
                  <span className="font-semibold">{electronicsCost.toLocaleString('vi-VN')}đ</span>
                </div>
              )}
              {input.cadDesignRequired && (
                <div className="flex justify-between text-amber-400">
                  <span>{lang === 'vi' ? 'Dịch Vụ Thiết Kế CAD 3D' : '3D CAD Design Service'}:</span>
                  <span className="font-semibold">{cadDesignCost.toLocaleString('vi-VN')}đ</span>
                </div>
              )}
              <div className="flex justify-between text-slate-400">
                <span>{lang === 'vi' ? 'Số Lượng' : 'Quantity'}:</span>
                <span className="text-white font-semibold">x{input.quantity}</span>
              </div>
            </div>

            {/* Big Total Price */}
            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400 block">{t.estimatedPrice}</span>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                {grandTotalVND.toLocaleString('vi-VN')} VNĐ
              </div>
              <span className="text-xs text-slate-500 font-mono block">
                (~${grandTotalUSD} USD)
              </span>
            </div>

            {/* Estimated Lead time */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span>
                {t.estimatedTime}: <strong className="text-white font-mono">{Math.ceil(printTimeHours / 12) + 1} {lang === 'vi' ? 'ngày làm việc' : 'business days'}</strong>
              </span>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleOfficialQuoteRequest}
              className="w-full py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-xl shadow-orange-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>{t.requestQuoteBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-slate-500 text-center italic">
              {t.notes}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
