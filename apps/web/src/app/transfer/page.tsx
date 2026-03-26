"use client";
import { Navbar } from "@/components/navbar";
import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  number: string;
};

const Transfer = () => {
  const [users, setUsers] = useState<User[]>([]);

  const onChange = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_HTTP_URL}/bulk`,
      {
        withCredentials: true,
      },
    );

    setUsers(response.data.data);
  };

  return (
    <div className="min-h-screen w-full flex gap-4 bg-linear-to-br from-slate-400 via-white/50 to-slate-500 dark:from-slate-800/90 dark:via-black dark:to-slate-900 transition-colors duration-500 p-4">
      <div className="w-full ">
        <div className="w-full -mt-12">
          <Navbar />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex mx-auto gap-2">
            <label htmlFor="Number">Enter Number</label>
            <input
              className="text-black bg-white px-4 h-fit py text-lg rounded-xl"
              onChange={onChange}
              maxLength={10}
              type="tel"
            />
          </div>
          <div className="flex mx-auto flex-col gap-2 border border-neutral-200 rounded-lg h-full w-1/2 p-4">
            {users.length === 0 ? <p className="text-xl font-semibold">Users Not found or not search </p> :users.map((items) => (
              <div key={items.id} className="flex items-center justify-around gap-20 border bg-neutral-400/40 p-2 rounded-xl cursor-pointer ">
                <div className="rounded-full p-2 bg-blue-500 font-semibold h-8 w-8 flex items-center justify-center ">{(items.name)?.charAt(0).toUpperCase()}</div>
                <div>
                  <p className="text-xl font-medium">{items.name}</p>
                  <p className="text-lg font-light">{items.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
