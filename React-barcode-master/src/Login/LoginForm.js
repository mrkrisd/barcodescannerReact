import React, { Component } from 'react'; 

import {
    TextInput, 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity, 
} from 'react-native'; 

export default class LoginForm extends Component { 
    
        
        render() { 
            return (
                <View style={styles.container}>
                    <TextInput 
                        style={styles.input} 
                        underlineColorAndroid={'transparent'}
                        placeholder="Email"
                        placeholderTextColor="#ffffff4f"
                        returnKeyType="next"
                        keyboardType='email-address'
                        autoCapitalize="none"
                        autoCorrect={false}
                        onSubmitEditing={() => this.passwordInput.focus()}
                    />
                    <TextInput 
                        style={styles.input} 
                        underlineColorAndroid={'transparent'}
                        placeholder="Password"
                        placeholderTextColor="#ffffff4f"
                        secureTextEntry
                        returnKeyType="go"
                        ref={(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}> 
                            LOG IN
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

const styles = StyleSheet.create({ 
    container: { 
        padding: 60,
        backgroundColor: 'rgba(20,20,20,.1)' 
    }, 
    input: {
        height: 50, 
        backgroundColor: 'rgba(200,225,200,.2)', 
        marginBottom: 20, 
        color: '#ffffff99', 
        paddingHorizontal: 10,
        textAlign: 'center'
    }, 
    buttonContainer: { 
        backgroundColor: '#d81159af',
        paddingVertical: 20,
        paddingBottom: 20,
    },
    buttonText: { 
        fontSize: 15, 
        color: 'rgba(200,225,200,.8)',
        textAlign: 'center',
        fontWeight: '700'
        

    }
})

