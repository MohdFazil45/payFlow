import { useEffect, useState } from "react";
import axios from "axios";

export const useAuthorize = () => {
  const [isAuthorise, setIsAuthorise] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/me`, {
        withCredentials: true,
      })
      .then(() => {
        setIsAuthorise(true);
      })
      .catch(() => {
        setIsAuthorise(false);
      });
  }, []);

  return isAuthorise;
};