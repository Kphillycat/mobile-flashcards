import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';
import { addCardToDeck } from '../utils/helpers';

class AddCard extends Component {
    static navigationOptions = {
        tabBarLabel: 'Add Card',
    };

    state = {
        question: '',
        answer: '',
        formCompleted: false
    }

    onTextChange = (type, text) => {
        this.setState(() => (
            {
                [type]: text
            }
        ));

        if(this.state.question && this.state.answer) {
            this.setState(() => ({formCompleted: true}))
        }
        
    }

    submit = () => {
        const { question, answer, formCompleted } = this.state;
        const { navigate } = this.props.navigation;
        const { deckTitle } = this.props.navigation.state.params;
        if (!formCompleted) {
            return;
        } 

        addCardToDeck(deckTitle, {question, answer}).then((data) => navigate('DeckList'));

    }
    render() {
        const { question, answer, formCompleted } = this.state;
        return (
            <View>
                <FormLabel>Question</FormLabel>
                <FormInput onChangeText={(text) => this.onTextChange('question', text)} value={question}/>

                <FormLabel>Answer</FormLabel>
                <FormInput onChangeText={(text) => this.onTextChange('answer',text)} value={answer}/>
                <Button title="Submit" disabled={!formCompleted} onPress={this.submit} />
            </View>
        );
    }
}

export default AddCard;