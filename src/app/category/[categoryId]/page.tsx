import NewsCard from '@/components/NewsCard';
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

const CategoryNews = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();

  const categoryNews: News[] = data.data;
  console.log(categoryNews);
  return (
    <div>
      <h1 className="text-2xl font-bold border-b-2 border-red-700">
        {data.title}
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {categoryNews.map(news => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
