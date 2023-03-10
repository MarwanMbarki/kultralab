import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Home({ navigation }: { navigation: any }) {
  const [img, setImg] = useState('');
  const [breed, setBreed] = useState('');
  const [url, setUrl] = useState('https://dog.ceo/api/breeds/image/random');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setImg(json.message);
      })
      .catch((error) => {
        console.error(error);
      });

    const brd = img.split('/').slice(4, -1).join('/');
    let result = brd.replace('-', ' ');
    setBreed(result);
  };

  return (
    <View style={{ marginTop: 20, paddingBottom: 50, marginRight: 15, marginLeft: 15 }}>
      <ImageBackground source={{ uri: img }} resizeMode="cover" style={styles.tinyLogo}>
        <Text
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#fff',
            width: '100%',
            paddingBottom: 20,
            paddingTop: 20,
            paddingLeft: 10,
            textTransform: 'capitalize',
            fontSize: 20,
          }}
        >
          {breed}
        </Text>
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          width: '45%',
        }}
      >
        <TouchableOpacity style={styles.btn} onPress={() => getData()}>
          <Text style={styles.cardText}>Refresh</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('CarouselScreen', { breadUrl: url })}
        >
          <Text style={styles.cardText}>Store</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: '100%',
    height: 500,
  },
  btn: {
    backgroundColor: 'green',
    marginTop: 20,
    width: '100%',
    marginRight: 35,
  },
  cardText: {
    color: '#ffffff',
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 15,
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
