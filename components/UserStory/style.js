import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import {
  horizontalScale,
  verticalScale,
  scaleFont,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    alignItems: 'center',
    marginRight: horizontalScale(20),
  },
  firstName: {
    color: '#022150',
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', 500),
    fontSize: scaleFont(14),
    lineHeight: 'normal',
    letterSpacing: horizontalScale(0.14),
    marginTop: verticalScale(8),
  },
});

export default style;
