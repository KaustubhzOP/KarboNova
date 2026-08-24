'use client';

import { useState } from 'react';
import { UserCircle, Building2, Bell, Shield, Database, CreditCard, Check, CheckCircle2, Sparkles, X, Plus } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'team' | 'data' | 'notifications' | 'security' | 'subscription'>('profile');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const [businessProfile, setBusinessProfile] = useState({
    businessName: 'Acme Manufacturing Pvt Ltd',
    regNumber: 'UDYAM-MH-19-0012345',
    industry: 'Manufacturing',
    website: 'https://acmemfg.in',
    employeeCount: '45',
    city: 'Pune, Maharashtra'
  });

  const [teamMembers, setTeamMembers] = useState([
    { name: 'Rajesh Patil', email: 'admin@acmemanufacturing.in', role: 'Owner / Admin', status: 'Active' },
    { name: 'Sanjay Sharma', email: 'sanjay@acmemanufacturing.in', role: 'Plant Engineer', status: 'Active' },
  ]);

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    weeklyReport: true,
    verificationUpdates: true,
    marketOpportunityAlerts: false
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Business profile updated successfully!');
  };

  const handleAddTeamMember = () => {
    const email = prompt('Enter new team member email:');
    if (email) {
      setTeamMembers([...teamMembers, { name: email.split('@')[0], email, role: 'Member', status: 'Invited' }]);
      showToast(`Invitation sent to ${email}`);
    }
  };

  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-5 h-5 text-secondary" />
          <span className="text-body-sm font-medium">{toastMessage}</span>
        </div>
      )}

      <div>
        <h1 className="text-display-md font-bold text-primary">Settings</h1>
        <p className="text-body-lg text-on-surface-variant mt-2">Manage your account, team, and operational data preferences.</p>
      </div>

      {/* Plan Indicator */}
      <div className="bg-gradient-to-r from-primary to-[#1a2a3e] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <div className="text-label-md text-primary-fixed-dim uppercase tracking-wider mb-1">Current Plan</div>
          <div className="text-headline-md font-bold text-on-primary flex items-center gap-2">
            KarboNova Free Operating System
          </div>
          <p className="text-body-sm text-primary-fixed-dim mt-1">Basic carbon data, opportunity assessment, and evidence vault storage.</p>
        </div>
        <button 
          onClick={() => setShowUpgradeModal(true)}
          className="whitespace-nowrap px-6 py-3 bg-secondary text-on-secondary rounded-lg font-bold text-body-sm hover:bg-[#005049] transition-colors shadow-sm w-full sm:w-auto flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" /> Upgrade Plan
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Navigation Tabs Sidebar */}
        <div className="w-full md:w-64 shrink-0 space-y-1">
          {[
            { id: 'profile', label: 'Business Profile', icon: Building2 },
            { id: 'team', label: 'Team Members', icon: UserCircle },
            { id: 'data', label: 'Data Preferences', icon: Database },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'security', label: 'Security', icon: Shield },
            { id: 'subscription', label: 'Subscription & Billing', icon: CreditCard },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-body-sm transition-colors text-left ${
                  isActive
                    ? 'bg-surface-container text-primary shadow-sm border border-outline-variant/30'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-secondary' : 'text-outline'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Settings Tab Panels */}
        <div className="flex-1 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm p-6 md:p-8">
          {activeTab === 'profile' && (
            <div>
              <h2 className="text-headline-sm font-bold text-primary mb-6 pb-4 border-b border-outline-variant/20">Business Profile</h2>
              
              <form onSubmit={handleSaveProfile} className="space-y-6">
                <div className="flex items-center gap-6 pb-6 border-b border-outline-variant/10">
                  <div className="w-20 h-20 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center font-bold text-headline-lg shrink-0">
                    AM
                  </div>
                  <div>
                    <button type="button" onClick={() => showToast('Logo uploaded')} className="px-4 py-2 bg-surface-container text-primary font-bold text-body-sm rounded-lg hover:bg-surface-container-high transition-colors">
                      Upload Logo
                    </button>
                    <p className="text-xs text-on-surface-variant mt-2">PNG, JPG up to 2MB</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-label-md text-on-surface-variant mb-1.5">LEGAL BUSINESS NAME</label>
                    <input 
                      type="text" 
                      value={businessProfile.businessName}
                      onChange={(e) => setBusinessProfile({ ...businessProfile, businessName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant/50 rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-label-md text-on-surface-variant mb-1.5">REGISTRATION NUMBER (CIN/Udyam)</label>
                    <input 
                      type="text" 
                      value={businessProfile.regNumber}
                      onChange={(e) => setBusinessProfile({ ...businessProfile, regNumber: e.target.value })}
                      className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant/50 rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-label-md text-on-surface-variant mb-1.5">INDUSTRY SECTOR</label>
                    <select 
                      value={businessProfile.industry}
                      onChange={(e) => setBusinessProfile({ ...businessProfile, industry: e.target.value })}
                      className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant/50 rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                    >
                      <option>Manufacturing</option>
                      <option>Textiles</option>
                      <option>Automotive Parts</option>
                      <option>Food Processing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-label-md text-on-surface-variant mb-1.5">LOCATION</label>
                    <input 
                      type="text" 
                      value={businessProfile.city}
                      onChange={(e) => setBusinessProfile({ ...businessProfile, city: e.target.value })}
                      className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant/50 rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button type="submit" className="px-6 py-2.5 bg-primary text-on-primary rounded-lg font-bold text-body-sm hover:bg-primary-container transition-colors shadow-sm">
                    Save Profile Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'team' && (
            <div>
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-outline-variant/20">
                <h2 className="text-headline-sm font-bold text-primary">Team Members</h2>
                <button 
                  onClick={handleAddTeamMember}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-on-secondary rounded-lg font-bold text-body-sm hover:bg-[#005049] transition-all shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Invite Member
                </button>
              </div>

              <div className="divide-y divide-outline-variant/20">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary">
                        {member.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-primary text-body-sm">{member.name}</div>
                        <div className="text-xs text-on-surface-variant">{member.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold text-on-surface-variant bg-surface-container px-2.5 py-1 rounded">{member.role}</span>
                      <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">{member.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'data' && (
            <div>
              <h2 className="text-headline-sm font-bold text-primary mb-6 pb-4 border-b border-outline-variant/20">Data Preferences</h2>
              <div className="space-y-4 text-body-sm">
                <div className="p-4 border border-outline-variant/30 rounded-lg flex items-center justify-between bg-surface-container-low">
                  <div>
                    <div className="font-bold text-primary">Grid Emission Factor Standard</div>
                    <div className="text-xs text-on-surface-variant">CEA India Grid Emission Factor v18.0</div>
                  </div>
                  <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">Default</span>
                </div>
                <div className="p-4 border border-outline-variant/30 rounded-lg flex items-center justify-between bg-surface-container-low">
                  <div>
                    <div className="font-bold text-primary">Evidence Vault Storage Region</div>
                    <div className="text-xs text-on-surface-variant">AWS ap-south-1 (Mumbai, India)</div>
                  </div>
                  <span className="text-xs font-bold text-primary bg-surface-container px-2 py-1 rounded">Secured</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h2 className="text-headline-sm font-bold text-primary mb-6 pb-4 border-b border-outline-variant/20">Notifications</h2>
              <div className="space-y-4">
                {[
                  { key: 'emailAlerts', title: 'Email Alerts for Evidence Expiration', desc: 'Receive notices when monthly utility records are due' },
                  { key: 'weeklyReport', title: 'Weekly Readiness Digest', desc: 'Summary of project milestone progress every Monday' },
                  { key: 'verificationUpdates', title: 'Verification Audit Alerts', desc: 'Notifications when an external verifier requests data' },
                  { key: 'marketOpportunityAlerts', title: 'Aggregation Pool Matches', desc: 'Alerts when your project qualifies for an aggregated pool' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-4 border border-outline-variant/30 rounded-lg">
                    <div>
                      <div className="font-bold text-primary text-body-sm">{item.title}</div>
                      <div className="text-xs text-on-surface-variant mt-0.5">{item.desc}</div>
                    </div>
                    <input 
                      type="checkbox"
                      checked={(notifications as any)[item.key]}
                      onChange={(e) => {
                        setNotifications({ ...notifications, [item.key]: e.target.checked });
                        showToast('Notification preference saved');
                      }}
                      className="w-5 h-5 text-secondary border-outline-variant rounded focus:ring-secondary cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div>
              <h2 className="text-headline-sm font-bold text-primary mb-6 pb-4 border-b border-outline-variant/20">Security</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-primary text-body-sm mb-2">Change Password</h3>
                  <div className="space-y-3 max-w-md">
                    <input type="password" placeholder="Current Password" className="w-full px-4 py-2 border border-outline-variant/50 rounded-lg text-body-sm" />
                    <input type="password" placeholder="New Password" className="w-full px-4 py-2 border border-outline-variant/50 rounded-lg text-body-sm" />
                    <button onClick={() => showToast('Password changed successfully')} className="px-4 py-2 bg-primary text-on-primary rounded-lg text-body-sm font-bold hover:bg-primary-container">
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'subscription' && (
            <div>
              <h2 className="text-headline-sm font-bold text-primary mb-6 pb-4 border-b border-outline-variant/20">Subscription & Billing</h2>
              <div className="p-6 border border-outline-variant/30 rounded-xl bg-surface-container-low space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-headline-sm font-bold text-primary">Free Tier Plan</div>
                    <div className="text-body-sm text-on-surface-variant">Includes carbon readiness check & evidence vault</div>
                  </div>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">Active</span>
                </div>
                <button 
                  onClick={() => setShowUpgradeModal(true)}
                  className="px-5 py-2.5 bg-secondary text-on-secondary rounded-lg font-bold text-body-sm hover:bg-[#005049]"
                >
                  Upgrade to Monetization Tier
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Upgrade Plan Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant/30 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95">
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary" />
                <h3 className="text-headline-sm font-bold text-primary">Upgrade KarboNova Plan</h3>
              </div>
              <button onClick={() => setShowUpgradeModal(false)} className="p-1 rounded text-on-surface-variant hover:bg-surface-container">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="p-4 border-2 border-secondary rounded-xl bg-secondary/5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-primary text-headline-sm">Verification & Monetization Tier</h4>
                    <p className="text-xs text-on-surface-variant">For MSMEs ready for verification coordination & credit pools</p>
                  </div>
                  <span className="font-bold text-secondary text-body-lg">₹4,999<span className="text-xs text-on-surface-variant font-normal">/mo</span></span>
                </div>
                <ul className="mt-4 space-y-2 text-body-sm">
                  <li className="flex items-center gap-2 text-primary font-medium">
                    <Check className="w-4 h-4 text-secondary" /> Full Evidence Vault (Unlimited storage)
                  </li>
                  <li className="flex items-center gap-2 text-primary font-medium">
                    <Check className="w-4 h-4 text-secondary" /> MSME Aggregation Pool Access
                  </li>
                  <li className="flex items-center gap-2 text-primary font-medium">
                    <Check className="w-4 h-4 text-secondary" /> Verification Data Readiness Audit
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 border-t border-outline-variant/20 bg-surface-container-low flex justify-end gap-3">
              <button onClick={() => setShowUpgradeModal(false)} className="px-4 py-2 border border-outline-variant rounded-lg font-bold text-body-sm text-primary hover:bg-surface-container">
                Cancel
              </button>
              <button 
                onClick={() => { setShowUpgradeModal(false); showToast('Upgrade request submitted! Our team will contact you.'); }}
                className="px-5 py-2 bg-secondary text-on-secondary rounded-lg font-bold text-body-sm hover:bg-[#005049]"
              >
                Confirm Upgrade Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
