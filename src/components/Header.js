import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
const navigate = useNavigate();
const user = useSelector(store => store.user)
  const handeSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className=" flex justify-between items-center w-full absolute top-0 left-0 bg-gradient-to-b from-black px-4 ">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="mini-logo"
      />
     {user&& <div className="flex">
        <img
          className="w-12 rounded-full px-2"
          src={user?.photoURL}
          alt="photo"
        />
        <button
          className="text-white text-xl font-semibold hover:underline"
          type="btn"
          onClick={handeSignOut}
        >
          Sign Out
        </button>
      </div>
}
    </div>
     
  );
};

export default Header;
