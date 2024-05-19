import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import MyText from '../../../CustomComponents';
import stateImages from '../../../assets/state/stateImages';
import { useNavigation } from '@react-navigation/native';

const API =
  'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest';

  
  export default function HomeScreen() {
  const navigation = useNavigation()
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        setData(response.data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <StatusBar />
      <SafeAreaView
        edges={['top']}
        style={{ flex: 0, backgroundColor: '#3C3B6E' }}
      /> */}
      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={{
          flex: 1,
          backgroundColor: '#fff',
          position: 'relative',
        }}
      >
        <View style={styles.header}>
          <Image
            style={{ height: 20, width: 40 }}
            source={require('../../../assets/us_flag.png')}
          />
          <Text style={{ color: 'white', marginLeft: 10 }}>U.S. State</Text>
        </View>
        <View style={styles.content}>
          <MyText style={{ marginTop: 20, marginHorizontal: 20 }}>
            The United States of America is a federal republic consisting of 50
            states, a federal district (Washington, D.C., the capital city of
            the United States), five major territories, and various minor
            islands. Both the states and the United States as a whole are each
            sovereign jurisdictions.
          </MyText>
          <ScrollView style={{ height: '73%', marginTop: 20, paddingBottom: 100 }}>
            {data ? null : <Text>Loading...</Text>}
            {data?.data.map((item, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => navigation.navigate('Map', { stateName: item.State })}
                style={{
                  alignItems: 'center',
                  backgroundColor: '#F2F2F2',
                  width: 360,
                  height: 100,
                  borderRadius: 8,
                  marginTop: 20,
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    width: 152,
                    height: '100%',
                    backgroundColor: 'grey',
                    borderRadius: 8,
                    marginRight: 20,
                  }}
                >
                  <Image
                    style={{ width: '100%', height: '100%', borderRadius: 8 }}
                    source={stateImages?.[item?.['Slug State']] ?? require('../../../assets/state/default.png')}
                  />
                </View>
                <View>
                  <Text>Name: {item.State}</Text>
                  <Text>ID State: {item['ID State']}</Text>
                  <Text>Population: {item.Population}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3C3B6E',
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
  },
});
