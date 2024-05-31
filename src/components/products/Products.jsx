// // // "use client";
// // // import React, { useEffect, useState } from "react";
// // // import "../products/Products.css";
// // // import Image from "next/image";
// // // import rate from "@/assets/rate.svg";
// // // import { FaHeart, FaRegHeart } from "react-icons/fa";
// // // import { BsCart3, BsCartCheckFill } from "react-icons/bs";
// // // import Link from "next/link";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { toogleLike } from "@/lib/slice/wishlistSlice";
// // // import { addToCart } from "@/lib/slice/cartSlice";
// // // // import { incrementItem } from "@/lib/slice/loadMore";

// // // const Products = ({ data, title, btn }) => {
// // //   const [selectedCategory, setSelectedCategory] = useState("All");
// // //   const categories = ["All", "Bags", "Sneakers", "Belt", "Sunglasses"];
// // //   let dispatch = useDispatch();
// // //   let wishes = useSelector((s) => s.wishes.value);
// // //   let products = useSelector((s) => s.cart.value);
// // //   const categoryList = categories.map((category, inx) => (
// // //     <li
// // //       key={inx}
// // //       className={selectedCategory === category ? "active" : ""}
// // //       onClick={() => setSelectedCategory(category)}
// // //     >
// // //       {category}
// // //     </li>
// // //   ));

// // //   const filteredProducts =
// // //     selectedCategory === "All"
// // //       ? data
// // //       : data.filter((product) => product.category === selectedCategory);

// // //   const productCards = filteredProducts.map((product) => (
// // //     <div key={product.id} className="product_card">
// // //       <div className="btn">HOT</div>
// // //       <Image
// // //         className="image"
// // //         src={product.image}
// // //         alt={product.title}
// // //         width={405}
// // //         height={318}
// // //       />
// // //       <div className="pro_icons">
// // //         <div className="pro_icon">
// // //           <button className="wishlist" onClick={() => handleLike(product)}>
// // //             {wishes?.some((el) => el.id === product.id) ? (
// // //               <FaHeart style={{ color: "red" }} />
// // //             ) : (
// // //               <FaRegHeart />
// // //             )}
// // //           </button>
// // //         </div>
// // //         <div className="pro_icon">
// // //           <button
// // //             className="wishlist"
// // //             onClick={() => {
// // //               dispatch(addToCart(product));

// // //               if (products?.findIndex((el) => el.id == product.id) < 0) {
// // //               }
// // //             }}
// // //           >
// // //             {products?.some((el) => el.id === product.id) ? (
// // //               <BsCartCheckFill />
// // //             ) : (
// // //               <BsCart3 />
// // //             )}
// // //           </button>
// // //         </div>
// // //       </div>
// // //       <Link href={`/single/${product.id}`}>
// // //         <h3 title={product.title}>{product.title}</h3>
// // //       </Link>
// // //       <Image alt="rating" width={120} height={12} src={rate} />
// // //       <div className="price">
// // //         <h4>${product.price}</h4>
// // //         <p>
// // //           <span>${product.price * product.rating.rate}</span>
// // //           24% Off
// // //         </p>
// // //       </div>
// // //     </div>
// // //   ));

// // //   useEffect(() => {
// // //     let wish = JSON.parse(localStorage.getItem("wishes"));
// // //     if (wish) {
// // //       dispatch(toogleLike(wish));
// // //     }
// // //   }, [dispatch]);

// // //   const handleLike = (pro) => {
// // //     const updatedWishlist = wishes.some((item) => item.id === pro.id)
// // //       ? wishes.filter((item) => item.id !== pro.id)
// // //       : [...wishes, pro];

// // //     dispatch(toogleLike(updatedWishlist));
// // //     if (typeof window !== "undefined") {
// // //       localStorage.setItem("wishes", JSON.stringify(updatedWishlist));
// // //     }
// // //   };

// // //   return (
// // //     <div className="products">
// // //       <div className="container">
// // //         <div className="product_contents">
// // //           <h2>{title}</h2>
// // //           <ul className="categories">{categoryList}</ul>
// // //           <div className="product_cards">{productCards}</div>

