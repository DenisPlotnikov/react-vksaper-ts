import React from "react";

import "./Display.scss";

interface NumberDisplayProps {
  value: number;
}

const Display: React.FC<NumberDisplayProps> = ({ value }) => {
  return (
    <div className="Display">
      {value < 0
        ? `-${Math.abs(value)
            .toString()
            .padStart(2, "0")}`
        : value.toString().padStart(3, "0")}
    </div>
  );
};

export default Display;
