import React from 'react';
import ParticleNetwork from './ParticleNetwork';

/** Site-wide constellation background for every section */
const GlobalBackground: React.FC = () => (
  <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
    <ParticleNetwork />
  </div>
);

export default GlobalBackground;
