import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { estimate, ProjectType, Scope, AddOn, EstimateResult } from '../utils/estimator';

const options = {
  projectType: [
    { value: 'FullStack', label: 'Full‑Stack Web App' },
    { value: 'Mobile', label: 'Mobile App' },
    { value: 'AI', label: 'AI Agent / Automation' },
    { value: 'SaaS', label: 'Enterprise SaaS' },
  ],
  scope: [
    { value: 'MVP', label: 'MVP' },
    { value: 'FullProduct', label: 'Full Product' },
    { value: 'Enterprise', label: 'Enterprise Scaling' },
  ],
  addOn: [
    { value: 'None', label: 'No Add‑ons' },
    { value: 'AIIntegration', label: 'Custom AI/LLM Integration' },
    { value: 'WebSockets', label: 'Real‑time WebSockets' },
    { value: 'Payments', label: 'Payment Gateways' },
  ],
};

const Estimator = () => {
  const [projectType, setProjectType] = useState<ProjectType>('FullStack');
  const [scope, setScope] = useState<Scope>('MVP');
  const [addOn, setAddOn] = useState<AddOn>('None');
  const [result, setResult] = useState<EstimateResult>({ weeks: '', budget: '' });

  useEffect(() => {
    setResult(estimate({ projectType, scope, addOn }));
  }, [projectType, scope, addOn]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'projectType') setProjectType(value as ProjectType);
    else if (name === 'scope') setScope(value as Scope);
    else if (name === 'addOn') setAddOn(value as AddOn);
  };

  return (
    <motion.div
      className="bg-[#0B0C10] p-6 rounded-xl shadow-xl border border-[#AD8B73]/30 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Scope Your Software Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <select name="projectType" value={projectType} onChange={handleChange} className="bg-[#0D1117] text-white p-2 rounded">
          {options.projectType.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <select name="scope" value={scope} onChange={handleChange} className="bg-[#0D1117] text-white p-2 rounded">
          {options.scope.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <select name="addOn" value={addOn} onChange={handleChange} className="bg-[#0D1117] text-white p-2 rounded">
          {options.addOn.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>
      <div className="text-center text-white mb-4">
        <p className="text-lg">Estimated Timeline: <span className="font-mono text-[#AD8B73]">{result.weeks}</span></p>
        <p className="text-lg">Estimated Budget: <span className="font-mono text-[#AD8B73]">{result.budget}</span></p>
      </div>
      <div className="flex justify-center">
        <a href="#contact" className="px-6 py-2 bg-[#AD8B73] text-white rounded-lg hover:bg-[#8B6F47] transition">
          Book Discovery Call
        </a>
      </div>
    </motion.div>
  );
};

export default Estimator;
