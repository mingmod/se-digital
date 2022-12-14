import React from 'react';
import DigitalDot from './dot';
import DigitalNumberGrid from './number-grid';
import DigitalNumberSpace from './space';
import './styles.css';

export type DigitalNumberProps = {
  value?: number | string;
  float?: number;
  fixedCount?: number;
  size?: number;
};

export const DigitalNumber: React.FC<DigitalNumberProps> = ({
  value = '',
  fixedCount,
  float,
  size,
}) => {
  const valueLocal = `${float === 0 ? parseInt(value + '') : value}`;
  const [nprefix = '', nsuffix = ''] = valueLocal.split('.');
  const nprefixCount = fixedCount ?? nprefix.length;
  const nsuffixCount = float ?? nsuffix.length;

  const mapper = (
    key: number,
    values: string = '',
    count: number,
    suffix?: boolean
  ) => {
    const index = suffix ? key : count - key - 1;
    const value =
      index < values.length
        ? parseInt(values[suffix ? index : values.length - index - 1])
        : undefined;

    return (
      <DigitalNumberSpace key={key}>
        <DigitalNumberGrid value={value} size={size} />
      </DigitalNumberSpace>
    );
  };

  return (
    <div className="se-digital-items">
      {[...Array(nprefixCount)].map((_, key) =>
        mapper(key, nprefix, nprefixCount)
      )}
      {nsuffixCount && (
        <DigitalNumberSpace>
          <DigitalDot size={size} active={nsuffix.length > 0} />
        </DigitalNumberSpace>
      )}
      {nsuffixCount &&
        [...Array(nsuffixCount)].map((_, key) =>
          mapper(key, nsuffix, nsuffixCount, true)
        )}
    </div>
  );
};

export default DigitalNumber;
