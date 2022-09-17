/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export default function card({ image }) {
  return (
    <>
      <div className="card">
        {/* <Image src={image} alt="box image" width="1600" height="800" /> */}
        <img
          className="card-image"
          src={image}
          alt="box image"
          width="1300"
          height="800"
        />
      </div>
    </>
  );
}
