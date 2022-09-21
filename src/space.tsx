import React from 'react';
import './styles.css';

interface DigitalNumberSpaceProps {
  size?: number;
  children?: React.ReactNode;
}

export const DigitalNumberSpace: React.FC<DigitalNumberSpaceProps> = ({
  size,
  children,
}) => {
  const style: React.CSSProperties =
    size || size === 0
      ? {
          padding: `${Math.floor(size / 4)}px`,
        }
      : {};

  return (
    <div className="se-digital-item" style={style}>
      {children}
    </div>
  );
};

export default DigitalNumberSpace;
