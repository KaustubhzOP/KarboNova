'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Bell, Building2, UserCircle, Check, X, LogOut, Settings, HelpCircle, FileText, Sparkles, FolderKanban, Menu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface TopBarProps {
  onMenuToggle?: () => void;
}

export function TopBar({ onMenuToggle }: TopBarProps) {
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Electricity bill upload required', desc: 'Jan & Feb 2023 missing for baseline', time: '2h ago', unread: true },
    { id: 2, title: 'Verification status updated', desc: 'Solar PV project evidence under review', time: '1d ago', unread: true },
  ]);

  const searchRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const searchItems = [
    { title: 'Solar & Energy Efficiency Project', type: 'Project', href: '/dashboard/projects/solar-energy-efficiency', icon: FolderKanban },
    { title: 'Carbon Passport (KRB-MH-000124)', type: 'Identity', href: '/dashboard/passport', icon: Sparkles },
    { title: 'MSEB Electricity Bills', type: 'Evidence', href: '/dashboard/evidence', icon: FileText },
    { title: 'Energy Efficiency Pool (Maharashtra)', type: 'Aggregation', href: '/dashboard/aggregation', icon: Building2 },
  ];

  const filteredSearchResults = searchQuery.trim() === '' ? [] : searchItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="flex h-16 items-center justify-between border-b border-outline-variant/20 bg-surface px-4 sm:px-8 shadow-sm relative z-30">
      {/* Mobile Menu Button & Search */}
      <div className="flex flex-1 items-center gap-3">
        {onMenuToggle && (
          <button 
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        )}

        <div ref={searchRef} className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-outline" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchResults(true);
            }}
            onFocus={() => setShowSearchResults(true)}
            placeholder="Search projects, evidence..."
            className="w-full rounded-md border border-outline-variant/50 bg-surface-container-lowest py-2 pl-10 pr-4 text-body-sm text-on-surface focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          />
          {searchQuery && (
            <button 
              onClick={() => { setSearchQuery(''); setShowSearchResults(false); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          {/* Search Results Dropdown */}
          {showSearchResults && searchQuery.trim() !== '' && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-lg overflow-hidden z-50">
              {filteredSearchResults.length > 0 ? (
                <div className="p-2 space-y-1">
                  {filteredSearchResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        router.push(result.href);
                        setShowSearchResults(false);
                        setSearchQuery('');
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-surface-container-low text-left transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <result.icon className="h-4 w-4 text-secondary shrink-0" />
                        <span className="text-body-sm font-medium text-primary group-hover:text-secondary truncate">{result.title}</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded shrink-0">{result.type}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-body-sm text-on-surface-variant">
                  No matching results for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        {/* Notification Icon */}
        <div ref={notifRef} className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative text-on-surface-variant hover:text-primary transition-colors p-1.5"
          >
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-error text-[10px] text-on-error font-bold">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-lg overflow-hidden z-50">
              <div className="p-4 border-b border-outline-variant/20 flex items-center justify-between">
                <h3 className="text-body-sm font-bold text-primary">Notifications</h3>
                {unreadCount > 0 && (
                  <button onClick={markAllAsRead} className="text-xs text-secondary font-bold hover:underline flex items-center gap-1">
                    <Check className="h-3 w-3" /> Mark all read
                  </button>
                )}
              </div>
              <div className="divide-y divide-outline-variant/10 max-h-72 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className={`p-3 hover:bg-surface-container-low transition-colors ${n.unread ? 'bg-secondary/5' : ''}`}>
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-bold text-primary">{n.title}</h4>
                      <span className="text-[10px] text-on-surface-variant">{n.time}</span>
                    </div>
                    <p className="text-xs text-on-surface-variant mt-1">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="h-8 w-px bg-outline-variant/30 hidden sm:block"></div>
        
        {/* Profile Dropdown */}
        <div ref={profileRef} className="relative">
          <button 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-container text-on-primary-container shrink-0">
              <Building2 className="h-5 w-5" />
            </div>
            <div className="flex flex-col text-left hidden md:flex">
              <span className="text-body-sm font-semibold text-primary leading-tight">Acme Manufacturing</span>
              <span className="text-[11px] text-on-surface-variant leading-tight">Free Plan</span>
            </div>
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-lg overflow-hidden z-50 p-2 space-y-1">
              <div className="px-3 py-2 border-b border-outline-variant/20">
                <div className="text-body-sm font-bold text-primary">Acme Manufacturing</div>
                <div className="text-xs text-on-surface-variant">admin@acmemanufacturing.in</div>
              </div>
              <Link 
                href="/dashboard/settings" 
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
              >
                <Settings className="h-4 w-4" /> Settings
              </Link>
              <Link 
                href="/dashboard/help" 
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
              >
                <HelpCircle className="h-4 w-4" /> Help & Support
              </Link>
              <div className="border-t border-outline-variant/20 pt-1">
                <Link 
                  href="/login" 
                  onClick={() => setShowProfileMenu(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-body-sm text-error hover:bg-error/10 transition-colors"
                >
                  <LogOut className="h-4 w-4" /> Sign Out
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
