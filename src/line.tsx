import React, { useContext } from 'react';
import { genBackgroundColor } from './helpers';
import { defaultSettings, DigitalSettingsContext } from './settings';
import './styles.css';

type LineProps = {
  active?: boolean;
  size: number;
};

type LineSvgProps = {
  style: React.HTMLAttributes<HTMLDivElement>['style'];
};

const LineSvg: React.FC<LineSvgProps> = ({ style }) => {
  return (
    <svg
      className="se-digital-line-svg"
      xmlns="http://www.w3.org/2000/svg"
      width="1.77778in"
      height="7.11111in"
      viewBox="0 0 160 640"
    >
      <path
        strokeWidth="1"
        style={style}
        d="M 79.88,633.84
             C 79.88,633.84 153.72,560.78 153.72,560.78
               153.72,560.78 153.85,78.25 153.85,78.25
               153.85,78.25 80.00,5.92 80.00,5.92
               80.00,5.92 6.15,78.61 6.15,78.61
               6.15,78.61 6.03,561.51 6.03,561.51
               6.03,561.51 79.88,633.84 79.88,633.84 Z"
      />
    </svg>
  );
};

const LineBlock: React.FC<LineProps> = ({ active, size }) => {
  const settings = useContext(DigitalSettingsContext) ?? defaultSettings;

  const { stylesDiv, stylesSvg } = genBackgroundColor(settings, size, active);

  if (settings.type === 'sharp') {
    return <LineSvg style={stylesSvg} />;
  }

  return (
    <div className="se-digital-line-round">
      <div style={stylesDiv} />
    </div>
  );
};

export type DigitalNumberGridItemProps = {
  align: 'left' | 'top' | 'right' | 'center' | 'bottom';
} & LineProps;

export const DigitalNumberGridItem: React.FC<DigitalNumberGridItemProps> = ({
  align,
  ...lineProps
}) => {
  return (
    <li className={`se-digital-line se-digital-line-${align}`}>
      <div className="se-digital-line-section">
        <LineBlock {...lineProps} />
      </div>
    </li>
  );
};

export default DigitalNumberGridItem;
