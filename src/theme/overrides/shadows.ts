import { Shadows } from '@mui/material/styles/shadows';

const shadowKeyUmbraOpacity = 0.04;

function createShadow(...px: number[]): string {
  return [
    `${px[0]}px 
    ${px[1]}px 
    ${px[2]}px 
    ${px[3]}px 
    rgba(93,62,188,${shadowKeyUmbraOpacity * px[4]})`,
  ].join(',');
}

export const SHADOWS: Shadows = [
  'none',
  createShadow(0, 6, 24, 0, 1),
  createShadow(0, 6, 24, 2, 1.2),
  createShadow(0, 6, 24, 4, 1.4),
  createShadow(0, 6, 24, 8, 1.6),
  createShadow(0, 6, 24, 10, 1.8),
  createShadow(0, 6, 24, 12, 2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
  createShadow(0, 6, 24, 14, 2.2),
];
