/**
 * TestProject
 */
/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */

import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../utils/Scale';
import COLOR_CONST from '../theme/ColorConstants';
// import * as CONST from '../theme/StringConstants';

export const CommonStyles = {
    appContainer: { 
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor: COLOR_CONST.white 
    },

    appLogo:  {
      width: scale(108),
      height: scale(108),
    }
}