import React from "react";
import FiveGridStyle from "./FiveGridStyle";
import useSWR from "swr";
import fetcher from "../components/fetcher";

export default function ReadyToShip() {
  const { data, error } = useSWR("/api/homepage/readyToShip", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <FiveGridStyle data={data} />
    </div>
  );
}
