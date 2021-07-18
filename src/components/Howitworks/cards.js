import React from "react";

export default function cards(props) {
  return (
    <div className="card">
      <img src={props.imgUrl} alt={props.url} />
      <h3>{props.topic}</h3>
      <p>{props.desc}</p>
    </div>
  );
}
