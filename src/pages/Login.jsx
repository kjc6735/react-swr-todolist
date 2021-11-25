import React, { useState, useCallback } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import instance from "../api/";
import { Navigate, Route, Routes } from "react-router-dom";
const Login = () => {
  const {
    data: userData,
    error,
    mutate,
  } = useSWR("/users", fetcher, { dedupingInterval: 600000 });
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  console.log("login 접속");
  const onChangeId = useCallback(
    (e) => {
      console.log("id callback");
      setId(e.target.value);
    },
    [setId]
  );

  const onChangePasword = useCallback(
    (e) => {
      console.log("password callback");
      setPassword(e.target.value);
    },
    [setPassword]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(`id: ${id}`);
      console.log(`password: ${password}`);
      instance
        .post(
          "/users/login",
          { username: id, password },
          { withCredentials: true }
        )
        .then((res) => {
          mutate();
        });
    },
    [id, password]
  );
  if (userData) {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={id} name="username" onChange={onChangeId} />
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChangePasword}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
