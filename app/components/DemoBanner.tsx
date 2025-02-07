"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";

export default function DemoBanner() {
  const { data: session } = useSession() as { data: Session | null };
  console.log(session);
  const handleSignin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signIn();
  };

  const handleSignout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div className="demo-banner-container">
      <span>
        This is a demo store - no orders will be accepted or delivered
      </span>
      <span>
        {session && (
          <>
            <img
              src={session.user?.image || "/default-avatar.png"}
              alt="user avatar"
            />
            <p> Welcome, {session.user?.name ?? session.user?.email}</p>
            <a href="#" onClick={handleSignout} className="btn-signin">
              Sign out
            </a>
          </>
        )}
        {!session && (
          <>
            <p>Welcome</p>
            <a href="#" onClick={handleSignin} className="btn-signin">
              Sign in
            </a>
          </>
        )}
      </span>
    </div>
  );
}
