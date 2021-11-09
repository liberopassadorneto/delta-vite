import { ReactElement } from 'react';
import { IconContext } from 'react-icons';

interface DynamicReactIconProps {
  children: ReactElement;
}

export function DynamicReactIcon({ children }: DynamicReactIconProps) {
  return (
    <IconContext.Provider value={{ size: '2.5rem', color: '#0f0f0f' }}>
      {children}
    </IconContext.Provider>
  );
}
