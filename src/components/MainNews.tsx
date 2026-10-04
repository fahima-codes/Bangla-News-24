import { on } from 'events';
import Image from 'next/image';
import React from 'react';

interface News {
  id: string;
  title: string;
  description: string;
  imgeUrl: string;
  imageAlt: string;
  category: string;
  imageUrl: string;
}
const MainNews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;
  //const otherNews = news.slice(1);

  // console.log(otherNews);
  return (
    <div className="flex gap3">
      <div className="card bg-white text-black  w-1/2 border border-gray-200 ">
        <figure>
          <Image
            height={600}
            width={600}
            src={firstNews.imageUrl}
            alt={firstNews.title}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <p className="text-red-600 font-semibold text-sm">
            {firstNews.category}
          </p>
          <h2 className="card-title text-base">{firstNews.title}</h2>
          <p className="text-sm text-gray-600">{firstNews.description}</p>
        </div>
      </div>

      <div className="w-1/2 grid grid-rows-4 gap-2 ">
        {otherNews.slice(0, 4).map(on => (
          <div
            key={on.id}
            className="bg-white text-black border border-gray-200 rounded-lg p-3"
          >
            <p className="text-red-600 font-semibold text-xs">{on.category}</p>
            <div className="text-sm">{on.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
