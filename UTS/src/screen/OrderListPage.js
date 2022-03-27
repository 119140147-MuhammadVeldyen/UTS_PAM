import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView, FlatList, 
    View, ScrollView, TextInput, 
    TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { JADWAL } from '../database/Data'; 

const Order = ({ navigation, route }) => {
    const data = route.params.listData;
    console.log(data)
    const scheduleList = JADWAL.filter(item =>
        item.dermaga_keberangkatan === data.departure &&
        item.dermaga_tujuan === data.arrival &&
        item.kelas_layanan === data.service &&
        item.tanggal_masuk === data.date &&
        item.jam_masuk === data.time);
    console.log(scheduleList)

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#fff" />
            <SafeAreaView style={styles.container}>
            <View style={styles.titleStyle}>
                <Text style={styles.title}>Daftar Pemesanan</Text>
            </View> 
            <FlatList
                data={scheduleList}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <TouchableOpacity style={styles.detail_search}>
                            <View style={styles.detail_style}>
                                <Text style={styles.text}>
                                    {item.dermaga_keberangkatan}
                                </Text>
                                <Text style={styles.text}>
                                    <Icon name="arrow-right" size={20} color='#000' />
                                </Text>
                                <Text style={styles.text}>
                                    {item.dermaga_tujuan}
                                </Text>
                            </View>
                            <Text style={styles.titleform}>Jadwal Masuk Pelabuhan</Text>
                            <Text style={styles.detailInfoDate}>
                                {item.tanggal_masuk}
                            </Text>
                            <Text style={styles.detailInfoTime}>
                                {item.jam_masuk}
                            </Text>
                            <Text style={styles.titleform}>Layanan</Text>
                            <Text style={styles.detailInfo}>
                                {item.kelas_layanan}
                            </Text>
                            <View style={styles.detail_style_Text}>
                                <Text style={styles.countText}>
                                    Dewasa x 1
                                </Text>
                                <Text style={styles.countText}>
                                    Rp.65.000,00
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.jadwal_id}
                >
            </FlatList>
            <View style={styles.bottomBar}>
                <View style={styles.navbar}>
                    <TouchableOpacity
                        style={styles.buttonbottomBar}
                        onPress= {() => navigation.navigate('Home')}>
                        <Icon name="home" size={30} color='#3b92e3'/>
                        <Text style={styles.buttonbarText}>Beranda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonbottomBar}
                        onPress= {() => navigation.navigate('Order')}>
                        <Icon name="clipboard-list" size={30} color='#3b92e3'/>
                        <Text style={styles.buttonbarText}>Pesanan Saya</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonbottomBar}
                        onPress= {() => navigation.navigate('Home')}>
                        <Icon name="ban" size={30} color='#3b92e3'/>
                        <Text style={styles.buttonbarText}>Pembatalan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonbottomBar}
                        onPress= {() => navigation.navigate('Home')}>
                        <Icon name="bars" size={30} color='#EE9E54'/>
                        <Text style={styles.buttonbarText}>Lainnya</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleStyle: {
        marginTop: 0,  
        backgroundColor: '#283593',
        paddingVertical: 10,
        paddingHorizontal: 0,
        marginVertical: 0,
        marginBottom: 10
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        paddingBottom: 20    
    },
    titleform: {
        fontWeight: 'bold'
    },
    search: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 20,
        flexDirection: 'row', 
        justifyContent: 'center',   
        alignItems: 'center',
        paddingBottom: 20,
    },
    card: {
        marginHorizontal: 30,
    },
    detail_search: {
        borderWidth: 1,
        borderColor: '#d4d4d4',
        backgroundColor: '#dedede',
        padding: 20,
        marginBottom: 10,
        elevation: 10,
        marginTop: 10
    },
    detail_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    detail_style_Text: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    result_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        color: "#000",
        fontWeight: 'bold'
    },
    text: {
        color: '#000',
        fontSize: 18,
    },
    detailInfo: {
        paddingBottom: 10
    },
    countText: {
        paddingTop: 10,
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
    },
    detailInfoDate: {
        paddingBottom: 2
    },
    detailInfoTime: {
        paddingBottom: 10
    },
    bottomBar: { 
        marginTop: 50,  
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 0,
        marginVertical: 0,
    },
    navbar: {
        flexDirection: 'row', 
        justifyContent: 'center',   
        alignItems: 'center',
    },
    buttonbottomBar: {
        marginHorizontal: 23,
        alignItems: 'center' 
    },
    buttonbarText: {
        color: '#283593',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
    },
    titleForm: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Order;