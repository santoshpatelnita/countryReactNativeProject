import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './HomeScrStyle';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export interface Props {
    navigation: any;
    id: string;
    
  }
  
  interface S {
    country:any;
    countryData:any
  }
  
  interface SS {
    id: any;
  }
  
class HomeScreen extends Component <
   Props,
     S,
    SS
> {

    constructor(props:any) {
        super(props);
        this.state = {
            country: '',
            countryData: null,
        }
    }

    onPressSubmitDetails = async () => {
        try {
            let response = await fetch(
                `https://restcountries.eu/rest/v2/name/${this.state.country}`
            );
            console.log("@@@ response =========== ",response)
            let json = await response.json();
            console.log("@@@ json =========== ",json)
            this.setState({ countryData: json }, () => {
                if (json.status === 404) {
                    alert(json.message);
                    return;
                }

                this.props.navigation.navigate('CountryList', { countryList: this.state.countryData })
            })
        } catch (error) {
        }
    }

    inputHome = () => {
        return (
            <View>
                <Animatable.View useNativeDriver animation="flipInX" duration="1500">
                    <TextInput 
                        style={styles.inputStyle}
                        placeholder={'Enter Country Name...'}
                        placeholderTextColor= '#fff'
                        value={this.state.country}
                        onChangeText={(value) => this.setState({ country: value })}
                        autoCapitalize={false}
                        
                    />
                </Animatable.View>
                <Animatable.View useNativeDriver animation="slideInUp" duration="1500">
                    <TouchableOpacity disabled={this.state.country.trim().length === 0} onPress={() => this.onPressSubmitDetails()} 
                    style={[styles.submitButton, { backgroundColor: this.state.country.trim().length === 0 ? '#ffffff60' : '#ededf7' }]}>
                        <Text style={[styles.submitText, { color: this.state.country.trim().length === 0 ? '#cdf7f6' : '#000000' }]}>SUBMIT</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <ImageBackground
                    source={require('../../assets/images/home.png')}
                    style={styles.bgImg}>
                    <View style={styles.container}>
                        {this.inputHome()}
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
};

export default HomeScreen;

