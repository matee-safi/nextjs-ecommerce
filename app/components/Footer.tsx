import React from "react";
import Link from "next/link";
import PaymentIcons from "./PaymentIcons";
import MiniCart from "./MiniCart";

import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerContent">
          <div>
            <Link href="/delivery">Delivery</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms and Conditions of Sale</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div>Contact: hello@macaronmagic.com</div>

          <MiniCart />
        </div>
        <div className="iconContainer">
          <PaymentIcons />
          <div className="icons">
            <AiFillInstagram />
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
      <p className="copyright">2022 Macaron Magic All rights reserved</p>
    </>
  );
};

export default Footer;
