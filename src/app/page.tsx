import MainNews from '@/components/MainNews';
import Marquee from '@/components/Marquee';

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const section = data.data;
  const mainNews = section[0].articles;
  return (
    <div>
      <Marquee></Marquee>

      <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {/** news section */}
        <div className="col-span-2">
          <MainNews news={mainNews}></MainNews>
        </div>

        {/** most read section */}
        <div className="bg-green-500 col-span-1 min-h-75"></div>
      </div>
    </div>
  );
}
