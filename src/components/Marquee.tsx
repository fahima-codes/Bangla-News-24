import Link from 'next/link';
import MarqueeText from 'react-marquee-text';
import 'react-marquee-text/dist/styles.css';

interface Headline {
  id: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
  const data = await res.json();
  const headlines: Headline[] = data.data ?? [];

  return (
    <div className="bg-red-700 text-white">
      <div className="mx-auto flex max-w-7xl">
        <div className="bg-red-700 py-1 pr-3 font-bold">সর্বশেষ</div>
        <MarqueeText className="py-1" direction="right" duration={13}>
          {headlines.map(h => (
            <Link key={h.id} className="hover:underline" href={`/news/${h.id}`}>
              <span>{h.title}</span>
              <span className="mx-5">•</span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
