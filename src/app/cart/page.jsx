"use client";
import Carts from "@/components/carts/Carts";
import React from "react";
import EmptyCart from "@/components/empty-cart/EmptyCart";
import { useSelector } from "react-redux";

const page = () => {
  let cart = useSelector((s) => s.cart.value);
  return <div>{cart.length ? <Carts /> : <EmptyCart />}</div>;
};

export default page;
