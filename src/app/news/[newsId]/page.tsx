/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
import Link from 'next/link';
import { notFound } from 'next/navigation';

const getText = (node: any, out: string[] = []): string[] => {
  if (!node) return out;
  if (typeof node === 'string') out.push(node);
  else if (Array.isArray(node)) node.forEach(n => getText(n, out));
  else if (typeof node === 'object') {
    if (typeof node.text === 'string') out.push(node.text);
    else Object.values(node).forEach(v => getText(v, out));
  }
  return out;
};

const findKey = (node: any, key: string): any => {
  if (!node || typeof node !== 'object') return undefined;
  if (typeof node[key] === 'string') return node[key];
  for (const v of Object.values(node)) {
    const found = findKey(v, key);
    if (found) return found;
  }
  return undefined;
};

const getImageUrl = (block: any): string | null => {
  const locator = findKey(block, 'locator');
  const origin = findKey(block, 'originCode') || 'cpsprodpb';
  if (!locator) return null;
  return `https://ichef.bbci.co.uk/ace/ws/640/${origin}/${locator}.webp`;
};

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));

  const news: any = data?.data ?? data;
  if (!news || !news.title) notFound();

  const blocks: any[] =
    news.description?.blocks ?? news.content?.model?.blocks ?? [];

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <Link
        href="/"
        className="mb-4 inline-block text-sm font-medium text-red-600 hover:underline"
      >
        ← হোমে ফিরে যান
      </Link>

      <h1 className="mb-6 text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
        {String(news.title)}
      </h1>

      <div className="space-y-5">
        {blocks.map((block, i) => {
          const type = String(block.type ?? '').toLowerCase();
          const texts = getText(block).join(' ').trim();

          if (type === 'headline') return null;

          if (type === 'image') {
            const src = getImageUrl(block);
            return (
              <figure key={i} className="overflow-hidden rounded-lg">
                {src && (
                  <img
                    src={src}
                    alt={texts || 'news image'}
                    className="w-full object-cover"
                  />
                )}
                {texts && (
                  <figcaption className="mt-2 text-xs text-gray-500">
                    {texts}
                  </figcaption>
                )}
              </figure>
            );
          }

          if (!texts) return null;

          if (type.includes('head')) {
            return (
              <h2
                key={i}
                className="pt-4 text-xl font-bold text-gray-900 md:text-2xl"
              >
                {texts}
              </h2>
            );
          }

          if (type === 'byline' || type === 'timestamp') {
            return (
              <p key={i} className="text-sm text-gray-500">
                {texts}
              </p>
            );
          }

          return (
            <p key={i} className="text-lg leading-8 text-gray-800">
              {texts}
            </p>
          );
        })}
      </div>

      {news.link && (
        <a
          href={news.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          মূল খবর পড়ুন →
        </a>
      )}
    </main>
  );
};

export default NewsDetails;
