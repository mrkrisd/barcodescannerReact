import React, { Component } from 'react'; 
import {
    TouchableOpacity, 
    Text, 
    View, 
    StyleSheet, 
} from 'react-native'; 

const RegisterFooter = () => {
    return (
        <TouchableOpacity >
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>
                    Need an Account? 
                </Text> 
            </View>
        </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({ 
    registerContainer: { 
        
        alignContent: 'center',
        justifyContent: 'center', 
        marginBottom: 30,
        marginTop: 30,  
    },
    registerText: { 
        color: '#ffffffaa',
        textAlign: 'center', 
        textDecorationLine: 'underline'
    }
}); 

export default RegisterFooter;