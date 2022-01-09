import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Platform } from 'react-native';

import HeaderButton from '../components/HeaderButton';

const PlacesListScreen  = props => {
    return(
        <View>
            <Text>Places list screen </Text>
        </View>
    );
};

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Places',
        headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item 
                            title="Add Place" 
                            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'} 
                            onPress={() => {
                                navData.navigation.navigate('NewPlace')
                            }}
                        />
                    </HeaderButtons>
                    )
    }
};

const styles = StyleSheet.create({});

export default PlacesListScreen;