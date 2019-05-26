import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { QRScannerView } from 'ac-qrcode';



export default class QRCodeScanScreen extends Component<any, any> {


    _renderTitleBar() {
        return (
            <Text></Text>
        );
    }

    _renderMenu() {
        return (
            <Text></Text>
        )
    }

    barcodeReceived( e: any ) {
        try {
            var result = e.data;
            Alert.alert( result )
        } catch ( error ) {
            console.log( error );
        }
    }
    render() {
        return (
            <View style={ styles.container }>
                < QRScannerView
                    hintText=""
                    rectHeight={ Dimensions.get( 'screen' ).height / 2.0 }
                    rectWidth={ Dimensions.get( 'screen' ).width - 20 }
                    scanBarColor={ "#26A946" }
                    cornerColor={ "#26A946" }
                    onScanResultReceived={ this.barcodeReceived.bind( this ) }
                    renderTopBarView={ () => this._renderTitleBar() }
                    renderBottomMenuView={ () => this._renderMenu() }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1
    },

} );