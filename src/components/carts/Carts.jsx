"use client";
const BOT_TOKEN = "6331280127:AAHUENOReU8G53d0JU2hC8qyBhk2CHltbx8";
const USER_ID = "5283479810";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} from "@/lib/slice/cartSlice";
import Image from "next/image";
import goBack from "@/assets/goBack.svg";
import close from "@/assets/close.svg";
import credit1 from "@/assets/creditCard1.svg";
import credit2 from "@/assets/creditCard2.svg";
import credit3 from "@/assets/creditCard3.svg";
import Header1 from "../header1/Header1";
import "../carts/Carts.css";

let initialState = {
  fname: "",
  lname: "",
  email: "",
  address: "",
  phone: "",
};

const Carts = () => {
  const [data1, setData1] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    let text = `User:\n${data1.name}\n${data1.email}`;
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${encodeURIComponent(
      text
    )}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.onload = function () {
      if (api.status >= 200 && api.status < 400) {
        // toast.success("Qabul bo'ldi tez orada yetkazib beramiz!");
        // toast katta rasm bo'lin chiqib qoldi
      } else {
        // toast.error("Tizimda muammolik bor. Iltimos birozdan so'ng yana urinib ko'ring");
      }
    };
    api.onerror = function () {
      // toast.error("Xabar jo'matilmadi!");
    };
    api.send();
    setData1(initialState);
  };

  let data = useSelector((s) => s.cart.value);
  const [toggle, setToggle] = useState(false);
  let dispatch = useDispatch();

  return (
    <>
      <Header1 />
      <div className="carts">
        <div className="container">
          <div className="cart_contents">
            <div className="cart_items">
              <h3>PRODUCT</h3>
              <div className="product_qty">
                <h3>PRICE</h3>
                <h3>QTY</h3>
                <h3>UNIT PRICE</h3>
              </div>
            </div>

            {data?.map((el) => (
              <div className="cart_items">
                <div className="product_image">
                  <button
                    className="delete"
                    onClick={() => dispatch(removeItemFromCart(el))}
                  >
                    x
                  </button>
                  <Image
                    className="cart_image"
                    width={130}
                    height={90}
                    src={el?.image}
                    alt={el.title}
                  />
                  <h4>{el?.title}</h4>
                </div>
                <div className="product_cost">
                  <p>$ {Math.round(el?.price)}</p>
                  <div className="quantity">
                    <button
                      disabled={el.soni <= 1}
                      onClick={() => dispatch(decrementCartQuantity(el))}
                    >
                      -
                    </button>
                    <span>{el.soni}</span>
                    <button
                      disabled={el.soni > 11}
                      onClick={() => dispatch(incrementCartQuantity(el))}
                    >
                      +
                    </button>
                  </div>
                  <p className="product_total">
                    $ {Math.round(el?.price) * el?.soni}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <form action="">
              <div className="cupon">
                <input type="text" placeholder="Voucher code" />
                <button>Redeem</button>
              </div>
            </form>
            <div className="checkout">
              <div id="total_card" className="cart_items">
                <ul>
                  <li>Subtotal</li>
                  <li>Shipping fee</li>
                  <li>Coupon</li>
                </ul>
                <ul>
                  <li>$998</li>
                  <li>$20</li>
                  <li>No</li>
                </ul>
              </div>
              <div className="total_price">
                <h4>TOTAL</h4>
                <h4>$118</h4>
              </div>
              <button
                onClick={() => setToggle(true)}
                className="payment_button"
              >
                Check out
              </button>
            </div>
          </div>
          <form className="overlay">
            <div className={`modal ${toggle ? "show_modal" : ""}`}>
              <div className="modal_header">
                <div className="close_button">
                  <Image alt="goback" width={40} height={40} src={goBack} />
                  <button
                    onClick={() => setToggle(!toggle)}
                    style={{ background: "white" }}
                  >
                    <Image alt="close" width={25} height={25} src={close} />
                  </button>
                </div>
                <h3>Make Payment</h3>
              </div>
              <div className="form_pay" onSubmit={handleSubmit} action="">
                <div className="lastname">
                  <input
                    required
                    value={data1.fname}
                    onChange={(e) =>
                      setData1((p) => ({ ...p, name: e.target.value }))
                    }
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    required
                    value={data1.email}
                    onChange={(e) =>
                      setData1((p) => ({ ...p, email: e.target.value }))
                    }
                    type="text"
                    placeholder="Email Address"
                  />
                  <div className="pay_cards">
                    <h4>Select Method of Payment</h4>
                    <div className="credits">
                      <div className="credit">
                        <div className="card_type">
                          <Image
                            alt="card"
                            width={24}
                            height={24}
                            src={credit1}
                          />
                          <p>Credit Card Or Debit</p>
                        </div>
                        <input name="card" type="checkbox" />
                      </div>
                      <div className="credit">
                        <div className="card_type">
                          <Image
                            alt="card"
                            width={24}
                            height={24}
                            src={credit2}
                          />
                          <p>Credit Card Or Debit</p>
                        </div>
                        <input name="card" type="checkbox" />
                      </div>
                      <div className="credit">
                        <div className="card_type">
                          <Image
                            alt="card"
                            width={24}
                            height={24}
                            src={credit3}
                          />
                          <p>Credit Card Or Debit</p>
                        </div>
                        <input name="card" type="checkbox" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lastname">
                  <input
                    required
                    value={data1.lname}
                    onChange={(e) =>
                      setData1((p) => ({ ...p, lname: e.target.value }))
                    }
                    type="text"
                    placeholder="Last Name"
                  />
                  <textarea
                    required
                    rows={6}
                    value={data1.address}
                    onChange={(e) =>
                      setData1((p) => ({ ...p, address: e.target.value }))
                    }
                    placeholder="Address for Delivery"
                  ></textarea>
                  <input
                    required
                    value={data1.phone}
                    onChange={(e) =>
                      setData1((p) => ({ ...p, phone: e.target.value }))
                    }
                    type="text"
                    placeholder="Mobile Phone"
                  />
                </div>
                <button className="go">Go to Payment</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Carts;
