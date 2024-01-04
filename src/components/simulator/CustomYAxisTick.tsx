export const CustomYAxisTick = (props:any) => {
    const { x, y, payload } = props;
  
    // You can format or modify the tick value
    const tickValue = payload.value;
  
    // Render your custom tick here
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={4} textAnchor="end" fill="#666" style={{ fontSize: '0.75rem' }}>
          {tickValue}
        </text>
      </g>
    );
  };
  