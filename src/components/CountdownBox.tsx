import React, { FC } from 'react';

interface CountdownBoxProps {
  left: number | string;
  divideBy: number;
  label: string;
}

const CountdownBox: FC<CountdownBoxProps> = ({ left, divideBy, label }) => {
  return(
    <div className="countdown__box">
      <div className="countdown__box_circles">
        <svg height="110" width="110">
          <circle 
            stroke="#1df9ba"
            strokeWidth="9"
            r="47"
            cx="55"
            cy="55"
          />
          <circle 
            stroke="#058862"
            strokeDashoffset={-((+left / divideBy) * 47 * 2 * Math.PI) + 47 * 2 * Math.PI}
            strokeDasharray={47 * 2 * Math.PI}
            strokeWidth="3"
            r="47"
            cx="55"
            cy="55"
          />
        </svg>
        <div className="countdown__box_left">{left}</div>
      </div>
      <p className="countdown__box_label">{label}</p>
    </div>
  );
}

export default CountdownBox;