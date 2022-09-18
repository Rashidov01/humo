/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function card({ image }) {
  return (
    <>
      <div className="card">
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
