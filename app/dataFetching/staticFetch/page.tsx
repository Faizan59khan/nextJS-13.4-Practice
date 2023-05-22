"use client";
import React from "react";

const page = async () => {
  // This request should be cached until manually invalidated.
  // Similar to `getStaticProps`.
  //`force-cache` is the default and can be omitted.
  const staticData = await fetch(
    `https://jsonplaceholder.typicode.com/todos/1`,
    { cache: "force-cache" }
  );
  const responseStaticData = await staticData.json();
  console.log(responseStaticData);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "column",
        border: '1px solid gray',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        height: "40vh",
        margin:" auto",
        width: '50%',
      }}
    >
      <button
        onClick={() => {
          history.go(-1);
        }}
      >
        Back
      </button>
      <h1>Static Fetch</h1>
      <div>
        <h1>Title: {responseStaticData?.title}</h1>
      </div>
    </div>
  );
};

export default page;
