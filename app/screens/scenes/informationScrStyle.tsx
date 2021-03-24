import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../utils/Scale';
const { height, width } = Dimensions.get('window');


export default StyleSheet.create({

    mainHeader: {
        // width: '100%',
        height: scale(50),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#b5c2cd',
    },

    backIcon: {
        width: scale(40),
        height: scale(20),
        color: '#dfc7fc'
    },

    submitButton: {
        marginTop: verticalScale(40),
        width: scale(250),
        height: scale(50),
        borderRadius: scale(21),
        backgroundColor: '#8ba2b5',
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitText: {
        fontSize: scale(15),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff'
    },

    fieldValue: {
        fontSize: scale(20),
        color: '#000',
        fontWeight: 'bold',
        marginTop: verticalScale(10),
        alignSelf: 'flex-start',

    },

    weatherField: {
        fontSize: scale(20),
        // textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        marginTop: verticalScale(10),
    },

    flag: {
        width: scale(280),
        height: scale(150),
        // borderWidth: scale(1),
        borderColor: 'grey',
        borderRadius: scale(20),
        overflow: 'hidden'
    },

    weatherData: {
        borderWidth: scale(2),
        borderRadius: scale(10),
        width: scale(300),
        height: scale(120),
        marginTop: verticalScale(150),
        alignSelf: 'center',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // marginLeft: scale(-15),
        borderColor: 'black',
        backgroundColor: '#daf3f5',
        opacity: 0.5,
        // alignItems: 'flex-start',

    },

    imageIcon: {
        marginTop: verticalScale(30),
        width: scale(50),
        height: scale(50),
        marginRight: scale(40)
    },

    header:{
        height: scale(35),
    },
});
