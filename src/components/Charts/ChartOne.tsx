import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { SeriesData } from '../../common/types/charts';

const options: ApexOptions = {
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 160,
    width: 200,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: [1, 1],
    curve: 'smooth',
  },
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    }
  },
  yaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    }
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 1,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 1,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
};

interface ChartOneState {
  series: SeriesData;
}

const ChartOne: React.FC<ChartOneState> = ({ series }) => {
  const [state, setState] = useState<ChartOneState>({ series });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="rounded-sm w-32 h-8 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div id="chartOne" className="h-8 w-32 relative -top-8 -left-4">
        <ReactApexChart
          options={options}
          series={state.series}
          type="area"
          height={100}
        />
      </div>
    </div>
  );
};

export default ChartOne;
