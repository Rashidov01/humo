import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="site-header container">
        <Link href="/">
          <a>
            <Image
              src="/assets/icons/logo.png"
              alt="site logo"
              width="40"
              height="60"
            />
          </a>
        </Link>
        <ul className="site-header__nav nav">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">About</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="#travel">
              <a className="nav__link">travel</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="#reason">
              <a className="nav__link">Reason</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="#contact">
              <a className="nav__link">Contact us</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
