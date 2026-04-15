import React, { useContext, useEffect, useState } from 'react';
import { friendContext } from '../../Context/FriendContext';
import { Pie, PieChart, Sector, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6B6B', '#4ECDC4'];
const PieGradient = (props) => {
  const { cx, cy, outerRadius, innerRadius, startAngle, endAngle, index } = props;
  return (
    <g>
      <defs>
        <radialGradient
          id={`fillGradient${index}`}
          cx={cx}
          cy={cy}
          r={outerRadius}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0.3} />
          <stop offset="70%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0.7} />
          <stop offset="100%" stopColor={COLORS[index % COLORS.length]} stopOpacity={1} />
        </radialGradient>
      </defs>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={`url(#fillGradient${index})`}
        stroke="#fff"
        strokeWidth={2}
      />
    </g>
  );
};
const States = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const friendContextData = useContext(friendContext);
  
  // Check if context exists
  useEffect(() => {
    if (!friendContextData) {
      setError('Context data not available');
    }
  }, [friendContextData]);
  const chartData = [
    { name: 'Calls', value: friendContextData?.callList?.length || 0 },
    { name: 'Messages', value: friendContextData?.messageList?.length || 0 },
    { name: 'Video Calls', value: friendContextData?.videoCallList?.length || 0 },
  ];

  const totalValue = chartData.reduce((sum, item) => sum + item.value, 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const percentage = totalValue > 0 ? ((value / totalValue) * 100).toFixed(1) : 0;
      
      return (
        <div className="bg-white dark:bg-gray-800 p-3 shadow-lg rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-800 dark:text-white">
            {payload[0].payload.name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Value: <span className="font-bold">{value}</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Percentage: {percentage}%
          </p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg"></div>
          <p className="mt-4 text-gray-600">Loading statistics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-red-600">
          <p className="text-xl font-semibold">Error: {error}</p>
          <p className="mt-2">Please check your context provider</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">
        Communication History Dashboard
      </h1>
      
      {totalValue === 0 ? (
        <div className="text-center mt-8 p-8 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">
            No data available yet. Start communicating to see statistics!
          </p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="w-full max-w-md lg:max-w-lg">
            <PieChart width={400} height={400}>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="30%"
                outerRadius="70%"
                paddingAngle={5}
                shape={(props) => <PieGradient {...props} />}
                label={({ name, percent }) => {
                  const percentage = (percent * 100).toFixed(0);
                  return percentage > 5 ? `${name}: ${percentage}%` : '';
                }}
                labelLine={true}
                isAnimationActive={true}
                animationDuration={1000}
                animationEasing="ease-out"
              />
              <Tooltip/>
            </PieChart>
          </div>

          <div className="w-full max-w-sm space-y-3">
            <h3 className="text-lg font-semibold mb-4">Interaction Summary</h3>
            {chartData.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {item.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    ({totalValue > 0 ? ((item.value / totalValue) * 100).toFixed(1) : 0}%)
                  </span>
                </div>
              </div>
            ))}
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Interactions</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {totalValue}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default States;