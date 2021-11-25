import instance from "../api/index";

export const fetcher = (url) => {
  return instance.get(url, { withCredentials: true }).then((res) => res.data);
};
