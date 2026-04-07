"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
  ComposedChart // Using ComposedChart allows mixing Line and Area easily
} from "recharts"

const data = [
  { name: "Jan", value: 25 },
  { name: "Feb", value: 75 },
  { name: "Mar", value: 50 },
  { name: "Apr", value: 110 },
  { name: "May", value: 65 },
  { name: "Jun", value: 125 },
  { name: "Jul", value: 100 },
  { name: "Aug", value: 160 },
  { name: "Sep", value: 125 },
  { name: "Oct", value: 175 },
  { name: "Nov", value: 120 },
  { name: "Dec", value: 175 },
]

export default function GraphsChart() {
  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm ">
      
      {/* Background with subtle gradient and blur */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-800">
            Application Trends
          </h2>
          <span className="text-xs font-medium text-gray-400">Jan - Dec 2026</span>
        </div>

        <div className="h-65 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {/* ComposedChart lets us layer the Area (fill) and Line (stroke) */}
            <ComposedChart 
              data={data}
              margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="4 4"
                vertical={false}
                stroke="#f0f0f0"
              />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9ca3af", fontWeight: 500 }}
                dy={10}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9ca3af", fontWeight: 500 }}
                domain={[0, 200]}
                ticks={[0, 50, 100, 150, 200]}
              />

              <Tooltip
                cursor={{ stroke: '#e5e7eb', strokeWidth: 1 }}
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  fontSize: "12px",
                  fontWeight: "600"
                }}
              />

              {/* The Area provides the soft blue fill underneath */}
              <Area
                type="monotone"
                dataKey="value"
                fill="url(#lineGradient)"
                stroke="none"
                animationDuration={1500}
              />

              {/* The Line provides the sharp blue top edge and glow */}
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, strokeWidth: 0, fill: "#3b82f6" }}
                style={{
                  filter: "drop-shadow(0px 4px 8px rgba(59, 130, 246, 0.4))",
                }}
                animationDuration={1500}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}