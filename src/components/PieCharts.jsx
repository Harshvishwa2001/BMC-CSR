import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Closed', value: 25, color: '#ef4444' },
    { name: 'Draft', value: 30, color: '#94a3b8' },
    { name: 'Active', value: 45, color: '#3b82f6' },
];

// Custom label renderer to show Name and Percentage outside
const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, name, value }) => {
    const RADIAN = Math.PI / 180;
    // Offset the labels outside the outerRadius
    const radius = outerRadius + 25;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="#1e293b"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            style={{ fontSize: '16px', fontWeight: '500' }}
        >
            {`${name}`}
            <tspan x={x} dy="1.2em" style={{ fontWeight: '400', fill: '#64748b' }}>
                {`${value}%`}
            </tspan>
        </text>
    );
};

const PieCharts = () => {
    return (
        <div style={{
            fontFamily: 'sans-serif',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            width: '480px', // Increased slightly for label space
            height: '360px',
            backgroundColor: '#fff',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '6px', color: '#1e293b' }}>
                Project Status
            </h2>

            <div style={{ width: '100%', height: '270px' }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={85} // Reduced slightly to make room for labels
                            paddingAngle={3}
                            dataKey="value"
                            startAngle={90}
                            endAngle={450}
                            label={renderCustomLabel} // Added the labels here
                            labelLine={false}         // Removes the connector lines for a cleaner look
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '14px',
                marginTop: '2px'
            }}>
                {data.map((item) => (
                    <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: item.color,
                            borderRadius: '3px'
                        }} />
                        <span style={{ fontSize: '14px', color: '#475569', fontWeight: '500' }}>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieCharts;