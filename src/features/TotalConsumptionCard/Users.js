import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./usersSlice";


const Cards = ({ user }) => {
  return <h1>Total Air vol. consumption <p className="total_consumption">{user.phone}</p></h1>;
};

function Users() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  let content;

  if (loading === "pending") {
    content = <div>Loading...</div>;
  }

  if (loading === "idle") {
    content = data.map((item) => {
      return <Cards user={item} />;
    });    console.log(data)

  }
  if (error !== null) {
    content = <div>{error}</div>;
  }

  return <div>{content}</div>;
}



export default Users;
