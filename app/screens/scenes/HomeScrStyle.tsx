import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../utils/Scale';
const { height, width } = Dimensions.get('window');


export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center'
        
    },

    bgImg:{
        width: scale(375),
        height: scale(812),
    },

    inputStyle: {
        borderBottomWidth: scale(3),
        width: scale(260),
        height: scale(50),
        alignSelf: 'center',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: scale(25),
        fontWeight: 'bold'
    },

    countryName:{
        fontSize: scale(15),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginBottom: verticalScale(50)
    },

    submitButton: {
        marginTop: verticalScale(50),
        alignSelf: 'center',
        width: scale(150),
        height: scale(50),
        borderRadius: scale(25),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },

    submitText: {
        fontSize: scale(25),
        fontWeight: 'bold',
    },

  

});
