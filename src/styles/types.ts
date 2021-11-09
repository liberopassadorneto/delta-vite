export interface MainHeadingProps {
  inverse?: boolean;
}

export interface HeadingProps {
  margin?: string;
  mb?: string;
  mt?: string;
  inverse?: boolean;
  width?: string;
}

export interface TextWrapperProps {
  color?: string;
  size?: string;
  weight?: string;
  spacing?: string;
  padding?: string;
  margin?: string;
  mb?: string;
  mt?: string;
  textAlign?: string;
}

export interface SectionProps {
  padding?: string;
  margin?: string;
  inverse?: boolean;
  position?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
  smPadding?: string;
}

export interface RowProps extends SectionProps {
  justify?: string;
  align?: string;
  gap?: string;
  wrap?: string;
}

export interface ColumnProps extends RowProps {}
