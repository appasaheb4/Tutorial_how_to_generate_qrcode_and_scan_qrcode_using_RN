import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Permissions from 'react-native-permissions';



export default class HomeScreen extends Component<any, any> {


    componentDidMount() {

        Permissions.request( 'camera', {
            rationale: {
                title: 'Cool Photo App Camera Permission',
                message:
                    'Cool Photo App needs access to your camera ' +
                    'so you can take awesome pictures.',
            },
        } ).then( response => {
            console.log( { response } );

        } )

    }

    render() {
        return (
            <View style={ styles.container }>

                <Button
                    title="QR Code"
                    onPress={ () => {
                        this.props.navigation.push( "QRCodeScreen", { data: "USkill Share" } )
                    } }
                />
                <Button
                    title="QR Code Scan"
                    onPress={ () => {
                        this.props.navigation.push( "QRCodeScanScreen" )
                    }
                    }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    }
} );