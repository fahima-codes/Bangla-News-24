import Image from 'next/image';
import NavLinks from './NavLinks';
import UserInfo from './UserInfo';

const Header = () => {
  const date = new Date().toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-3 items-center">
        {/* Bam pashe khali - balance er jonno */}
        <div className="hidden md:block"></div>

        {/* Majkhane Logo - Eita majkhane ashbe */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2">
            <Image
              className="w-10 h-10 rounded-full"
              height={50}
              width={50}
              src="/logo.webp"
              alt="logo"
            />
            <div className="font-bold text-xl leading-none text-amber-700">
              Bangla News 24
            </div>
          </div>
          <div className="text-[11px] text-gray-500 mt-1">{date}</div>
        </div>

        {/* Dan pashe UserInfo */}
        <div className="flex justify-end">
          <UserInfo />
        </div>
      </div>

      <NavLinks />
    </header>
  );
};

export default Header;
