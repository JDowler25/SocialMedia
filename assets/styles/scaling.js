import { Dimensions, PixelRatio } from 'react-native';

let DeviceInfo;
try {
  // Optional dependency. Tests might not have the native module available.
  DeviceInfo = require('react-native-device-info');
} catch (e) {
  DeviceInfo = { isTablet: () => false };
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const GUIDELINE_BASE_WIDTH = 375;
const GUIDELINE_BASE_HEIGHT = 812;

const scaleWidth = SCREEN_WIDTH / GUIDELINE_BASE_WIDTH;
const scaleHeight = SCREEN_HEIGHT / GUIDELINE_BASE_HEIGHT;

export const horizontalScale = size => size * scaleWidth;

export const verticalScale = size => size * scaleHeight;

export const scaleFont = size => {
  const newSize = size * scaleWidth;
  const adjustedSize = DeviceInfo.isTablet() ? newSize * 0.9 : newSize;
  return Math.round(PixelRatio.roundToNearestPixel(adjustedSize));
};

export default {
  horizontalScale,
  verticalScale,
  scaleFont,
};
