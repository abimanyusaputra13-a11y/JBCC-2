import React, { useState } from 'react';
import { Bell, HelpCircle, RefreshCw, Plus, Sparkles } from 'lucide-react';

export default function Header({
  title,
  count,
  primaryActionLabel = 'Tambah Listing',
  primaryActionIcon: PrimaryIcon = Plus,
  onPrimaryAction,
  onOpenOnboarding,
  onRefresh,
  isRealtimeActive = true,
  onToggleRealtime,
  tick = 0
}) {
  const [showNotificationMenu, setShowNotificationMenu] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const notifications = [
    { id: 1, text: '3 rekomendasi perbaikan baru siap ditinjau di Beranda.', time: '10 menit lalu', unread: true },
    { id: 2, text: 'Pencarian kata kunci "tabir surya gel" naik 28% minggu ini.', time: '2 jam lalu', unread: true },
    { id: 3, text: 'Stok Shampoo Tea Tree tersisa 0 unit.', time: '1 hari lalu', unread: false }
  ];

  const handleRefreshClick = () => {
    setIsRefreshing(true);
    if (onRefresh) onRefresh();
    setTimeout(() => setIsRefreshing(false), 600);
  };

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 32px',
        borderBottom: '1px solid var(--border)',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Title with Count */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <h1
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--navy)',
            letterSpacing: '-0.01em',
            margin: 0
          }}
        >
          {title}
        </h1>
        {count !== undefined && count !== null && (
          <span
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--border-light)',
              padding: '2px 8px',
              borderRadius: 'var(--radius-pill)'
            }}
          >
            {count}
          </span>
        )}
      </div>

      {/* Right Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative' }}>
        {/* Realtime Live Looping Pill */}
        {onToggleRealtime && (
          <button
            type="button"
            onClick={onToggleRealtime}
            className="live-pulse-badge"
            style={{
              cursor: 'pointer',
              backgroundColor: isRealtimeActive ? '#ecfdf5' : '#f3f4f6',
              borderColor: isRealtimeActive ? '#a7f3d0' : '#e5e7eb'
            }}
            title={
              isRealtimeActive
                ? 'Data berfluktuasi naik & turun secara otomatis (siklus 24 langkah). Klik untuk menjeda.'
                : 'Pembaruan data dijeda. Klik untuk melanjutkan kembali.'
            }
          >
            {isRealtimeActive ? (
              <span className="live-pulse-dot" />
            ) : (
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#9ca3af',
                  display: 'inline-block'
                }}
              />
            )}
            <span style={{ color: isRealtimeActive ? '#065f46' : '#6b7280', fontSize: '11px', fontWeight: 600 }}>
              {isRealtimeActive ? 'Data Realtime' : 'Realtime Dijeda'}
            </span>
            <span
              style={{
                fontSize: '10px',
                color: isRealtimeActive ? '#047857' : '#9ca3af',
                backgroundColor: isRealtimeActive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(156, 163, 175, 0.15)',
                padding: '1px 5px',
                borderRadius: '4px',
                fontVariantNumeric: 'tabular-nums'
              }}
            >
              Loop {((tick % 24) + 1)}/24
            </span>
          </button>
        )}

        {/* Onboarding / Guide Tour Button */}
        {onOpenOnboarding && (
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onOpenOnboarding}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Sparkles size={14} style={{ color: 'var(--primary)' }} />
            <span>Tur Pengenalan</span>
          </button>
        )}

        {/* Refresh Icon Button */}
        <button
          type="button"
          className="btn-icon"
          onClick={handleRefreshClick}
          title="Segarkan data"
        >
          <RefreshCw size={15} className={isRefreshing ? 'skeleton' : ''} />
        </button>

        {/* Notifications Icon Button */}
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            className="btn-icon"
            onClick={() => setShowNotificationMenu(!showNotificationMenu)}
            title="Notifikasi"
            style={{ position: 'relative' }}
          >
            <Bell size={15} />
            <span
              style={{
                position: 'absolute',
                top: '6px',
                right: '7px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)'
              }}
            />
          </button>

          {/* Notifications Dropdown */}
          {showNotificationMenu && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '42px',
                width: '320px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-menu)',
                zIndex: 50,
                padding: '12px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '13px', color: 'var(--navy)' }}>Pemberitahuan</span>
                <span className="label-upper">Terbaru</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    style={{
                      padding: '8px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: n.unread ? 'var(--tint-hover)' : 'transparent',
                      fontSize: '12px'
                    }}
                  >
                    <div style={{ color: 'var(--text-primary)', lineHeight: 1.3 }}>{n.text}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>{n.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Primary Action Button */}
        {primaryActionLabel && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={onPrimaryAction}
            style={{ marginLeft: '4px' }}
          >
            {PrimaryIcon && <PrimaryIcon size={15} />}
            <span>{primaryActionLabel}</span>
          </button>
        )}
      </div>
    </header>
  );
}
