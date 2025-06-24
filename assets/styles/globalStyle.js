import { StyleSheet } from 'react-native';
import { getFontFamily } from '../fonts/helper';
import {
  horizontalScale,
  verticalScale,
  scaleFont,
} from './scaling';

const globalStyle = StyleSheet.create({
  header: {
    // marginLeft: 27,
    // marginRight: 17,
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(14),
    borderRadius: 100,
    backgroundColor: '#F9FAFB',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: horizontalScale(10),
    height: verticalScale(10),
    borderRadius: 100,
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(12),
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: scaleFont(6),
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoriesContainer: {
    marginTop: verticalScale(20),
  },
  userPostContainer: {
    marginHorizontal: horizontalScale(24),
  },
});

export default globalStyle;
