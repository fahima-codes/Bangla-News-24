'use client';
import { authClient } from '@/lib/auth-client';

import Link from 'next/link';
import React, { useState } from 'react';

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);
  const handleUpdatProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });
  };

  const handleShowForm = () => {
    setShow(!show);
  };
  return (
    <div className="mt-5">
      <div className=" fex-col items-center gap-2">
        <Link href={'/profile'}>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>
        </Link>
        <h2>{user?.name}</h2>
        <br />
        <h2>{user?.email}</h2>
        <button onClick={handleShowForm} className="btn">
          Edit Profile
        </button>
        {show && (
          <form onSubmit={handleUpdatProfile} className="flex flex-col gap-1">
            <label className="label font-medium">আপনার নাম</label>
            <input
              name="name"
              type="text"
              required
              className="input input-bordered w-full"
              placeholder="যেমন: রহিম উদ্দিন"
            />
            {/* --- IMAGE URL FIELD --- */}
            <label className="label font-medium mt-1">
              ছবির লিংক (Image URL)
            </label>
            <input
              name="image"
              type="url"
              className="input input-bordered w-full"
              placeholder="https://example.com/photo.jpg"
            />
            <button className="px-8 py-3 rounded-full font-medium bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all">
              Update Profile
            </button>{' '}
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
