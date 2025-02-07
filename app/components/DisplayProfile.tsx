"use client";
import React from "react";
import { useSession, signIn } from "next-auth/react";
import { Session } from "next-auth";

export default function DisplayProfile() {
  const { data: session } = useSession() as { data: Session | null };

  const handleSignin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signIn();
  };

  return (
    <div className="display-profile">
      {session ? (
        <div>
          <div className="profile-image">
            <img
              src={session.user?.image || "/default-avatar.png"}
              alt="Profile"
            />
          </div>
          <div className="profile-details">
            <h3>{session.user?.name}</h3>
            <p>Email: {session.user?.email}</p>
          </div>
        </div>
      ) : (
        <a href="#" onClick={handleSignin} className="btn-signin">
          Sorry - this page is restricted to members only. Please log in to view
          your details.
        </a>
      )}
    </div>
  );
}
