'use client';

import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };
    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: '/',
    });

    if (data) {
      console.log(data);
      redirect('/');
    }
    if (error) {
      console.log(error);
    }
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
        <form onSubmit={onSubmit}>
          <label className="label font-medium">আপনার নাম</label>
          <input
            name="name"
            type="text"
            className="input input-bordered w-full"
            placeholder="যেমন: রহিম উদ্দিন"
          />

          <label className="label font-medium mt-1">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input input-bordered w-full"
            placeholder="apnar@email.com"
          />

          <label className="label font-medium mt-1">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input input-bordered w-full"
            placeholder="কমপক্ষে ৬ অক্ষর"
          />

          <button
            type="submit"
            className="btn bg-red-700 hover:bg-red-800 text-white w-full mt-6 text-base"
          >
            সাইন আপ করুন
          </button>

          <p className="text-center text-sm mt-4">
            একাউন্ট আছে?{' '}
            <a href="/sign-in" className="link link-primary font-semibold">
              লগইন করুন
            </a>
          </p>
        </form>
      </fieldset>
    </div>
  );
};

export default SignUpPage;
