// import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { styled } from '@mui/material/styles';

const StyledBarChart = styled(BarChart)({
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 8, 
});

export default function BasicBars() {
  return (
    <StyledBarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
  );
}
