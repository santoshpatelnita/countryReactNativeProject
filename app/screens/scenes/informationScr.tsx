/**
 * Country Detail Screen
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './informationScrStyle';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import scale, { verticalScale } from '../utils/Scale';

export interface Props {
    navigation: any;
    id: string;

}

interface S {
    country: any;
    countryData: any;
    weatherData: any;
    showData: boolean
}

interface SS {
    id: any;
}

class CountryInformationScreen extends Component<
    Props,
    S,
    SS
> {


    constructor(props: any) {
        super(props);
        this.state = {
            country: '',
            countryData: null,
            weatherData: null,
            showData: false,
        }
    }

    onPressCapitalWeather = async () => {
        const { name, capital, population, latlng, flag } = this.props.route.params.countryDetail;
        try {
            let response = await fetch(
                `http://api.weatherstack.com/current?access_key=e32b270172beca34f23673646d8a9b0d&query=${capital}`,
            );

            let json = await response.json();
            this.setState({ weatherData: json.current }, () => {
                this.setState({ showData: true });
            })
            console.log('@@@ Weather DATA JSON ============', json);
        } catch (error) {
            console.log('@@@ Error ============', error);
        }
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.mainHeader}>
                <TouchableOpacity>
                <Image
                    style={styles.backIcon}
                    source={require('../../assets/images/arrow1.png')}
                />
                </TouchableOpacity>
                <Text style={{ color: '#000', marginLeft: 110, marginRight: 100, fontSize: 20}}>Country Detail</Text>
            </View>
        );
    }

    countryDetail = () => {
        const { name, capital, population, latlng, flag } = this.props.route.params.countryDetail;
        return (
            <View style={{ marginTop: verticalScale(20), alignItems: 'center' }}>
                <Animatable.View useNativeDriver animation="zoomIn" duration="1500" style={styles.flag}>
                    <SvgUri
                        width="100%"
                        height="100%"
                        uri={flag}
                    />
                </Animatable.View>
                <Animatable.View useNativeDriver animation="zoomInLeft" duration="1500" style={styles.countryViewContainer}>
                    <Text style={styles.fieldValue}>Name: {name}</Text>
                    <Text style={styles.fieldValue}>Capital: {capital}</Text>
                    <Text style={styles.fieldValue}>Population: {population}</Text>
                    <Text style={styles.fieldValue}>Lating: {latlng}</Text>
                </Animatable.View>
                <Animatable.View useNativeDriver animation="zoomIn" duration="1500" style={{ alignSelf: 'center', marginTop: verticalScale(10) }}>
                    <TouchableOpacity onPress={() => this.onPressCapitalWeather()} style={[styles.submitButton]}>
                        <Text style={[styles.submitText]}>Capital Weather</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        )
    }

    WeatherData = () => {
        const { wind_speed, temperature, precip, weather_icons, pressure } = this.state.weatherData;
        return (

            <Animatable.View useNativeDriver animation="zoomInLeft" duraton="1500" style={styles.weatherData}>
                <View>
                    <Text style={[styles.weatherField, { marginLeft: scale(25) }]}>Temperature: {temperature}</Text>
                    <Text style={[styles.weatherField, { marginLeft: scale(25) }]}>PRECIP: {precip}</Text>
                    <Text style={[styles.weatherField, { marginLeft: scale(25) }]}>Wind speed: {wind_speed}</Text>
                </View>
                <Image source={{ uri: weather_icons[0] }} style={styles.imageIcon} />
            </Animatable.View>
        )
    }

    render() {
        return (
            <SafeAreaView>
                <StatusBar 
                animated={true}
                    backgroundColor="#dfc7fc"
              
                    hidden={true}
                />
                {this.renderHeaderContainer()}
                    <View>
                        <Animatable.View useNativeDriver animation="swing" delay={300} style={styles.header}>
                            {this.countryDetail()}
                            {this.state.showData && this.WeatherData()}
                        </Animatable.View>
                    </View>
            </SafeAreaView>
        );
    }
};

export default CountryInformationScreen;

