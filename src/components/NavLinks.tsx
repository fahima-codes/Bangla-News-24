import Link from 'next/link';

interface Navs {
  slug: string;
  title: string;
  scrapable: boolean;
}

const fallbackNavs: Navs[] = [
  { slug: 'politics', title: 'রাজনীতি', scrapable: true },
  { slug: 'world', title: 'বিশ্ব', scrapable: true },
  { slug: 'economy', title: 'অর্থনীতি', scrapable: true },
  { slug: 'health', title: 'স্বাস্থ্য', scrapable: true },
  { slug: 'sports', title: 'খেলা', scrapable: true },
  { slug: 'tech', title: 'প্রযুক্তি', scrapable: true },
];

const NavLinks = async () => {
  let navs: Navs[] = fallbackNavs;

  try {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories', {
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(15000),
    });

    if (!res.ok) throw new Error('API failed');

    const data = await res.json();
    if (data?.data?.length) navs = data.data;
  } catch (error) {
    console.log('NavLinks fetch failed, using fallback');
  }

  const filterdNavs = navs.filter(n => n.scrapable);

  return (
    <div className="flex gap-5 justify-center mt-5 text-black flex-wrap">
      <Link href="/">হোম</Link>
      {filterdNavs.map((n, i) => (
        <Link key={n.slug || i} href={`/category/${n.slug}`}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
