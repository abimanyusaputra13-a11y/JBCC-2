import React, { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Compass,
  Lightbulb,
  Package,
  Activity,
  BookOpen,
  Settings,
  Search,
  Store,
  ChevronDown,
  UserCheck
} from 'lucide-react';

export default function Sidebar({
  searchQuery,
  onSearchChange,
  opportunityCount = 12,
  listingCount = 25,
  feedCount = 3
}) {
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Shortcut key "/" focuses the search field
  useEffect(() => {
    const handleKeyDown = (e) => {
      // If user is already typing in an input or textarea, ignore
      if (
        document.activeElement.tagName === 'INPUT' ||
        document.activeElement.tagName === 'TEXTAREA' ||
        document.activeElement.isContentEditable
      ) {
        return;
      }

      if (e.key === '/') {
        e.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navInsights = [
    { to: '/', label: 'Beranda', icon: Compass, count: feedCount },
    { to: '/peluang', label: 'Peluang', icon: Lightbulb, count: opportunityCount },
    { to: '/listing-saya', label: 'Listing Saya', icon: Package, count: listingCount },
    { to: '/sinyal-layanan', label: 'Sinyal Layanan', icon: Activity, count: null }
  ];

  const navHelp = [
    { to: '/panduan', label: 'Panduan', icon: BookOpen, count: null },
    { to: '/pengaturan', label: 'Pengaturan', icon: Settings, count: null }
  ];

  return (
    <aside className="sidebar">
      <div>
        {/* Workspace Switcher / Logo Tile */}
        <div
          style={{
            padding: '12px 14px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--navy)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '-0.02em'
              }}
            >
              L
            </div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '14px', lineHeight: 1.2 }}>
                Lintas
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                Seller Center
              </div>
            </div>
          </div>
          <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} />
        </div>

        {/* Global Search with '/' Shortcut */}
        <div
          style={{
            position: 'relative',
            marginBottom: '20px'
          }}
        >
          <Search
            size={14}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
              pointerEvents: 'none'
            }}
          />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Cari fitur, produk..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              width: '100%',
              padding: '7px 32px 7px 30px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '13px',
              color: 'var(--text-primary)'
            }}
          />
          <span
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '10px',
              fontWeight: 600,
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
              borderRadius: '3px',
              padding: '1px 5px',
              backgroundColor: '#fafbfc'
            }}
            title="Tekan tombol '/' untuk mencari"
          >
            /
          </span>
        </div>

        {/* Section: INSIGHTS */}
        <div style={{ marginBottom: '24px' }}>
          <div className="label-upper" style={{ padding: '0 10px 8px 10px' }}>
            Insights
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {navInsights.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '13px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'var(--tint-hover)' : 'transparent',
                    textDecoration: 'none',
                    transition: 'background-color 0.15s ease'
                  })}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </div>
                  {item.count !== null && (
                    <span
                      style={{
                        fontSize: '11px',
                        padding: '1px 6px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--border)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {item.count}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Section: BANTUAN */}
        <div>
          <div className="label-upper" style={{ padding: '0 10px 8px 10px' }}>
            Bantuan
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {navHelp.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '13px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'var(--tint-hover)' : 'transparent',
                    textDecoration: 'none',
                    transition: 'background-color 0.15s ease'
                  })}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </div>
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Pinned Seller Profile at Bottom */}
      <div
        style={{
          padding: '12px',
          backgroundColor: '#ffffff',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <div
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'var(--tint-hover)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)',
            fontWeight: 600,
            fontSize: '12px'
          }}
        >
          GA
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: '13px',
              color: 'var(--navy)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            Rian Hidayat
          </div>
          <div
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            Glow Apothecary ID
          </div>
        </div>
        <UserCheck size={14} style={{ color: 'var(--success)', flexShrink: 0 }} title="Akun Terverifikasi" />
      </div>
    </aside>
  );
}
