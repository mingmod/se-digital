import React from 'react';
import { DigitalSettingsType } from './settings';

export const genBackgroundColor = (
  settings: DigitalSettingsType,
  size: number,
  active?: boolean
) => {
  const { color, shadow, passiveColor, passiveOpacity } = settings;

  const stylesDiv: React.CSSProperties = {
    backgroundColor: color,
  };
  const stylesSvg: React.CSSProperties = {
    fill: color,
  };

  if (active) {
    if (shadow) {
      const shadowSize = Math.floor(size / 4);
      stylesDiv.boxShadow = `0 0 ${shadowSize}px ${color}`;
      stylesSvg.filter = `filter: drop-shadow(0 0 ${shadowSize}px ${color}`;
    }
  } else {
    stylesDiv.backgroundColor = passiveColor ?? 'transparent';
    stylesDiv.opacity = passiveOpacity / 100 ?? 1;
    stylesSvg.backgroundColor = stylesDiv.backgroundColor;
    stylesSvg.opacity = stylesDiv.opacity;
  }

  return {
    stylesDiv,
    stylesSvg,
  };
};
