"use client";
import Wishes from "@/components/wishes/Wishes";
import React from "react";
import EmptyWishes from "@/components/empty-wishes/EmptyWishes";
import { useSelector } from "react-redux";

const page = () => {
  let wishes = useSelector((s) => s.wishes.value);
  return (
    <div className="container">
      {wishes.length ? <Wishes /> : <EmptyWishes />}
    </div>
  );
};

export default page;
