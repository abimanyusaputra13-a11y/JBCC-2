import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { onboardingWalkthroughSteps } from '../data/mockData';

export default function OnboardingModal({ isOpen, onClose }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const step = onboardingWalkthroughSteps[currentStepIndex];
  const isLast = currentStepIndex === onboardingWalkthroughSteps.length - 1;

  const handleNext = () => {
    if (isLast) {
      onClose();
    } else {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ width: '500px' }}
      >
        {/* Header */}
        <div
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} style={{ color: 'var(--primary)' }} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>
              Pengenalan Lintas Seller Insights
            </span>
          </div>
          <button
            type="button"
            className="btn-icon"
            onClick={onClose}
            title="Lewati (Esc)"
          >
            <X size={15} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '28px 24px' }}>
          {/* Step indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
            {onboardingWalkthroughSteps.map((_, idx) => (
              <span
                key={idx}
                style={{
                  height: '4px',
                  flex: 1,
                  borderRadius: '2px',
                  backgroundColor: idx <= currentStepIndex ? 'var(--primary)' : 'var(--border)'
                }}
              />
            ))}
          </div>

          <div className="label-upper" style={{ marginBottom: '8px' }}>
            Langkah {step.step} dari {onboardingWalkthroughSteps.length}
          </div>

          <h2
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--navy)',
              marginBottom: '12px',
              lineHeight: 1.3
            }}
          >
            {step.title}
          </h2>

          <p
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              marginBottom: '24px'
            }}
          >
            {step.desc}
          </p>

          <div
            style={{
              padding: '12px 14px',
              backgroundColor: '#fafbfc',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '12px',
              color: 'var(--navy)'
            }}
          >
            <ShieldCheck size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            <span>
              Tidak ada manipulasi harga otomatis, tidak ada poin permainan, dan data Anda dijaga ketat tanpa membocorkan nama toko lain.
            </span>
          </div>
        </div>

        {/* Footer controls */}
        <div
          style={{
            padding: '14px 20px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#fafbfc'
          }}
        >
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={onClose}
            style={{ color: 'var(--text-muted)' }}
          >
            Lewati pengenalan
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {currentStepIndex > 0 && (
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handlePrev}
              >
                <ArrowLeft size={13} />
                <span>Sebelumnya</span>
              </button>
            )}

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handleNext}
            >
              <span>{isLast ? 'Mulai Eksplorasi' : 'Selanjutnya'}</span>
              {isLast ? <Check size={13} /> : <ArrowRight size={13} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
