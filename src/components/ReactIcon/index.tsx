import { ReactElement } from 'react';
import { IconContext } from 'react-icons';

interface DynamicReactIconProps {
  children: ReactElement;
  size?: string;
  color?: string;
}

export function DynamicReactIcon({
  children,
  size = '2.5rem',
  color = '#0f0f0f',
}: DynamicReactIconProps) {
  return (
    <IconContext.Provider value={{ size: `${size}`, color: `${color}` }}>
      {children}
    </IconContext.Provider>
  );
}
