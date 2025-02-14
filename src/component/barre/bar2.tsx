import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

const size = {
  width: 500,
  height: 300,
};

const StyledText = styled('text')({
  fill: 'black',
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
});

const StyledPieChart = styled(PieChart)({
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 8,
});

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieLabel() {
  return (
    <StyledPieChart series={[{ data, innerRadius: 100 }]} {...size}>
      <PieCenterLabel>%</PieCenterLabel>
    </StyledPieChart>
  );
}
