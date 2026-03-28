"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export const useDetails = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user`,{
        withCredentials:true
      });
      console.log(response.data)
      setName(response.data.name)
      setNumber(response.data.number)
    };
    fetchDetails();
  }, []);

  return {name, number}
};
