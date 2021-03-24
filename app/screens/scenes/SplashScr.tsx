import React, { Component } from 'react';
import {View,Text,ImageBackground,Image,} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './SplashScrStyle';

export interface Props {
    navigation: any;
    id: string;

}

interface S {
    country: any;
    countryData: any
}

interface SS {
    id: any;
}

class SplashScreen extends Component<Props, S, SS> {

    componentDidMount() {
        setTimeout(async () => {
            this.props.navigation.replace('Home')
        }, 3000);
    }

    renderSplash = () => {
        return (
            <View>
                <ImageBackground source={require('../../assets/images/splash1.png')}
                    style={styles.bgImg}>
                 <Animatable.View  useNativeDriver animation="fadeInUpBig" duration={"3000"}>
                    <Text style={styles.welText}>Welcome To</Text>
                    <Text style={styles.testStyle}> Country Test Project</Text>
                </Animatable.View>
                </ImageBackground>
            </View>
        );
    }

    render() {
        return (
            <View>
                {this.renderSplash()}
            </View>
        );
    }
};

export default SplashScreen;

