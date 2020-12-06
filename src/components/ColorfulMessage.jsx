import React from "react";

export const ColorfulMessage = (props) => {
  console.log("ColorfulMessage初期化");
  const { color, children, message } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={props}>{children ?? message}</p>;
};

export default ColorfulMessage;
