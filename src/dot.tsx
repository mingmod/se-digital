import React, { useContext } from 'react';
import { DEFAULT_SIZE } from './constants';
import { genBackgroundColor } from './helpers';
import { defaultSettings, DigitalSettingsContext } from './settings';
import './styles.css';

export type DigitalDotProps = {
  active?: boolean;
  size?: number;
  align?: 'flex-end' | 'center' | 'flex-start';
  count?: number;
};

export const DigitalDot: React.FC<DigitalDotProps> = ({
  active,
  size = DEFAULT_SIZE,
  align = 'flex-end',
  count = 1,
}) => {
  const settings = useContext(DigitalSettingsContext) ?? defaultSettings;
  const { stylesDiv } = genBackgroundColor(settings, size, active);
  const dotSize = Math.floor(size / 5);
  const style = {
    ...stylesDiv,
    width: dotSize,
    height: dotSize,
  };

  if (count < 1 || count > 4) return <></>;

  return (
    <div
      className="se-digital-dot-body"
      style={{ height: size * 1.8, alignItems: align }}
    >
      {[...Array(count)].map((_, key) => {
        return (
          <div
            key={key}
            className={settings.type === 'round' ? 'se-digital-dot-round' : ''}
            style={style}
          />
        );
      })}
    </div>
  );
};

export default DigitalDot;
