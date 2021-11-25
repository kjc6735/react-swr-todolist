import React from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { Link } from "react-router-dom";
const User = () => {
  const { data } = useSWR("/users", fetcher);

  return (
    <div>
      안녕하세요. {data ? data.userId : <Link to="/login">로그인하러가기</Link>}
    </div>
  );
};
export default User;
