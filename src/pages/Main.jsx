import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
const Main = () => {
  const { data: userData } = useSWR("/users", fetcher);
  console.log("main접속 ");
  console.log(userData);
  // if (!userData) {
  //   return (
  //     <Routes>
  //       <Route path="*" element={<Navigate to="/login" />} />
  //     </Routes>
  //   );
  // }
  return (
    <div>
      메인페이지입니다.{" "}
      {userData ? `${userData.userId}님 안녕하세요` : `로그인해주세요`}
    </div>
  );
};

export default Main;
