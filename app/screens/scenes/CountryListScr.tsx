import React, { Component } from 'react';
import {View,Text,SafeAreaView,FlatList, ImageBackground,Image} from 'react-native';
import styles from './CountryListScrStyle';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import Scale from '../utils/Scale';

export interface Props {
    navigation: any;
    id: string;
    
  }
  
  interface S {
    countryList:any;
  }
  
  interface SS {
    id: any;
  }
  
class CountryListScreen extends Component <
   Props,
     S,
    SS
> {
    constructor(props:any) {
        super(props);
        this.state = {
            countryList: this.props.route.params.countryList
        }
    }

    onPressCountryDetails = (item:any) => {
        this.props.navigation.navigate('CountryInformation', { countryDetail: item })
    }


    countryCell = (item:any, index:any) => {
        return (
            <Animatable.View useNativeDriver animation="zoomInDown" duration="1500">
                <TouchableOpacity onPress={() => this.onPressCountryDetails(item)} style={styles.countryCell}>
                    <View style={{width: Scale(250), paddingHorizontal: Scale(10)}}>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.fieldValue, {fontWeight: 'bold'}]}>Name:  </Text>
                        <Text style={[styles.fieldValue, {width: Scale(200)}]}>{item.name}</Text>
                        </View>

                        <View style= {{flexDirection: 'row'}}>
                        <Text style={[styles.fieldValue, {fontWeight: 'bold'}]}>Capital:  </Text>
                        <Text style={[styles.fieldValue, {width: Scale(200)}]}>{item.capital}</Text>
                        </View>

                        <View style= {{flexDirection: 'row'}}>
                        <Text style={[styles.fieldValue, {fontWeight: 'bold'}]}>Population:  </Text>
                        <Text style={[styles.fieldValue, {width: Scale(200)}]}>{item.population}</Text>
                        </View>

                        <View style= {{flexDirection: 'row'}}>
                        <Text style={[styles.fieldValue, {fontWeight: 'bold'}]}>Lating:  </Text>
                        <Text style={[styles.fieldValue, {width: Scale(200)}]}>{item.latlng}</Text>
                        </View>
                    </View>
                    <SvgUri
                        width="15%"
                        height="35%"
                        uri={item.flag}
                    />
                </TouchableOpacity>
            </Animatable.View>
        )
    }

    countryList = () => {
        console.log('countryList@@@@@====================================',this.state.countryList);
       
        return (
            <View>
                <FlatList
                    data={this.state.countryList}
                    renderItem={({ item, index }) => this.countryCell(item, index)}
                    keyExtractor={(item) => item.id}
                    extraData={this.state}
                />
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView>
                    <View>
                        {this.countryList()}
                    </View>
            </SafeAreaView>
        );
    }
};

export default CountryListScreen;

