import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

type CryptoItemProps = {
    name: string;
    symbol: string;
    currentPrice: number;
    priceChangePercent7d: number;
    logoUrl: string;
}

const ListItem = (props: CryptoItemProps) => {
    const { name, symbol, currentPrice, priceChangePercent7d, logoUrl } = props;
    const priceChangeColor = priceChangePercent7d > 0 ? '#34C759' : '#FF3830';
    
    return (
        <TouchableOpacity style={styles.itemWrapper}>
            {/* Left */}
            <View style={styles.leftWrapper}>
                <Image source={{ uri: logoUrl }} style={styles.image} />
                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>{ name }</Text>
                    <Text style={styles.subtitle}>{ symbol.toUpperCase() }</Text>
                </View>
            </View>

            {/* Right */}
            <View style={styles.rightWrapper}>
                <Text style={styles.title}>${ currentPrice.toLocaleString('en-US', { currency: 'USD'}) }</Text>
                <Text style={[styles.subtitle, {color: priceChangeColor}]}>{ priceChangePercent7d.toFixed(2) }%</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 48,
        width: 48,
    },
    titlesWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: '#A9ABB1',
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
})

export default ListItem