import Color from 'color';
import { PALETTES } from 'color-of';

/**
 * Calcuates a good text color for the given background
 * @param {string} backgroundColorHex The background color (as hex string including #)
 * @returns {string} Hex string for text color (including #)
 */
export function calculateTextColor(backgroundColorHex) {
  const backgroundColor = Color(backgroundColorHex);
  const mixRatio = 0.8;
  const textColor = backgroundColor.light() ?
    backgroundColor.mix(Color('black'), mixRatio) :
    backgroundColor.mix(Color('white'), mixRatio);
  return textColor.hex();
}

/**
 * Gets the default palettes in the color-of library
 * @returns {string[][]} The default palette hex/name arrays
 */
export function getDefaultPalettes() {
  return PALETTES;
}
