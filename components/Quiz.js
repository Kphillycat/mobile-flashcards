import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CORRECT, INCORRECT } from '../utils/constants'; 

class Quiz extends Component {
    state = {
        showAnswer: false,
        currentCardIdx: 0,
        corrects: 0,
        incorrects: 0
    };

    onShowPress = () => {
        this.setState((state) => ({ showAnswer: !state.showAnswer}));
    }

    onNextPress = (answer) => {
        console.log('===== onNextPress answer', answer);
        console.log('===== onNextPress CORRECT', CORRECT);
        if(answer === CORRECT) {
            this.setState((state) => ({
                showAnswer: false,
                corrects: state.corrects + 1,
                currentCardIdx: state.currentCardIdx + 1 
            }));
        } else if (answer === INCORRECT) {
            this.setState((state) => ({ 
                showAnswer: false,
                incorrects: state.incorrects + 1,
                currentCardIdx: state.currentCardIdx + 1 
            }));
        }
    }

    render() {
        const flipTo = {
            answer: "Anwser",
            question: "Question"
        };
        const { showAnswer, currentCardIdx, corrects, incorrects } = this.state;
        const { deck } = this.props.navigation.state.params;
        const currentCard = deck.questions[currentCardIdx];
        const percentage = (corrects/deck.questions.length) * 100;
        if(currentCardIdx === deck.questions.length) {
            return (
                <View style={styles.container}>
                    <Text>{`You got ${percentage}% right!`}</Text>
                </View>
            )
        }
console.log('bout it')
        return (
            <View style={styles.container}>
                <Text>{`${currentCardIdx + 1}/${deck.questions.length}`}</Text>
                {showAnswer ? 
                    <Text style={styles.mainText}>{currentCard.answer}</Text>
                    :                
                    <Text style={styles.mainText}>{currentCard.question}</Text>
                }
                <TouchableOpacity onPress={this.onShowPress}>
                    <Text style={styles.flipText}>Flip to {showAnswer ? flipTo.question : flipTo.answer}</Text>    
                </TouchableOpacity>
                <TouchableOpacity style={styles.correctButton} onPress={() => this.onNextPress(CORRECT)}>
                    <Text style={styles.buttonText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.incorrectButton} onPress={() => this.onNextPress(INCORRECT)}>
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