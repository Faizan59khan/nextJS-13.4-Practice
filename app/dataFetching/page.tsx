import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = async () => {
  return (
    <div>
      <h1
        className="text-blue-600"
        style={{ fontWeight: "bold", fontSize: "30px", padding: "2rem" }}
      >
        Data Fetching
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          width: "40%",
        }}
      >
        <Link href="./dataFetching/staticFetch">Static Site Generation</Link>
        <Link href="./dataFetching/revalidateFetch">
          Increamental Site Generation
        </Link>
        <Link href="./dataFetching/dynamicFetch/?id=1">Server Site Rendering</Link>
      </div>
    </div>
  );
};

export default Page;
