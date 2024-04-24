import React from 'react';
import { ArrowDown, ArrowUp } from '../common/Icons';
import ChartOne from './Charts/ChartOne';
import { SeriesData } from '../common/types/charts';
import { useNavigate } from 'react-router-dom';

interface CardDataStatsProps {
  title: string;
  value: string;
  percentage: string;
  isValueUp?: boolean;
  isPercentUp?: boolean;
  valueData: SeriesData;
  percentData: SeriesData;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  value,
  percentage,
  isValueUp,
  isPercentUp,
  valueData,
  percentData,
}) => {
  const navigate = useNavigate()

  const handleOnCardClick = () => navigate("/details")

  return (
    <div className="rounded border bg-white p-0.5 shadow-default dark:bg-boxdark bg-gradient-to-t from-green-500 via-violet-500 to-blue-500">
      <div className="rounded flex flex-col h-full w-full p-4 dark:bg-boxdark gap-3 cursor-pointer" onClick={handleOnCardClick}>

        <span>{title}</span>

        <div className="flex">
          <div className="flex flex-col">
            <span className="text-sm">Forecast</span>
            <h3>{value}</h3>
          </div>
          <div className="flex gap-2 justify-between">
            <span className="flex items-center gap-1"><ChartOne series={valueData} /> {isValueUp ? <ArrowUp fill="#10B981" /> : <ArrowDown fill="#259AE6" />}  </span>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col">
            <span className="text-sm">Forecast</span>
            <h3>{percentage}%</h3>
          </div>
          <div className="flex gap-2 justify-between">
            <span className="flex items-center gap-1"><ChartOne series={percentData} /> {isPercentUp ? <ArrowUp fill="#10B981" /> : <ArrowDown fill="#259AE6" />} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
