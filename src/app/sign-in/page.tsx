const SignInPage = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-base-100 px-4">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-2xl w-full max-w-sm border p-8 shadow-lg">
        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold">লগইন করুন</h1>
          <p className="text-sm text-gray-500 mt-1">
            আপনার একাউন্টে প্রবেশ করুন
          </p>
        </div>

        <label className="label font-medium">ইমেইল</label>
        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="apnar@email.com"
        />

        <label className="label font-medium mt-1">পাসওয়ার্ড</label>
        <input
          type="password"
          className="input input-bordered w-full"
          placeholder="আপনার পাসওয়ার্ড"
        />

        <div className="text-right mt-1">
          <a href="#" className="text-xs link link-primary">
            পাসওয়ার্ড ভুলে গেছেন?
          </a>
        </div>

        <button className="btn bg-red-700 hover:bg-red-800 text-white w-full mt-6 text-base">
          লগইন করুন
        </button>

        <p className="text-center text-sm mt-4">
          একাউন্ট নেই?{' '}
          <a href="/sign-up" className="link link-primary font-semibold">
            সাইন আপ করুন
          </a>
        </p>
      </fieldset>
    </div>
  );
};

export default SignInPage;
