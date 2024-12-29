import React from 'react';

interface CardProps {
  header: string;
  data: Record<string, any>;
}

const Card: React.FC<CardProps> = ({ 
  header,
  data, 
}) => (
  <div>
    {header && (
      <h3>
        {header}
      </h3>
    )}
    
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
  </div>
);

export default Card;