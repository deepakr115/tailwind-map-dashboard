import React, { useState } from 'react';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import PageLayout from '../../layout/PageLayout';
import Switcher from '../../components/Switchers/Switcher';
import { ThreeDots } from '../../common/Icons';
import Sidebar from '../../components/Sidebar';
import { HamburgerMenu } from '../../components/HamburgerMenu/HamburgerMenu';

const getRandomValues = (n: number) => Array(n).fill(1).map(() => Math.floor(Math.random() * 700 + 200));

const options: ApexOptions = {
    colors: ['#0000ff', '#ffff00', '#008000'],
    chart: {
        fontFamily: 'Satoshi, sans-serif',
        height: 350,
        type: 'line',
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
    },
    legend: {
        show: false,
    },
    forecastDataPoints: {
        count: 8
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
    ],
    stroke: {
        width: [2, 2, 2],
        curve: 'straight',
    },
    grid: {
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
    },
    xaxis: {
        type: 'category',
        categories: [
            'Q2|2022',
            'Q3|2022',
            'Q4|2022',
            'Q1|2023',
            'Q2|2023',
            'Q3|2023',
            'Q4|2023',
            'Q1|2024',
            'Q2|2024',
            'Q3|2024',
            'Q4|2024',
            'Q1|2025',
            'Q2|2025',
            'Q3|2025',
            'Q4|2025',
            'Q1|2026',
            'Q2|2026',
            'Q3|2026',
            'Q4|2026',
        ],
        axisBorder: {
            show: true,
        },
        axisTicks: {
            show: true,
        }
    },
    yaxis: {
        title: {
            text: 'Consumption(FT,THOUSANDS)',
        },
        min: 0,
        max: 900,
    },
};

interface ChartOneState {
    series: {
        name: string;
        data: (number | null)[];
    }[];
}

const getDataPoints = () => [getRandomValues(19), getRandomValues(19), getRandomValues(19)]

const getChartData = (dataValues: number[][]) => {
    return {
        series: [
            {
                name: 'Data 1',
                data: dataValues[0],
            },
            {
                name: 'Data 2',
                data: dataValues[1],
            },
            {
                name: 'Data 3',
                data: dataValues[2],
            },
        ],
    }
}

const initialDataValues = getDataPoints();

const DetailPage: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [chartState, setChartState] = useState<ChartOneState>(getChartData(initialDataValues));
    const [tableData, setTableData] = useState(initialDataValues)

    const updateChartData = () => {
        const randomDataValues = getDataPoints();
        setChartState(getChartData(randomDataValues));
        setTableData(randomDataValues)
    }

    return (
        <PageLayout>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} updateChartData={updateChartData} />
            <div className="flex gap-2 justify-between">
                <HamburgerMenu open={sidebarOpen} setOpen={setSidebarOpen} />
                <div className="flex gap-4">
                    <div className="flex flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-black xl:col-span-8">
                        {/* Chart configurations */}
                        <div className="flex px-7.5 pt-2 gap-8">
                            <div className="flex justify-between gap-8">
                                <div className="flex gap-1 items-center">
                                    <Switcher />
                                    <div className="inline-block h-[14px] w-1 bg-green-100"></div>
                                    <span className="text-xs">AI Forecast</span>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <span className="text-xs">88%</span>
                                    <Switcher />
                                    <div className="inline-block h-[14px] w-1 bg-yellow-100"></div>
                                    <span className="text-xs">Final Forecast</span>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <span className="text-xs">80%</span>
                                    <div className="inline-block h-1 w-[14px] bg-blue-100"></div>
                                    <span className="text-xs">Consumption</span>
                                </div>
                            </div>
                            <div className="flex justify-between gap-8">
                                <div className="flex gap-1 items-center">
                                    <ThreeDots fill="green" />
                                    <span className="text-xs">AI Forecast</span>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <ThreeDots fill="yellow" />
                                    <span className="text-xs">Final Forecast</span>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <ThreeDots fill="orange" />
                                    <span className="text-xs">Previous Quarter Final Forecast</span>
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="flex justify-center">
                            <div id="chartOne" className="w-[73%] h-[50%]">
                                <ReactApexChart
                                    options={options}
                                    series={chartState.series}
                                />
                            </div>
                        </div>

                        {/* Table Data */}
                        <div className="table-container px-7.5 p-2 flex flex-col bg-teal-950 gap-4">
                            {tableData.map((values, index) => (
                                <div key={index} className="flex justify-between gap-2 border-b-2 border-gray-500">
                                    <span className="flex text-xs">Data {index + 1}</span>
                                    {values.map((item, index) => <span key={index} className="flex text-xs hover:opacity-90">{item}</span>)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </PageLayout>
    );
};

export default DetailPage;
