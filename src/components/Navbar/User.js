import { useEffect, useState } from "react";
import Settings from "./Settings";

function User() {
  const [user, setUser] = useState(null);
  useEffect(function () {
    async function fetchUser() {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      setUser((user) => data);
    }
    fetchUser();
  }, []);
  return (
    <div className="user nav-bar-comp-padding ">
      <img src={user?.results[0].picture.thumbnail} alt="" />
      <Settings />
    </div>
  );
}

export default User;
