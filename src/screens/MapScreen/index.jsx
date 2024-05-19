import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import stateCoordinate from './stateCoordinate';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function MapScreen({ route }) {
  const { stateName } = route.params;

  const stateSlug = stateName.toLowerCase().replace(/ /g, '_');
  console.log('🚀 ~ MapScreen ~ stateSlug:', stateSlug);

  const coordinates = stateCoordinate[stateSlug];
  const latitude = coordinates?.latitude;
  const longitude = coordinates?.longitude;
  console.log('🚀 ~ MapScreen ~ coordinate:', coordinates);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{stateName}</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 5.0,
            longitudeDelta: 5.0,
          }}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            title={stateName}
            description={''}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    color: '#2B302C',
    fontWeight: 'bold',
  },
  headerSubText: {
    fontSize: 16,
    color: '#2B302C',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 750,
  },
});
