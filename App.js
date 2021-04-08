/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
let Data = '';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Students name" component={StudentsInfo} />
        <Stack.Screen name="Info" component={SaveText} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const StudentsInfo = (props) => {
  const {navigation} = props;

  const studentInformation = [
    {id: 1, title: 'DALAI LAMA', age: 12, address: ' no.24 street 6 delhi'},
    {id: 2, title: 'KELLIE ELMORE', age: 13, address: 'no.25 street 8 delhi'},
    {
      id: 3,
      title: 'CHEROKEE PROVERB',
      age: 14,
      address: 'no.26 street 9 delhi',
    },
    {id: 4, title: 'DOLLY PARTON', age: 15, address: 'no.27 street 10 delhi'},
    {id: 5, title: 'RUMI', age: 16, address: 'no.28 street 11 delhi'},
    {id: 6, title: 'GURUBOGSA', age: 17, address: 'no.29 street 12 delhi'},
    {id: 7, title: 'RIONA FLYNN', age: 17, address: 'no.30 street 13 delhi'},
    {id: 8, title: 'BOB MARLEY', age: 17, address: 'no.31 street 14 delhi'},
    {id: 9, title: 'JOYCE MEYERS', age: 17, address: 'no.32 street 15 delhi'},
    {
      id: 10,
      title: 'ZAIAD ABDELNOUR',
      age: 17,
      address: 'no.33 street 16 delhi',
    },
  ];

  const [isRender, setisRender] = useState(false);

  const ItemView = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={(log) => {
          console.log('item', item);
          navigation.navigate('Info', {item});
        }}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.contentList}>
        <FlatList
          data={studentInformation}
          keyExtractor={(item) => item.id.toString()}
          renderItem={ItemView}
          extraData={isRender}
        />
      </View>
    </SafeAreaView>
  );
};
const SaveText = (props) => {
  const Data = props.route.params.item || null;
  console.log('test', Data);
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{Data.id}</Text>
      <Text style={styles.text}>{Data.title}</Text>
      <Text style={styles.text}>{Data.age}</Text>
      <Text style={styles.text}>{Data.address}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  contentList: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    padding: 20,
    color: 'black',
    fontSize: 20,
  },
  item: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 20,
    color: 'black',
    fontSize: 20,
  },
});
