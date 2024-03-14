import React, {Component, useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default function App() {
  const [data, setData] = useState([]);

  const url = 'http://192.168.1.103:5000/';

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.text()
      // const result = await response.json();
      setData(result);
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
}
