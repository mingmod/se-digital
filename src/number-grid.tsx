import React from 'react';
import DigitalNumberGridItem from './line';
import './styles.css'

export type DigitalNumberGridProps = {
  size?: number;
  value?: number
}

const defaultSize = 200

const defaultMap = {
  tl: false,
  tt: false,
  tr: false,
  cc: false,
  bl: false,
  bb: false,
  br: false,
}

const eight = {
  tl: true,
  tt: true,
  tr: true,
  cc: true,
  bl: true,
  bb: true,
  br: true,
}

const activeMap: {[prop: string]: typeof defaultMap} = {
  'default': defaultMap,
  '0': {
    ...eight,
    cc: false,
  },
  '1': {
    ...defaultMap,
    tr: true,
    br: true,
  },
  '2': {
    ...eight,
    tl: false,
    br: false,
  },
  '3': {
    ...eight,
    tl: false,
    bl: false,
  },
  '4': {
    ...eight,
    tt: false,
    bl: false,
    bb: false,
  },
  '5': {
    ...eight,
    tr: false,
    bl: false,
  },
  '6': {
    ...eight,
    tr: false,
  },
  '7': {
    ...defaultMap,
    tt: true,
    tr: true,
    br: true,
  },
  '8': eight,
  '9': {
    ...eight,
    bl: false,
  },
}

const getValidValude = (value?: number): string => {
  if (!value && value !== 0) return 'default';
  return `${value % 10}`;
}

export const DigitalNumberGrid: React.FC<DigitalNumberGridProps> = ({ size = defaultSize, value }) => {

  const { tl, tr, tt, cc, bl, bb, br } = activeMap[getValidValude(value)]; 

  return <div style={{
    width: size + 'px'
  }} className='se-digital-grid'>
    <div className='se-digital-grid-item'>
      <ul>
        <DigitalNumberGridItem align='left' size={size} active={tl} />
        <DigitalNumberGridItem align='top' size={size} active={tt}  />
        <DigitalNumberGridItem align='right' size={size} active={tr} />
        <DigitalNumberGridItem align='center' size={size} active={cc} />
      </ul>
    </div>
    <div className='se-digital-grid-item'>
      <ul>
        <DigitalNumberGridItem align='left' size={size} active={bl} />
        <DigitalNumberGridItem align='bottom' size={size} active={bb} />
        <DigitalNumberGridItem align='right' size={size} active={br} />
      </ul>
    </div>
  </div>
}

DigitalNumberGrid.defaultProps = {
  size: defaultSize,
}

export default DigitalNumberGrid
