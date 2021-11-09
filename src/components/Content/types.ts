import { MotionProps } from 'framer-motion';

export interface ContentRowProps {
  reverse?: boolean;
}

export interface HeadingProps extends MotionProps {
  inverse?: boolean;
}

export interface SubtitleProps extends MotionProps {
  inverse?: boolean;
}

export interface ContentButtonProps extends MotionProps {
  inverse?: boolean;
  big?: boolean;
  fontBig?: boolean;
}
