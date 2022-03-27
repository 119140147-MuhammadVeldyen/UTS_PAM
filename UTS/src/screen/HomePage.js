import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView, 
        View, ScrollView, TextInput, 
        TouchableOpacity, StatusBar,
        KeyboardAvoidingView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {  
    const [text, inputText] = useState({ 
        departure: '',
        arrival: '',
        service: '',
        date: '',
        time: '',
    });

    const getInput = (userInput) => {
        return (val) => {
            inputText({ ...text, [userInput]: val });
        }
    }
  
    const onSubmit = () => {
        navigation.navigate('Detail', { text })
    } 

    const [listData, setlistData] = useState(text);

    return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#e6e6e6" />
        <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView>
                <View style={styles.main}>
                    <Text style={styles.title}>Kapalzy</Text>
                    <Text style={styles.titleForm}>Pelabuhan Awal</Text>
                    <View style={styles.search}>
                    <Icon name="ship" size={20} color='grey'/>
                    <TextInput
                    style={styles.input}
                    placeholder="Tempat Kebarangkatan"
                    onChangeText={getInput('departure')}
                    value={text.departure}
                    />
                    </View>   
                    <Text style={styles.titleForm}>Pelabuhan Tujuan</Text>
                    <View style={styles.search}>
                        <Icon name="ship" size={20} color='grey' />
                        <TextInput
                        style={styles.input}
                        placeholder="Tempat Tujuan"
                        onChangeText={getInput('arrival')}
                        value={text.arrival}
                        />
                    </View>  
                    <Text style={styles.titleForm}>Kelas Layanan</Text>
                    <View style={styles.search}>
                        <Icon1 name="room-service" size={20} color='grey' />
                        <TextInput
                        style={styles.input}
                        placeholder="Isi Layanan"
                        onChangeText={getInput('service')}
                        value={text.service}
                        />
                    </View>             
                    <Text style={styles.titleForm}>Tanggal Masuk Pelabuhan</Text>
                    <View style={styles.search}>
                        <Icon1 name="date-range" size={20} color='grey' />
                        <TextInput
                        style={styles.input}
                        placeholder="Tanggal Masuk"
                        onChangeText={getInput('date')}
                        value={text.date}
                        />
                    </View>
                    <Text style={styles.titleForm}>Jam Masuk Pelabuhan</Text>
                    <View style={styles.search}>
                        <Icon1 name="access-time" size={20} color='grey' />
                        <TextInput
                        style={styles.input}
                        placeholder="Jam Masuk"
                        onChangeText={getInput('time')}
                        value={text.time}
                        />
                    </View>
                    <Text></Text>
                    <View style={styles.inputPerson}>
                        <View style={styles.detail_style}>
                            <Text style={styles.textPerson}>
                                Dewasa
                            </Text>
                            <Text style={styles.textPerson}>
                                1 Orang
                            </Text>
                        </View>
                    </View>            
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onSubmit}>
                        <Text style={styles.buttonText}><Icon style={styles.searchicon} name="search" size={15} color='#fffs'/>Cari</Text>
                    </TouchableOpacity>
                </View>
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
                            onPress= {() => navigation.navigate('Order', {listData})}>
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
            </KeyboardAvoidingView>
        </SafeAreaView>
        </ScrollView>
    </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#e6e6e6',
    },
    title: {
        color: '#3b92e3',
        fontSize: 50,
        fontWeight: 'bold',
        letterSpacing: 2,
        textAlign: 'center',
        marginTop: 20,
        paddingBottom: 20    
    },
    main: {
        margin: 30,  
        marginTop: 50,  
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginVertical: 0,
        shadowColor: "#bababa",
        shadowOpacity: 10,
        shadowRadius: 5,
    },
    search: {
        marginLeft:15,    
        flexDirection: 'row', 
        justifyContent: 'center',   
        alignItems: 'center',
        paddingBottom: 20,
    },
    titleForm: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        color: '#000',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 40,
        width: 250,
        flex: 1,
    },
    inputPerson: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        color: '#000',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        height: 5,
        flex: 1,
        marginBottom: 15
    },
    textPerson: {
        textAlign: 'center',
        paddingTop: 5,
    },
    searchicon: {
        paddingRight: 5
    },
    button: {
        backgroundColor: '#eb7900',
        borderRadius: 10,
        marginHorizontal: 50,
        paddingVertical: 10,
        elevation: 2,
        marginBottom: 10,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
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
        color: 'grey',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
    },
    detail_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
});

export default Home;