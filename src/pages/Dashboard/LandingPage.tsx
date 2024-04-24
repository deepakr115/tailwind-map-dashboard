import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import WorldMap from '../../components/Maps/WorldMap';
import PageLayout from '../../layout/PageLayout';
import { Info } from '../../common/Icons';
import { forecastData } from './MockData';

const LandingPage: React.FC = () => {
    return (
        <PageLayout>
            <div className="flex relative">
                <WorldMap />
            </div>
            <div className="widgets-container flex flex-col w-full justify-center z-99 absolute top-24 left-32 gap-2">
                <div className="flex gap-4">
                    <h2 className="text-white">Hello User</h2>
                    <a className="inline-flex px-1 items-center justify-center bg-cyan-500 text-center font-medium text-black hover:bg-opacity-90" href="#"><Info />There are 2 action items</a>
                </div>
                <div className="flex flex-row flex-nowrap justify-around gap-8 overflow-y-auto w-10/12">
                    {forecastData.map((data, index) => <CardDataStats key={index} {...data} />)}
                </div>
            </div>
        </PageLayout>
    );
};

export default LandingPage;
