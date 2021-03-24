import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

//Screen Constatnts
const SCREEN_HEIGHT = 812;
const SCREEN_WIDTH = 375;
console.log("@@@ Width =======", width)
console.log("@@@ height =======", height)
/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
export default function (units = 1) {
	return width / SCREEN_WIDTH * units;
}


const verticalScale = (size:number) => height / SCREEN_HEIGHT * size;

export { verticalScale };