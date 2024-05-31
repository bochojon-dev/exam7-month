import Image from "next/image";
import React from "react";
import emptyCart from "@/assets/cart-empty.png";

const EmptyWishes = () => {
  return (
    <div className="empty">
      <Image alt="empty-cart" width={700} height={600} src={emptyCart} />
    </div>
  );
};

export default EmptyWishes;
