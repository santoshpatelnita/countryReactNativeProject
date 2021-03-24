import { StyleSheet } from 'react-native';
import scale, { verticalScale } from '../utils/Scale';

export default StyleSheet.create({
  
    bgImg: {
        height: scale(812),
        width: scale(375),
        justifyContent: 'center',
        alignItems: 'center',
    },

    welText: {
        alignSelf: 'center',
        fontSize: scale(45),
        fontWeight: 'bold',
        color: '#ebf6ff',
    },

    testStyle: {
        fontSize: scale(35),
        fontWeight: 'bold',
        color: '#ebf6ff',
    },


});
