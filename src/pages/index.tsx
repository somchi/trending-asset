import { AssetCard } from '@/components/AssetCard';
import { Asset } from '@/utils/types';
import Image from 'next/image';
import React from 'react';
import SampleAssets from '../pages/api/sample-data.json';

const Home = () => {
  const renderAssetCards = () => {
    return SampleAssets.map((item: Asset, index) => (
      <AssetCard key={index} data={item} />
    ));
  };
  return (
    <main className="px-20 py-56">
      <div className="flex items-center mb-14">
        <span>
          <Image
            alt="activity"
            src="/imgs/activity.png"
            width={16}
            height={16}
          />
        </span>
        <p className="pl-4 text-base font-semibold text-main-text">
          Trending Assets
        </p>
      </div>
      <div className="grid md:flex  flex-wrap">{renderAssetCards()}</div>
    </main>
  );
};

export default Home;
