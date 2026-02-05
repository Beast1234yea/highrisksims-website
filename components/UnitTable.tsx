import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { UnitCode } from '../types';

const UNIT_DATA: UnitCode[] = [
  // HRW
  { code: 'TLILIC0003', title: 'Licence to operate a forklift truck', type: 'HRW', category: 'Forklift' },
  { code: 'TLILIC0001', title: 'Licence to operate an order picking forklift', type: 'HRW', category: 'Forklift' },
  { code: 'TLILIC0005', title: 'Boom-type elevating work platform', type: 'HRW', category: 'EWP' },
  { code: 'CPCCLDG3001', title: 'Licence to perform dogging', type: 'HRW', category: 'Dogging' },
  { code: 'CPCCLRG3001', title: 'Basic rigging', type: 'HRW', category: 'Rigging' },
  { code: 'CPCCLRG3002', title: 'Intermediate rigging', type: 'HRW', category: 'Rigging' },
  { code: 'CPCCLRG3003', title: 'Advanced rigging', type: 'HRW', category: 'Rigging' },
  { code: 'CPCCSC2002', title: 'Basic scaffolding', type: 'HRW', category: 'Scaffolding' },
  { code: 'TLILIC0012', title: 'Vehicle Loading Crane', type: 'HRW', category: 'Crane' },
  { code: 'TLILIC0013', title: 'Slewing mobile crane (up to 20t)', type: 'HRW', category: 'Crane' },
  
  // Competency
  { code: 'RIIHAN301F', title: 'Operate Forklift Under Supervision', type: 'Competency', category: 'Mining' },
  { code: 'RIIHAN307E', title: 'Perform Dogging', type: 'Competency', category: 'Mining' },
  { code: 'RIIHAN309F', title: 'Telehandler Operations', type: 'Competency', category: 'Load Shifting' },
  { code: 'RIIWHS202E', title: 'Confined Spaces', type: 'Competency', category: 'Safety' },
  { code: 'RIIWHS204E', title: 'Work Safely at Heights', type: 'Competency', category: 'Safety' },
  { code: 'MSMWHS217', title: 'Gas Test Atmospheres', type: 'Competency', category: 'Safety' },
];

const UnitTable: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'ALL' | 'HRW' | 'Competency'>('ALL');

  const filteredUnits = UNIT_DATA.filter(unit => {
    const matchesSearch = unit.code.toLowerCase().includes(search.toLowerCase()) || 
                          unit.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'ALL' || unit.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm">
      <div className="p-6 border-b border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-white">Supported Unit Codes</h3>
          <p className="text-sm text-gray-400">Search 38+ supported training units</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search code or title..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-accent"
            />
          </div>
          <div className="flex bg-black/20 rounded-lg p-1 border border-white/10">
            <button 
              onClick={() => setFilter('ALL')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${filter === 'ALL' ? 'bg-accent text-primary' : 'text-gray-400 hover:text-white'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('HRW')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${filter === 'HRW' ? 'bg-accent text-primary' : 'text-gray-400 hover:text-white'}`}
            >
              HRW
            </button>
            <button 
              onClick={() => setFilter('Competency')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${filter === 'Competency' ? 'bg-accent text-primary' : 'text-gray-400 hover:text-white'}`}
            >
              Non-HRW
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto max-h-96 overflow-y-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider sticky top-0 backdrop-blur-md">
            <tr>
              <th className="px-6 py-4 font-semibold">Unit Code</th>
              <th className="px-6 py-4 font-semibold">Unit Title</th>
              <th className="px-6 py-4 font-semibold">Type</th>
              <th className="px-6 py-4 font-semibold">Category</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {filteredUnits.length > 0 ? (
              filteredUnits.map((unit) => (
                <tr key={unit.code} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-accent font-medium">{unit.code}</td>
                  <td className="px-6 py-4 text-gray-200">{unit.title}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${unit.type === 'HRW' ? 'bg-red-500/20 text-red-300' : 'bg-blue-500/20 text-blue-300'}`}>
                      {unit.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{unit.category}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                  No units found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnitTable;