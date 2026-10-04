import Image from 'next/image';
import NavLinks from './NavLinks';

const Header = () => {
  const date = new Date().toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            className="w-10 h-10 rounded-full"
            height={50}
            width={50}
            src="/logo.webp"
            alt="logo"
          />
          <div>
            <div className="font-bold text-lg leading-none text-amber-700">
              Bangla News 24
            </div>
            <div className="text-xs text-gray-500 mt-1">{date}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-8 py-3 rounded-full font-medium bg-white text-black border border-gray-200 shadow-sm hover:bg-gray-50 transition-all">
            সাইন ইন
          </button>
          <button className="px-8 py-3 rounded-full font-medium bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all">
            সাইন আপ
          </button>
        </div>
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
