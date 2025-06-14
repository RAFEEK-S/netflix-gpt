import  { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handeSignOut = () => {
    signOut(auth)
      .then(() => {
       
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className=" flex justify-between items-center w-full absolute top-0 left-0 bg-gradient-to-b from-black px-4 z-40">
      <img
        className="w-44"
        src={LOGO}
        alt="mini-logo"
      />
      {user && (
        <div className="flex">
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
      )}
    </div>
  );
};

export default Header;
