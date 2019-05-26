import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import QRCode from 'react-native-qrcode-svg';



export default class QRCodeScreen extends Component<any, any> {

    constructor ( props: any ) {
        super( props )
        this.state = ( {
            data: ""
        } )
    }

    componentWillMount() {
        let data = this.props.navigation.getParam( "data" );
        this.setState( {
            data
        } )
    }

    render() {
        return (
            <View style={ styles.container }>
                <QRCode
                    value={ this.state.data }
                    size={ Dimensions.get( 'screen' ).width - 50 }
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
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
} );