// // //           {!btn ? (
// // //             <div className="btn">
// // //               <button
// // //                 // disabled={loading}
// // //                 // onClick={}
// // //                 className="see__more"
// // //               >
// // //                 Load More
// // //                 {/* {loading ? "Loading..." : " See More"} */}
// // //               </button>
// // //             </div>
// // //           ) : (
// // //             <>
// // //               <button>load more</button>
// // //             </>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Products;

// /////////////////////////////////////////////////////////////////////////////////////////////////////////

// // "use client";
// // import React, { useEffect, useState } from "react";
// // import "../products/Products.css";
// // import Image from "next/image";
// // import rate from "@/assets/rate.svg";
// // import { FaHeart, FaRegHeart } from "react-icons/fa";
// // import { BsCart3, BsCartCheckFill } from "react-icons/bs";
// // import Link from "next/link";
// // import { useDispatch, useSelector } from "react-redux";
// // import { toogleLike } from "@/lib/slice/wishlistSlice";
// // import { addToCart } from "@/lib/slice/cartSlice";

// // const Products = ({ data, title, btn }) => {
// //   const [selectedCategory, setSelectedCategory] = useState("All");
// //   const categories = ["All", "Bags", "Sneakers", "Belt", "Sunglasses"];
// //   const dispatch = useDispatch();
// //   const wishes = useSelector((state) => state.wishes.value);
// //   const products = useSelector((state) => state.cart.value);

// //   const categoryList = categories.map((category, inx) => (
// //     <li
// //       key={inx}
// //       className={selectedCategory === category ? "active" : ""}
// //       onClick={() => setSelectedCategory(category)}
// //     >
// //       {category}
// //     </li>
// //   ));

// //   const filteredProducts =
// //     selectedCategory === "All"
// //       ? data
// //       : data.filter((product) => product.category === selectedCategory);

// //   const productCards = filteredProducts.map((product) => (
// //     <div key={product.id} className="product_card">
// //       <div className="btn">HOT</div>
// //       <Image
// //         className="image"
// //         src={product.image}
// //         alt={product.title}
// //         width={405}
// //         height={318}
// //       />
// //       <div className="pro_icons">
// //         <div className="pro_icon">
// //           <button className="wishlist" onClick={() => handleLike(product)}>
// //             {wishes?.some((el) => el.id === product.id) ? (
// //               <FaHeart style={{ color: "red" }} />
// //             ) : (
// //               <FaRegHeart />
// //             )}
// //           </button>
// //         </div>
// //         <div className="pro_icon">
// //           <button className="wishlist" onClick={() => handleCart(product)}>
// //             {products?.some((el) => el.id === product.id) ? (
// //               <BsCartCheckFill />
// //             ) : (
// //               <BsCart3 />
// //             )}
// //           </button>
// //         </div>
// //       </div>
// //       <Link href={`/single/${product.id}`}>
// //         <h3 title={product.title}>{product.title}</h3>
// //       </Link>
// //       <Image alt="rating" width={120} height={12} src={rate} />
// //       <div className="price">
// //         <h4>${product.price}</h4>
// //         <p>
// //           <span>${product.price * product.rating.rate}</span>
// //           24% Off
// //         </p>
// //       </div>
// //     </div>
// //   ));

// //   useEffect(() => {
// //     const wish = JSON.parse(localStorage.getItem("wishes"));
// //     if (wish) {
// //       dispatch(toogleLike(wish));
// //     }
// //     const cart = JSON.parse(localStorage.getItem("cart"));
// //     if (cart) {
// //       dispatch(addToCart(cart));
// //     }
// //   }, [dispatch]);

// //   const handleLike = (product) => {
// //     const updatedWishlist = wishes.some((item) => item.id === product.id)
// //       ? wishes.filter((item) => item.id !== product.id)
// //       : [...wishes, product];

// //     dispatch(toogleLike(updatedWishlist));
// //     if (typeof window !== "undefined") {
// //       localStorage.setItem("wishes", JSON.stringify(updatedWishlist));
// //     }
// //   };

