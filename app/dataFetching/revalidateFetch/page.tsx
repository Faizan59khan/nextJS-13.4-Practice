"use client";
import React from "react";

const page = async () => {
  //  This request should be cached with a lifetime of 10 seconds.
  // Similar to `getStaticProps` with the `revalidate` option.
  const revalidatedData = await fetch(
    `https://jsonplaceholder.typicode.com/todos/1`,
    {
      next: { revalidate: 10 },
    }
  );
  const responseRevalidatedData = await revalidatedData.json();
  console.log(responseRevalidatedData);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid gray",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        height: "40vh",
        margin: " auto",
        width: "50%",
      }}
    >
      <button
        onClick={() => {
          history.go(-1);
        }}
      >
        Back
      </button>
      <h1>Revalidate Fetch</h1>
      <div>
        <h1>Title: {responseRevalidatedData?.title}</h1>
      </div>
    </div>
  );
};

export default page;
