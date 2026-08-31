import React from 'react';
import { Button, Card, Badge } from '@vyoris/ui';
import { VyorisDesignSystem } from '@vyoris/config';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col justify-between">
      {/* Header Navigation */}
      <header className="w-full border-b border-[#E2E8F0] bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#0F172A] flex items-center justify-center text-white font-bold text-lg tracking-wider">
              V
            </div>
            <span className="font-bold text-xl text-[#0F172A]">
              {VyorisDesignSystem.appName}
            </span>
            <Badge variant="accent">Phase 0 Baseline</Badge>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Architecture Docs
            </Button>
            <Button variant="primary" size="sm">
              Launch Console
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full space-y-10">
        {/* Hero Banner */}
        <section className="space-y-4 max-w-3xl">
          <Badge variant="outline">AI-Powered Lead Intelligence</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Discover, Enrich, and Analyze High-Value Business Leads
          </h1>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Vyoris AI enables natural language discovery of targeted target accounts,
            automated opportunity scoring, and actionable lead intelligence.
          </p>
        </section>

        {/* Phase 0 System Status Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Monorepo Architecture"
            subtitle="Isolated apps & packages"
            headerAction={<Badge variant="success">Established</Badge>}
          >
            <p className="text-sm text-[#475569]">
              Strict separation of concerns between Next.js frontend (<code className="text-xs bg-[#F1F5F9] px-1 py-0.5 rounded">apps/web</code>), API backend layer (<code className="text-xs bg-[#F1F5F9] px-1 py-0.5 rounded">apps/api</code>), and shared design packages.
            </p>
          </Card>

          <Card
            title="Design System Baseline"
            subtitle="Investor-ready visual palette"
            headerAction={<Badge variant="success">Configured</Badge>}
          >
            <p className="text-sm text-[#475569]">
              Built upon 60% Stark White (<code className="text-xs bg-[#F1F5F9] px-1 py-0.5 rounded">#FFFFFF</code>), 30% Dark Charcoal (<code className="text-xs bg-[#F1F5F9] px-1 py-0.5 rounded">#0F172A</code>), and 10% Energetic Orange (<code className="text-xs bg-[#F1F5F9] px-1 py-0.5 rounded">#F97316</code>).
            </p>
          </Card>

          <Card
            title="LLM Abstraction Layer"
            subtitle="Provider-agnostic interface"
            headerAction={<Badge variant="outline">Interface Ready</Badge>}
          >
            <p className="text-sm text-[#475569]">
              Modular interfaces (<code className="text-xs bg-[#F1F5F9] px-1 py-0.5 rounded">ILLMProvider</code>) prepared in <code className="text-xs bg-[#F1F5F9] px-1 py-0.5 rounded">packages/types</code> allowing seamless swapping of AI model providers in future phases.
            </p>
          </Card>
        </section>

        {/* Action / Next Steps CTA Card */}
        <Card title="Phase 0 Foundation Checklist" subtitle="Current workspace verification">
          <ul className="space-y-3 text-sm text-[#0F172A]">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F97316]" />
              <span>Modular npm Workspaces Initialized (<code className="text-xs bg-[#F1F5F9] px-1.5 py-0.5 rounded">apps/*</code>, <code className="text-xs bg-[#F1F5F9] px-1.5 py-0.5 rounded">packages/*</code>)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F97316]" />
              <span>Shared Design Tokens & UI Library Built (<code className="text-xs bg-[#F1F5F9] px-1.5 py-0.5 rounded">@vyoris/ui</code>)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F97316]" />
              <span>Backend Service Layer Baseline Configured (<code className="text-xs bg-[#F1F5F9] px-1.5 py-0.5 rounded">apps/api</code>)</span>
            </li>
          </ul>
        </Card>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#E2E8F0] bg-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} Vyoris AI. All rights reserved.</p>
          <p>Phase 0 Monorepo Baseline • High-Trust Investor Foundation</p>
        </div>
      </footer>
    </div>
  );
}
