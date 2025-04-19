import React from "react";
import UserProfile from "./UserProfile";
import SearchUsers from "./SearchUsers";
import Notification from "./Notification";
import { useSelector } from "react-redux";
import SmallScreenAllChats from "./Home/AllChats/SmallScreenAllChats";

export default function Navbar() {
  const sign_in_success = useSelector((state) => state.authReducer.sign_in_success);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-green-400 shadow-md sticky top-0 z-0">
      {/* display only if user signin */}
      {sign_in_success && (
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-10">
          <section className="flex flex-wrap gap-4 items-center">
            {/* Hide SmallScreenAllChats on large screens */}
            <div className="lg:hidden">
              <SmallScreenAllChats />
            </div>
            <SearchUsers />
          </section>

          <section className="flex flex-wrap gap-4 items-center">
            <Notification />
            <UserProfile />
          </section>
        </div>
      )}
    </nav>
  );
}
