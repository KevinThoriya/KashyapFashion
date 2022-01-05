import React from "react";
import SlideFourProduct from "./SlideFourProduct";
import useSWR from "swr";
import fetcher from "../components/fetcher";

export default function Trending() {
  const { data, error } = useSWR("/api/homepage/trending", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <SlideFourProduct data={data} />;
}
