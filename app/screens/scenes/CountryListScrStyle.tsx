import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../utils/Scale';
const { height, width } = Dimensions.get('window');


export default StyleSheet.create({

    countryCell: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e4eaf5',
        paddingVertical: scale(10),
        borderRadius: scale(10),
        marginTop: verticalScale(15),
        paddingRight: scale(10),
        width: scale(350),
        alignSelf: 'center'
    },

    fieldValue: {
        fontSize: scale(16),
        color: '#000000',
        marginTop: verticalScale(8),
    },
    
    
});
