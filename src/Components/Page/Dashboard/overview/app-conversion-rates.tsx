import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { fNumber } from '../../../../utils/format-number';
import Chart, { useChart } from '../../../UI/chart';

interface ChartData {
  value: number;
  label: string;
}

interface ChartOptions {
  colors: string[];
  series: ChartData[];
  options?: any; // Adjust the type as needed based on the exact options structure
}

interface AppConversionRatesProps {
  title: string;
  subheader?: string;
  chart: ChartOptions;
}

const AppConversionRates: React.FC<AppConversionRatesProps> = ({ title, subheader, chart, ...other }) => {
  const { colors, series, options } = chart;

  const chartSeries = series.map((i) => i.value);

  const chartOptions = useChart({
    colors,
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (value: number) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '28%',
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: series.map((i) => i.label),
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }}>
        <Chart
          dir="ltr"
          type="bar"
          series={[{ data: chartSeries }]}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
};

export default AppConversionRates;
