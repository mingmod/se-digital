import React, { useContext } from 'react';
import { defaultSettings, DigitalSettingsContext } from './settings';

export const DigitalDot: React.FC = () => {
  const { color, shadow, passiveColor, passiveOpacity, type } = useContext(DigitalSettingsContext) ?? defaultSettings;
  console.log(color, shadow, passiveColor, passiveOpacity, type);
  return <div>.</div>
}

export default DigitalDot;