// //   const handleCart = (product) => {
// //     const updatedCart = products.some((item) => item.id === product.id)
// //       ? products.filter((item) => item.id !== product.id)
// //       : [...products, product];

// //     dispatch(addToCart(updatedCart));
// //     if (typeof window !== "undefined") {
// //       localStorage.setItem("cart", JSON.stringify(updatedCart));
// //     }
// //   };

// //   return (
// //     <div className="products">
// //       <div className="container">
// //         <div className="product_contents">
// //           <h2>{title}</h2>
// //           <ul className="categories">{categoryList}</ul>
// //           <div className="product_cards">{productCards}</div>

// //           {!btn ? (
// //             <div className="btn">
// //               <button
// //                 // disabled={loading}
// //                 // onClick={}
// //                 className="see__more"
// //               >
// //                 Load More
// //                 {/* {loading ? "Loading..." : " See More"} */}
// //               </button>
// //             </div>
// //           ) : (
// //             <button>Load More</button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Products;

// //////////////////////////////////////////////////////////

// "use client";
// import React, { useEffect, useState } from "react";
// import "../products/Products.css";
// import Image from "next/image";
// import rate from "@/assets/rate.svg";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { BsCart3, BsCartCheckFill } from "react-icons/bs";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { toogleLike } from "@/lib/slice/wishlistSlice";
// import { addToCart } from "@/lib/slice/cartSlice";

// const Products = ({ data, title, btn }) => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const categories = ["All", "Bags", "Sneakers", "Belt", "Sunglasses"];
//   const dispatch = useDispatch();
//   const wishes = useSelector((state) => state.wishes.value) || [];
//   const products = useSelector((state) => state.cart.value) || [];

//   const categoryList = categories.map((category, inx) => (
//     <li
//       key={inx}
//       className={selectedCategory === category ? "active" : ""}
//       onClick={() => setSelectedCategory(category)}
//     >
//       {category}
//     </li>
//   ));

//   const filteredProducts =
//     selectedCategory === "All"
//       ? data
//       : data.filter((product) => product.category === selectedCategory);

//   const productCards = filteredProducts.map((product) => (
//     <div key={product.id} className="product_card">
//       <div className="btn">HOT</div>
//       <Image
//         className="image"
//         src={product.image}
//         alt={product.title}
//         width={405}
//         height={318}
//       />
//       <div className="pro_icons">
//         <div className="pro_icon">
//           <button className="wishlist" onClick={() => handleLike(product)}>
//             {wishes.some((el) => el.id === product.id) ? (
//               <FaHeart style={{ color: "red" }} />
//             ) : (
//               <FaRegHeart />
//             )}
//           </button>
//         </div>
//         <div className="pro_icon">
//           <button className="wishlist" onClick={() => handleCart(product)}>
//             {products.some((el) => el.id === product.id) ? (
//               <BsCartCheckFill />
//             ) : (
//               <BsCart3 />
//             )}
//           </button>
//         </div>
//       </div>
//       <Link href={`/single/${product.id}`}>
//         <h3 title={product.title}>{product.title}</h3>
//       </Link>
//       <Image alt="rating" width={120} height={12} src={rate} />
//       <div className="price">
//         <h4>${product.price}</h4>
//         <p>
//           <span>${product.price * product.rating.rate}</span>
//           24% Off
//         </p>
//       </div>
//     </div>
//   ));

//   useEffect(() => {
//     const wish = JSON.parse(localStorage.getItem("wishes"));
//     if (wish) {
//       dispatch(toogleLike(wish));
//     }
//     const cart = JSON.parse(localStorage.getItem("cart"));
//     if (cart) {
//       dispatch(addToCart(cart));
//     }
//   }, [dispatch]);

//   const handleLike = (product) => {
//     const updatedWishlist = wishes.some((item) => item.id === product.id)
//       ? wishes.filter((item) => item.id !== product.id)
//       : [...wishes, product];

