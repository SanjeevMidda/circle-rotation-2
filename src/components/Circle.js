import React from "react";

const Circle = ({
  borderColor,
  circleWidth,
  circleHeight,
  backgroundColor,
  rotation,
}) => {
  let circleStyles = {
    border: `1px solid ${borderColor}`,
    width: circleWidth,
    height: circleHeight,
    borderRadius: "50%",
    position: "absolute",
    backgroundColor: backgroundColor,
    animation: rotation,
  };

  return (
    <div className="circle" style={circleStyles}>
      <div className="line"></div>
    </div>
  );
};

export default Circle;
