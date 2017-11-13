import Color from 'color';

/* eslint-disable import/prefer-default-export */

/**
 * Calcuates a good text color for the given background
 * @param {string} backgroundColorHex The background color (as hex string including #)
 * @returns {string} Hex string for text color (including #)
 */
export const calculateTextColor = (backgroundColorHex) => {
  const backgroundColor = Color(backgroundColorHex);
  const mixRatio = 0.8;
  const textColor = backgroundColor.light() ?
    backgroundColor.mix(Color('black'), mixRatio) :
    backgroundColor.mix(Color('white'), mixRatio);
  return textColor.hex();
};
