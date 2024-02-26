import React from "react";
import { useAuthContext } from "./context/useAuthContext";
import SignOutButton from "./signOutButton";

const Header = () => {
    const { userFirebase } = useAuthContext();
    const imgURL = userFirebase?.photoURL;
  return (
    <header className="flex justify-between items-center p-4 bg-zinc-800 text-white">
      <div className="flex items-center">
        <img className="w-8 h-8 mx-2" src="vite.svg" alt="" />
        <span className="text-2xl">Crud de productos firebase</span>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col mx-10">
          <span>Bienvenido {userFirebase.displayName}</span>
          <p>{userFirebase.email}</p>
        </div>
        <img
          className="w-12 mx-4 rounded-full"
          src={userFirebase.photoURL}
          alt={userFirebase.displayName}
        />
      </div>
      <SignOutButton/>
    </header>
  );
};

export default Header;
