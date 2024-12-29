import React from 'react';

interface CardProps {
  data: Record<string, any>;
}

const Card: React.FC<CardProps> = ({
  data,
}) => (
  <div>
    {Object.entries(data).map(([key, value]) => (
      <div key={key}>
        <span>
          {key}:
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