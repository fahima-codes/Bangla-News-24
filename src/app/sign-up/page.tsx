'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const SignUpPage = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // FIX: e er type add kora hoise
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name'));
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));
    const image = String(formData.get('image'));

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
        callbackURL: '/',
      });

      if (error) {
        setError(error.message || 'কিছু একটা ভুল হয়েছে');
        setLoading(false);
        return;
      }

      router.push('/');
      router.refresh();
    } catch (err) {
      console.log('crash:', err);
      setError('সার্ভারে সমস্যা হয়েছে');
      setLoading(false);
    }
  };

  const handleGooleSignUp = async () => {
    await authClient.signIn.social({ provider: 'google' });
  };
  const handleGithubSignIn = async () => {
    await authClient.signIn.social({ provider: 'github' });
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-base-100 px-4">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-2xl w-full max-w-sm border p-8 shadow-lg">
        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold">নতুন একাউন্ট</h1>
          <p className="text-sm text-gray-500 mt-1">
            তথ্য দিয়ে একাউন্ট তৈরি করুন
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-1">
          <label className="label font-medium">আপনার নাম</label>
          <input
            name="name"
            type="text"
            required
            className="input input-bordered w-full"
            placeholder="যেমন: রহিম উদ্দিন"
          />

          <label className="label font-medium mt-1">ইমেইল</label>
          <input
            name="email"
            type="email"
            required
            className="input input-bordered w-full"
            placeholder="apnar@email.com"
          />

          <label className="label font-medium mt-1">
            ছবির লিংক (Image URL)
          </label>
          <input
            name="image"
            type="url"
            className="input input-bordered w-full"
            placeholder="https://example.com/photo.jpg"
          />

          <label className="label font-medium mt-1">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            required
            minLength={8}
            className="input input-bordered w-full"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />

          {error && <p className="text-red-600 text-sm mt-3">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="btn bg-red-700 hover:bg-red-800 text-white w-full mt-6 text-base"
          >
            {loading ? 'অপেক্ষা করুন...' : 'সাইন আপ করুন'}
          </button>

          <p className="text-center text-sm mt-4">
            একাউন্ট আছে?{' '}
            <a href="/sign-in" className="link link-primary font-semibold">
              লগইন করুন
            </a>
          </p>
        </form>

        <div className="divider my-4">অথবা</div>
        <button onClick={handleGooleSignUp} className="btn w-full">
          Sign Up With Google
        </button>
        <button onClick={handleGithubSignIn} className="btn w-full mt-2">
          Sign Up With Github
        </button>
      </fieldset>
    </div>
  );
};

export default SignUpPage;
