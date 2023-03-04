import { formatCurrency, formatPercent } from '@/utils/helper';
import { Asset } from '@/utils/types';
import React from 'react';

type Props = {
  data: Asset;
};

export const AssetCard = ({ data }: Props) => {
  const percent = formatPercent(data.percent_change_of_price);
  return (
    <div className="grid relative justify-items-center mr-12">
      <div
        id="head"
        className="bg-main-bg1 relative px-4 py-8 mb-[-54px] rounded-full z-10"
      >
        <div
          id="icon"
          className="grid mb-[-22px] w-24 h-24  p-6 bg-main-gradientStart  justify-center"
        >
          <img src={'..' + data.icon} />
        </div>
      </div>
      <div id="assest-card" className="grid rounded-2xl w-[290px]">
        <div className="grid bg-gradient-to-b rounded-2xl from-main-gradientStart to-main-gradientEnd pt-16 p-5">
          <span className="text-main-name text-xs font-semibold text-center mt-2 mb-3">
            {data.name}
          </span>
          <div className="grid">
            <div className="flex bg-main-bg1 rounded-2xl w-60 justify-center items-center py-2">
              <span className="text-main-text mr-4 font-semibold text-basexs">
                {formatCurrency(data.price)}
              </span>
              <span
                className={
                  `${
                    percent.includes('-') ? 'text-main-red' : 'text-main-green'
                  }` + ' font-semibold text-xs'
                }
              >
                {percent}
              </span>
            </div>
            <label className="text-main-label text-xs font-semibold text-center my-2">
              Price
            </label>
          </div>
          <div className="grid mt-1">
            <div className="flex bg-main-bg1 rounded-2xl w-60 justify-center items-center py-2">
              <span className="text-main-text mr-4 font-semibold text-basexs">
                {formatCurrency(data.tvl)}
              </span>
            </div>
            <label className="text-main-label text-xs font-semibold text-center my-2">
              TVL
            </label>
          </div>
          <div className="flex justify-self-center mt-2 justify-center bg-main-bg1 rounded-[29px] p-2 pr-0">
            {data.pairs.map((item, index) => (
              <div className="mr-2.5" key={index}>
                <img src={'..' + item} className="w-5 h-5" />
              </div>
            ))}
          </div>
          <div className="grid">
            <label className="text-main-label text-xs font-semibold text-center my-2">
              Popular pairs
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
