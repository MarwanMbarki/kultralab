import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

type GreetingProps = {
  name: any;
};
export default function CarouselScreen(props: GreetingProps) {
  const [img, setImg] = useState(props.route.params.breadUrl);
  const [imgArray, setImgArray] = useState('');
  const [breed, setBreed] = useState('');

  const CreateCarousel = () => {
    fetch(img)
      .then((response) => response.json())
      .then((json) => {
        setImgArray(json.message);
        const brd = imgArray.split('/').slice(4, -1).join('/');
        let result = brd.replace('-', ' ');
        setBreed(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={{ marginTop: 20, paddingBottom: 50, marginRight: 15, marginLeft: 15 }}>
      <ImageBackground source={{ uri: imgArray }} resizeMode="cover" style={styles.tinyLogo}>
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
      ></View>
      <TouchableOpacity style={styles.btn} onPress={() => alert('Return is disabled')}>
        <Text style={styles.cardText}>Back</Text>
      </TouchableOpacity>
      <CreateCarousel />
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
