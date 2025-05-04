import React from 'react';

interface SensorCardProps {
  id: number;
  name: string;
  value: number;
  unit: string;
}

const SensorCard: React.FC<SensorCardProps> = ({ name, value, unit }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '0.5rem', padding: '1rem' }}>
      <h2>{name}</h2>
      <p>{value} {unit}</p>
    </div>
  );
};

export default SensorCard;
