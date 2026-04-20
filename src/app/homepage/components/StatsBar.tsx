'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface StatItem {
  icon: string;
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  decimals: number;
}

const stats: StatItem[] = [
  {
    icon: 'BuildingOffice2Icon',
    value: 2005,
    suffix: '',
    prefix: '',
    label: 'Fondé en',
    decimals: 0,
  },
  {
    icon: 'UserGroupIcon',
    value: 600,
    suffix: '+',
    prefix: '',
    label: 'Postes de travail',
    decimals: 0,
  },
  {
    icon: 'GlobeAltIcon',
    value: 3,
    suffix: '',
    prefix: '',
    label: 'Centres à Tanger',
    decimals: 0,
  },
];

function useCounter(target: number, duration: number, active: boolean, decimals: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();

    function update(t: number) {
      const p = Math.min((t - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setCount(parseFloat((target * ease).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, [active, target, duration, decimals]);

  return count;
}

function StatCell({ stat, active }: { stat: StatItem; active: boolean }) {
  const count = useCounter(stat.value, 1500, active, stat.decimals);

  return (
    <div className="p-6 md:p-8 flex items-center gap-5 group hover:bg-card transition-colors border-r border-border last:border-r-0">
      <Icon name={stat.icon as Parameters<typeof Icon>[0]['name']} size={28} className="text-accent flex-shrink-0" />
      <div>
        <div className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
          {stat.prefix}
          {count.toLocaleString('fr-FR', { maximumFractionDigits: stat.decimals })}
          {stat.suffix}
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-0.5">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="border-y border-border bg-secondary/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatCell key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </div>
  );
}