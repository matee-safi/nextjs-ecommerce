"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "../components/Cart";
import { useStateContext } from "@/context/StateContext";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { data: session } = useSession();

  return (
    <div className="navbar-container">
      <div className="company-name">
        <Link href="/">Mangez Macaron</Link>

        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
          {session && <Link href="/account">Account</Link>}

          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
          {showCart && <Cart />}
        </div>
      </div>
    </div>
  );
}
