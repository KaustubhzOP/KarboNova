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
  Network
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

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-[260px] flex-col border-r border-outline-variant/30 bg-surface-container-lowest">
      <div className="flex h-16 items-center gap-2 border-b border-outline-variant/20 px-6">
        <Leaf className="h-6 w-6 text-secondary" />
        <span className="font-headline-sm text-primary font-bold tracking-tight">KarboNova</span>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-6 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = item.href === '/dashboard'
            ? pathname === '/dashboard'
            : pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-body-sm font-medium transition-colors ${
                isActive
                  ? 'bg-secondary/10 text-secondary'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
              }`}
            >
              <item.icon
                className={`h-5 w-5 flex-shrink-0 ${
                  isActive ? 'text-secondary' : 'text-on-surface-variant group-hover:text-primary'
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-outline-variant/20 p-4 space-y-1">
        {bottomNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-body-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
          >
            <item.icon className="h-5 w-5 flex-shrink-0 text-on-surface-variant group-hover:text-primary" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
