import React, { Component } from 'react'; 
import { 
    View, 
    StyleSheet,
    Text, 
    KeyboardAvoidingView,
    Image,    
} from 'react-native'; 

import LoginForm from './LoginForm'; 
import Logo from '../Common/Logo'; 
import RegisterFooter from './RegisterFooter'; 

export default class Login extends Component { 
    static navigationOptions = { 
        header: null
    }

    render () { 
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Logo />
                <LoginForm />
                <RegisterFooter />
            </KeyboardAvoidingView>
        );
    }   
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#3498db',
    
    }, 
    title: {
        color: 'white',
        fontSize: 15, 
        opacity: .8,
        
    }
}); 