'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Sparkles, 
  Fingerprint, 
  FolderKanban, 
  Files, 
  ShieldCheck, 
  Coins, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Leaf,
  Network,
  X
} from 'lucide-react';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Carbon Opportunity', href: '/dashboard/opportunity', icon: Sparkles },
  { name: 'Carbon Passport', href: '/dashboard/passport', icon: Fingerprint },
  { name: 'Projects', href: '/dashboard/projects', icon: FolderKanban },
  { name: 'Evidence Vault', href: '/dashboard/evidence', icon: Files },
  { name: 'Verification', href: '/dashboard/verification', icon: ShieldCheck },
  { name: 'Aggregation Pool', href: '/dashboard/aggregation', icon: Network },
  { name: 'Credits', href: '/dashboard/credits', icon: Coins },
  { name: 'Reports', href: '/dashboard/reports', icon: BarChart3 },
];

const bottomNavigation = [
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  { name: 'Help', href: '/dashboard/help', icon: HelpCircle },
];

interface SidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export function Sidebar({ mobileOpen = false, onCloseMobile }: SidebarProps) {
  const pathname = usePathname();

  const sidebarContent = (
    <div className="flex flex-col h-full bg-surface-container-lowest border-r border-outline-variant/30 w-64 shadow-sm">
      {/* Brand Header */}
      <div className="flex h-16 items-center justify-between px-6 border-b border-outline-variant/20">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-on-secondary font-bold">
            <Leaf className="h-5 w-5" />
          </div>
          <span className="text-headline-sm font-bold tracking-tight text-primary">KarboNova</span>
        </Link>

        {onCloseMobile && (
          <button 
            onClick={onCloseMobile}
            className="lg:hidden p-1 rounded-lg text-on-surface-variant hover:bg-surface-container"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-6 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = item.href === '/dashboard'
            ? pathname === '/dashboard'
            : pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onCloseMobile}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-body-sm font-semibold transition-all ${
                isActive
                  ? 'bg-secondary/10 text-secondary border border-secondary/20 shadow-xs'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
              }`}
            >
              <item.icon className={`h-5 w-5 shrink-0 ${isActive ? 'text-secondary' : 'text-outline'}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-outline-variant/20 space-y-1">
        {bottomNavigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onCloseMobile}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-body-sm font-semibold transition-all ${
                isActive
                  ? 'bg-surface-container text-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
              }`}
            >
              <item.icon className={`h-5 w-5 shrink-0 ${isActive ? 'text-primary' : 'text-outline'}`} />
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:flex shrink-0 h-screen sticky top-0">
        {sidebarContent}
      </aside>

      {/* Mobile Slide-Over Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm transition-opacity" 
            onClick={onCloseMobile} 
          />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-surface-container-lowest shadow-2xl animate-in slide-in-from-left duration-200">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
