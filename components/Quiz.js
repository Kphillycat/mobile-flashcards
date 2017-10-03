import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Quiz extends Component {
    state = {
        showAnswer: false,
        currentCard: 0,
        corrects: 0,
        incorrects: 0
    };

    onShowPress = () => {
        this.setState((state) => ({ showAnswer: !state.showAnswer}));
    }

    render() {
        const answer = "Yes";
        const question = "Does my arm smell funny?";
        const flipTo = {
            answer: "Anwser",
            question: "Question"
        };
        const { showAnswer } = this.state;
        const { deck } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Text>2/2</Text>
                {showAnswer ? 
                    <Text style={styles.mainText}>{answer}</Text>
                    :                
                    <Text style={styles.mainText}>{question}</Text>
                }
                <TouchableOpacity onPress={this.onShowPress}>
                    <Text style={styles.flipText}>Flip to {showAnswer ? flipTo.question : flipTo.answer}</Text>    
                </TouchableOpacity>
                <TouchableOpacity style={styles.correctButton}>
                    <Text style={styles.buttonText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.incorrectButton}>
                    <Text style={styles.buttonText}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 30
    },
    flipText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    correctButton: {
        backgroundColor: 'green',
        borderRadius: 10
    },
    incorrectButton: {
        backgroundColor: 'red',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 20,
        padding: 20,
        textAlign: 'center'
    }
});

export default Quiz;