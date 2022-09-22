/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="site-header container">
        <Link href="/">
          <a>
            <img
              src="/assets/icons/logo.png"
              alt="site logo"
              width="40"
              height="60"
            />
          </a>
        </Link>
        <ul className="site-header__nav nav">
          <li className="nav__item">
            <Link href="#travel">
              <a className="nav__link">О НАС</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="#reason">
              <a className="nav__link">ВЫГОДНЫЕ ЦЕНЫ</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="#contact">
              <a className="nav__link">КОНТАКТЫ</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
