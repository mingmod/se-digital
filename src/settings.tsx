import React, { createContext } from 'react';

export type DigitalSettings = {
  color: string;
  passiveColor: string;
  passiveOpacity: number;
  shadow: boolean;
  type: 'round' | 'sharp';
  weight: 'bold' | 'normal' | 'light';
};

export const defaultSettings: DigitalSettings = {
  color: '#FFCC00',
  passiveColor: '#FFCC00',
  passiveOpacity: 10,
  shadow: false,
  type: 'sharp',
  weight: 'normal',
};

export const DigitalSettingsContext = createContext<DigitalSettings>(
  defaultSettings
);

export type DigitalSettingsProps = DigitalSettings & {
  children?: React.ReactNode;
};

export const DigitalSettings: React.FC<DigitalSettingsProps> = ({
  children,
  ...settings
}) => (
  <DigitalSettingsContext.Provider
    value={{
      ...defaultSettings,
      ...settings,
    }}
  >
    {children}
  </DigitalSettingsContext.Provider>
);

DigitalSettings.defaultProps = defaultSettings;

export default DigitalSettings;
