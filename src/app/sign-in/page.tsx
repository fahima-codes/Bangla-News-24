'use client';
import { authClient } from '@/lib/auth-client';
import React from 'react';
import toast from 'react-hot-toast';

const SignInPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = String(formData.get('email') || '').trim();
    const password = String(formData.get('password') || '').trim();

    if (!email || !password) {
      toast.error('Email password din');
      return;
    }

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/',
    });

    if (data) {
      toast.success('Sign In successfull!');
      console.log(data);
      window.location.href = '/';
    }

    if (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handleGooleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    });
    console.log(data);
  };

  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: 'github',
    });
    console.log(data);
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-base-100 px-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-2xl w-full border p-8 shadow-lg">
          <div className="text-center mb-2">
            <h1 className="text-2xl font-bold">লগইন করুন</h1>
            <p className="text-sm text-gray-500 mt-1">
              আপনার একাউন্টে প্রবেশ করুন
            </p>
          </div>

          <label className="label font-medium">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input input-bordered w-full"
            placeholder="apnar@email.com"
            required
          />

          <label className="label font-medium mt-1">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input input-bordered w-full"
            placeholder="আপনার পাসওয়ার্ড"
            required
          />

          <div className="text-right mt-1">
            <a href="#" className="text-xs link link-primary">
              পাসওয়ার্ড ভুলে গেছেন?
            </a>
          </div>

          <button
            type="submit"
            className="btn bg-red-700 hover:bg-red-800 text-white w-full mt-6 text-base"
          >
            লগইন করুন
          </button>

          <p className="text-center text-sm mt-4">
            একাউন্ট নেই?{' '}
            <a href="/sign-up" className="link link-primary font-semibold">
              সাইন আপ করুন
            </a>
          </p>
        </fieldset>
      </form>

      <button onClick={handleGooleSignIn} className="btn ">
        Sign In With Google
      </button>
      <button onClick={handleGithubSignIn} className="btn ">
        Sign In With Github
      </button>
    </div>
  );
};

export default SignInPage;
