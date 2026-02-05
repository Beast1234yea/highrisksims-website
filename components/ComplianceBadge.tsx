
import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';

interface ComplianceBadgeProps {
  className?: string;
}

const ComplianceBadge: React.FC<ComplianceBadgeProps> = ({ className = "" }) => {
  return (
    <div className={`inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-lg ${className}`}>
      <Shield className="w-5 h-5 text-green-400" />
      <div>
        <div className="text-xs font-bold text-green-400 uppercase tracking-wider">Compliance Ready</div>
        <div className="text-[10px] text-green-500/80 font-medium">ASQA & AVETMISS Integrated</div>
      </div>
    </div>
  );
};

export default ComplianceBadge;
