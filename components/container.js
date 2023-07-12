import React from "react";

export default function Container(props) {
  return (
    <div
      className={`container px-4 lg:px-5 mx-auto ${props.className ? props.className : ""
        }`}>
      {props.children}
    </div>
  );
}
