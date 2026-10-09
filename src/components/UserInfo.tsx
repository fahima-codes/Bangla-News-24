'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

import React from 'react';

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div>
      {user ? (
        <div className="flex flex-col items-center gap-2">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2"></div>
          </div>

          <h2>{user?.name}</h2>
          <button onClick={handleSignOut} className="btn btn-error btn-xs">
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Link href={'/sign-in'}>
            {' '}
            <button className="px-8 py-3 rounded-full font-medium bg-white text-black border border-gray-200 shadow-sm hover:bg-gray-50 transition-all">
              সাইন ইন
            </button>
          </Link>
          <Link href={'/sign-up'}>
            <button className="px-8 py-3 rounded-full font-medium bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
