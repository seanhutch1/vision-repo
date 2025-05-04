import React from 'react';
import SensorCard from '../components/SensorCard';

const mockData = [
  { id: 1, name: 'Temperature', value: 24.3, unit: '°C' },
  { id: 2, name: 'Humidity', value: 55.1, unit: '%' },
];

const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Sensor Dashboard</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {mockData.map(sensor => (
          <SensorCard key={sensor.id} {...sensor} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
