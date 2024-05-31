import Image from "next/image";
import React from "react";
import emptyWishlist from "@/assets/empty-wishlist.png";

const EmptyWishes = () => {
  return (
    <div className="empty">
      <Image
        alt="empty-wishlist"
        width={"100%"}
        height={600}
        src={emptyWishlist}
      />
    </div>
  );
};

export default EmptyWishes;
