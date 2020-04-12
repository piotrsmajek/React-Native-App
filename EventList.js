import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button'
import { withNavigation } from 'react-navigation';

import EventCard from './EventCard'
import { getEvents } from './api'

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f3f3f3'
    }
});

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now(),
                }))
            })
        }, 1000);

        //from file
        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date),
        }));
        this.setState({ events })

        
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('willFocus', () => {
            getEvents().then(events => {
                this.setState({ events })
            });
        });
        
    }
    
    handleAddEvent = () => {
        this.props.navigation.navigate('Details');
    }

    render() {
        return [
            <FlatList
                style={styles.list}
                data= {this.state.events}
                renderItem={({ item }) => <EventCard event={item} />}
                keyExtractor={item => item.id}
            />,
            <ActionButton
            key="fab"
            onPress={this.handleAddEvent}
            buttonColor="rgba(231,76,60,1)"
            />
        ];
    }
}

export default withNavigation(EventList);