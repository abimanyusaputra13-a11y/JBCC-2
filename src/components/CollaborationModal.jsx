import React, { useState } from 'react';
import { X, Send, Copy, Check, Sparkles, TrendingUp, Mail, ShieldCheck } from 'lucide-react';

export default function CollaborationModal({
  isOpen,
  influencer,
  productType,
  onClose
}) {
  if (!isOpen || !influencer) return null;

  const [collabModel, setCollabModel] = useState(
    influencer.collabType ? influencer.collabType.split(' ')[0] : 'Afiliasi'
  );
  const [copied, setCopied] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const defaultMessage = `Halo Kak ${influencer.name},

Kami dari tim toko resmi di marketplace melihat konten Kakak seputar ${influencer.niche} memiliki keterlibatan audiens (engagement) yang sangat tinggi (${influencer.engagementRate}%).

Saat ini permintaan pasar untuk produk "${productType}" sedang meningkat pesat. Kami ingin mengajak Kakak berkolaborasi melalui model ${influencer.collabType || 'Afiliasi Komisi'} disertai pengiriman sampel produk untuk Kakak coba terlebih dahulu.

Jika Kakak berminat, kami sangat senang dapat berdiskusi lebih lanjut mengenai detail kerja sama ini. Terima kasih banyak!`;

  const [message, setMessage] = useState(defaultMessage);

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSend = () => {
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(24, 32, 75, 0.45)',
        backdropFilter: 'blur(3px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 20px 50px rgba(24, 32, 75, 0.22)',
          border: '1px solid var(--border)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#fafbfc'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'var(--tint-hover)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Sparkles size={16} />
            </div>
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>
                Ajak Kolaborasi Kreator
              </h3>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                Kirim penawaran kerja sama promosi untuk produk tren ini
              </div>
            </div>
          </div>

          <button type="button" className="btn-icon" onClick={onClose} title="Tutup">
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '20px', overflowY: 'auto', maxHeight: '75vh' }}>
          {sentSuccess ? (
            <div style={{ textAlign: 'center', padding: '36px 20px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--success-bg)',
                  color: 'var(--success)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                <Check size={28} />
              </div>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px 0' }}>
                Undangan Kolaborasi Berhasil Dikirim!
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Pesan penawaran telah diteruskan ke kontak perwakilan <strong>{influencer.name}</strong> ({influencer.contactEmail}). Anda akan menerima notifikasi jika kreator merespons.
              </p>
            </div>
          ) : (
            <>
              {/* Influencer Profile Card */}
              <div
                style={{
                  padding: '12px 14px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: influencer.avatarColor || 'var(--primary)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '15px',
                      fontWeight: 700,
                      flexShrink: 0
                    }}
                  >
                    {influencer.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy)' }}>
                        {influencer.name}
                      </span>
                      <ShieldCheck size={14} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                      {influencer.handle} • {influencer.platform} ({influencer.followers} pengikut)
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '3px 8px',
                      borderRadius: '12px',
                      fontSize: '11px',
                      fontWeight: 700,
                      backgroundColor: 'var(--success-bg)',
                      color: 'var(--success)'
                    }}
                  >
                    <TrendingUp size={11} />
                    <span>Engagement: {influencer.engagementRate}%</span>
                  </span>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {influencer.avgViews}
                  </div>
                </div>
              </div>

              {/* Target Product Info */}
              <div style={{ marginBottom: '16px' }}>
                <span className="label-upper" style={{ display: 'block', marginBottom: '4px' }}>
                  Produk yang Ditawarkan
                </span>
                <div
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--navy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{productType}</span>
                  <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 500 }}>
                    Sedang Tren
                  </span>
                </div>
              </div>

              {/* Pitching Message Editor */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span className="label-upper">Draf Pesan Kolaborasi</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '11px',
                      color: copied ? 'var(--success)' : 'var(--primary)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    {copied ? 'Tersalin ke Clipboard!' : 'Salin Draf'}
                  </button>
                </div>
                <textarea
                  rows={7}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    fontSize: '12px',
                    lineHeight: 1.5,
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    color: 'var(--text-primary)',
                    backgroundColor: '#ffffff'
                  }}
                />
              </div>

              {/* Contact info notice */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '11px',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'var(--tint-hover)',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <Mail size={13} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>
                  Undangan otomatis dikirim ke <strong>{influencer.contactEmail}</strong> dan pesan langsung aplikasi.
                </span>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {!sentSuccess && (
          <div
            style={{
              padding: '14px 20px',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '8px',
              backgroundColor: '#fafbfc'
            }}
          >
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              style={{ fontSize: '12px', padding: '6px 14px' }}
            >
              Batal
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSend}
              style={{
                fontSize: '12px',
                padding: '6px 16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Send size={13} />
              <span>Kirim Undangan Kolaborasi</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
