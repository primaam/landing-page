import React from 'react';
import { StyleSheet, Text, View , ScrollView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function App() {
  return (
    <View>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>
          Welcome To Our Apps
        </Text>
        <ScrollView 
        horizontal={true}
        directionalLockEnabled={false}
        showsHorizontalScrollIndicator={true}>
            <Image source={{uri: 'https://picsum.photos/200/300'}} style={{width: 300, height: 200, marginHorizontal: 10}}/>
            <Image source={{uri: 'https://picsum.photos/200/300'}} style={{width: 300, height: 200, marginHorizontal: 10}}/>
            <Image source={{uri: 'https://picsum.photos/200/300'}} style={{width: 300, height: 200, marginHorizontal: 10}}/>
        </ScrollView>
      </View>
      <View style={styles.DashboardContainer}>
        <Text style={styles.ContainerText}>Hello, Our Beloved User</Text>
        <View style={{marginTop: 20}}>
          <TouchableOpacity style={styles.Card}>
            <Text style={styles.CardText}>Login</Text>
            <Icon name='arrow-forward-outline' style={{fontSize: 30, color: '#fff'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Card}>
            <Text style={styles.CardText}>Exit</Text>
            <Icon name='arrow-back-outline' style={{fontSize: 30, color: '#fff'}}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Header:{
    paddingHorizontal: 10,
    height: 320,
    backgroundColor: '#0036A0',
    paddingTop: 30
  },
  HeaderText:{
    fontSize: 30,
    alignSelf: 'center',
    color: '#fff',
    marginBottom: 10
  },
  DashboardContainer:{
    paddingHorizontal: 10,
    top: -25,
    paddingTop: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff'
  },
  ContainerText:{
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 10,
    color: 'black',
  },
  Card:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 20,
    marginTop: 30
  },
  CardText: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 10, 
    marginRight: 30
  }
});
