import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 mt-10 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 1. Logo Part */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
              B
            </div>
            <h2 className="text-xl font-bold text-white">Bangla News 24</h2>
          </div>
          <p className="text-sm text-gray-400 leading-6">
            দেশ ও জাতির সত্য সংবাদ সবার আগে। নিরপেক্ষ, বস্তুনিষ্ঠ সংবাদ পরিবেশনে
            আমরা প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        {/* 2. Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-l-4 border-red-600 pl-3">
            ক্যাটাগরি
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-red-500">
                হোম
              </Link>
            </li>
            <li>
              <Link href="/rajniti" className="hover:text-red-500">
                রাজনীতি
              </Link>
            </li>
            <li>
              <Link href="/bissho" className="hover:text-red-500">
                বিশ্ব
              </Link>
            </li>
            <li>
              <Link href="/khela" className="hover:text-red-500">
                খেলা
              </Link>
            </li>
            <li>
              <Link href="/projukti" className="hover:text-red-500">
                প্রযুক্তি
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-l-4 border-red-600 pl-3">
            দ্রুত লিংক
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-red-500">
                আমাদের সম্পর্কে
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500">
                যোগাযোগ
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-red-500">
                প্রাইভেসি পলিসি
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-red-500">
                প্রোফাইল
              </Link>
            </li>
          </ul>
        </div>

        {/* 4. Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-l-4 border-red-600 pl-3">
            যোগাযোগ
          </h3>
          <p className="text-sm text-gray-400"> Bangladesh</p>
          <p className="text-sm text-gray-400 mt-2">
            Email: info@banglanews24.com
          </p>
          <div className="flex gap-3 mt-4">
            <span className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center cursor-pointer transition">
              f
            </span>
            <span className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center cursor-pointer transition">
              Y
            </span>
            <span className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center cursor-pointer transition">
              X
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © ২০২৬ Bangla News 24.
      </div>
    </footer>
  );
};

export default Footer;
