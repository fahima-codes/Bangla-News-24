import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

// Ekhane News[] nay, sudhu News
const NewsCard = ({ news }: { news: News }) => {
  console.log(news);
  return (
    <Link href={`/news/${news.id}`}>
      <div className="card bg-white text-black border-gray-200 hover:shadow-lg transition">
        <figure>
          <Image
            height={600}
            width={600}
            src={news.imageUrl}
            alt={news.imageAlt || news.title}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <p className="text-red-600 font-semibold text-sm">{news.category}</p>
          <h2 className="card-title text-base line-clamp-2">{news.title}</h2>
          <p className="text-sm text-gray-600 line-clamp-3">
            {news.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
