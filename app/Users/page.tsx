"use client";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const Page = () => {
  const [users, setUsers] = useState<User[]>();
  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/api/users");
    const data = await res.json();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="m-auto text-center border-2 border-solid border-gray w-[50%] rounded-md">
      <h1 className="font-bold text-xl">Users</h1>
      {users?.map((user: User) => {
        return (
          <div className="flex justify-center" key={user?.id}>
            <p key={user?.id}>{user?.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