//     dispatch(toogleLike(updatedWishlist));
//     if (typeof window !== "undefined") {
//       localStorage.setItem("wishes", JSON.stringify(updatedWishlist));
//     }
//   };

//   const handleCart = (product) => {
//     const updatedCart = products.some((item) => item.id === product.id)
//       ? products.filter((item) => item.id !== product.id)
//       : [...products, product];

//     dispatch(addToCart(updatedCart));
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }
//   };

//   return (
//     <div className="products">
//       <div className="container">
//         <div className="product_contents">
//           <h2>{title}</h2>
//           <ul className="categories">{categoryList}</ul>
//           <div className="product_cards">{productCards}</div>

//           {!btn ? (
//             <div className="btn">
//               <button className="see__more">Load More</button>
//             </div>
//           ) : (
//             <button>Load More</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

/////////

"use client";
import React, { useEffect, useState } from "react";
import "../products/Products.css";
import Image from "next/image";
import rate from "@/assets/rate.svg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsCart3, BsCartCheckFill } from "react-icons/bs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toogleLike } from "@/lib/slice/wishlistSlice";
import { addToCart } from "@/lib/slice/cartSlice";

const Products = ({ data, title, btn }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Bags", "Sneakers", "Belt", "Sunglasses"];
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishes.value);
  const products = useSelector((state) => state.cart.value);

  const categoryList = categories.map((category, inx) => (
    <li
      key={inx}
      className={selectedCategory === category ? "active" : ""}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </li>
  ));

  const filteredProducts =
    selectedCategory === "All"
      ? data
      : data.filter((product) => product.category === selectedCategory);

  const productCards = filteredProducts.map((product) => (
    <div key={product.id} className="product_card">
      <div className="btn">HOT</div>
      <Image
        className="image"
        src={product.image}
        alt={product.title}
        width={405}
        height={318}
      />
      <div className="pro_icons">
        <div className="pro_icon">
          <button className="wishlist" onClick={() => handleLike(product)}>
            {wishes?.some((el) => el.id === product.id) ? (
              <FaHeart style={{ color: "red" }} />
            ) : (
              <FaRegHeart />
            )}
          </button>
        </div>
        <div className="pro_icon">
          <button className="wishlist" onClick={() => handleCart(product)}>
            {products?.some((el) => el.id === product.id) ? (
              <BsCartCheckFill />
            ) : (
              <BsCart3 />
            )}
          </button>
        </div>
      </div>
      <Link href={`/single/${product.id}`}>
        <h3 title={product.title}>{product.title}</h3>
      </Link>
      <Image alt="rating" width={120} height={12} src={rate} />
      <div className="price">
        <h4>${product.price}</h4>
        <p>
          <span>${product.price * product.rating.rate}</span>
          24% Off
        </p>
      </div>
    </div>
  ));

  useEffect(() => {
    const wish = JSON.parse(localStorage.getItem("wishes"));
    if (wish) {
      dispatch(toogleLike(wish));
    }
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      dispatch(addToCart(cart));
    }
  }, [dispatch]);

  const handleLike = (product) => {
    const updatedWishlist = wishes.some((item) => item.id === product.id)
      ? wishes.filter((item) => item.id !== product.id)
      : [...wishes, product];

    dispatch(toogleLike(updatedWishlist));
    if (typeof window !== "undefined") {
      localStorage.setItem("wishes", JSON.stringify(updatedWishlist));
    }
  };

  const handleCart = (product) => {
    const updatedCart = products.some((item) => item.id === product.id)
      ? products.filter((item) => item.id !== product.id)
      : [...products, product];

    dispatch(addToCart(updatedCart));
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <div className="products">
      <div className="container">
        <div className="product_contents">
          <h2>{title}</h2>
          <ul className="categories">{categoryList}</ul>
          <div className="product_cards">{productCards}</div>

          {!btn ? (
            <div className="btn">
              <button
                // disabled={loading}
                // onClick={}
                className="see__more"
              >
                Load More
                {/* {loading ? "Loading..." : " See More"} */}
              </button>
            </div>
          ) : (
            <button>Load More</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
