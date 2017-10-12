import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';
import { saveDeckTitle } from '../utils/helpers';

class AddDeck extends Component {
    static navigationOptions = {
        tabBarLabel: 'Add Deck',
    };

    state = {
        title: '',
        error: false
    }

    onTextChange = (text) => {
        if(text) {
            this.setState(() => (
                {
                    title: text,
                    error: false
                }
            ));            
        } else {
            this.setState(() => (
                {
                    title: text,
                    error: true
                }
            ));
        }
        
    }

    submit = () => {
        const { title } = this.state;
        const { navigate } = this.props.navigation;
        if (!title) {
            this.setState(() => ({error: true}));
            return;
        } 

        saveDeckTitle(title).then((data) => {
            this.setState(() => ({ title: ''}));
            Keyboard.dismiss();
            navigate('DeckList', { shouldRefresh: true});
        });

    }
    
    render() {
        const { title, error } = this.state;
        return (
            <View>
                <FormLabel>New Deck Title</FormLabel>
                <FormInput onChangeText={this.onTextChange} value={title}/>
                <FormValidationMessage >{error ? 'Required Field' : ''}</FormValidationMessage>
                <Button title="Submit" disabled={!title} onPress={this.submit} />
            </View>
        );
    }
}

export default AddDeck;