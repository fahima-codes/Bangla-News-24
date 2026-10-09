import Link from 'next/link';

interface Headline {
  id: string;
  _id?: string;
  title: string;
}

const Marquee = async () => {
  let headlines: Headline[] = [];

  try {
    const res = await fetch(
      'https://news-api-v2.vercel.app/api/news?limit=10',
      {
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(5000),
      },
    );
    const data = await res.json();
    headlines = data?.data || data?.news || [];
  } catch (e) {
    console.log('Marquee fetch failed');
    return null;
  }

  if (headlines.length === 0) return null;

  // 2 bar duplicate korle gap chara cholbe
  const items = [...headlines, ...headlines];

  return (
    <div className="bg-red-700 text-white w-full overflow-hidden">
      <div className="mx-auto flex max-w-7xl items-center">
        <div className="bg-[#b91c1c] py-1.5 px-4 font-bold shrink-0 z-10">
          সর্বশেষ
        </div>

        <div className="flex-1 overflow-hidden relative">
          <div className="flex gap-8 animate-[marquee_12S_linear_infinite] whitespace-nowrap py-1 hover:[animation-play-state:paused]">
            {items.map((h, i) => (
              <Link
                key={`${h.id || h._id}-${i}`}
                href={`/news/${h.id || h._id}`}
                className="hover:underline flex items-center"
              >
                <span>{h.title}</span>
                <span className="mx-8 opacity-70">•</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
