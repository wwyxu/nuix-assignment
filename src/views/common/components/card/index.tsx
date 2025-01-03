import React from 'react';

import "./styles.css";

interface CardProps {
  data: Record<string, any>;
}

const Card: React.FC<CardProps> = ({
  data,
}) => (
  <div className="custom-card">
    {Object.entries(data).map(([key, value]) => (
      <div key={key}>
        <span>
          {`${key}: `}
        </span>
        <span>
          {typeof value === 'object'
            ? JSON.stringify(value)
            : String(value)
          }
        </span>
      </div>
    ))}
  </div>
);

export default Card;
