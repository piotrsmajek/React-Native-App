import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class EventForm extends Component {

    handleAddPress = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View>
                <TouchableHighlight
                    onPress={this.handleAddPress}
                >
                    <Text>Add</Text>
                </TouchableHighlight>
            </View>   
        )
    }
}

export default EventForm;