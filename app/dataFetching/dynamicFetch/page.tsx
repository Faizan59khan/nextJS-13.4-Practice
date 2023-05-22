"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Page = async () => {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const id = searchParams.get("id");

  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  const dynamicData = await fetch(`https://fakestoreapi.com/products`, {
    cache: "no-store",
  });
  const responseDynamicData = await dynamicData.json();
  console.log(responseDynamicData);

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
        margin: "0 auto",
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
      <h1>Dynamic Fetch</h1>
      <div style={{ overflow : "auto", height: "80%" }}>
        {responseDynamicData?.map((item: Product) => {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid gray",
                  padding: "1rem",
                  borderRadius: "5px",
                  width: "100%",
                }}
              >
                <img src={item?.image} alt="product" width="100" height="100" />
                <div>
                  <h1>Title: {item?.title}</h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
