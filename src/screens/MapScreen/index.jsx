import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import stateCoordinate from './stateCoordinate';

export default function MapScreen({ route }) {
  const { stateName } = route.params

  const stateSlug = stateName.toLowerCase().replace(/ /g, '_')
  console.log("🚀 ~ MapScreen ~ stateSlug:", stateSlug)

  const coordinates = stateCoordinate[stateSlug]
  console.log("🚀 ~ MapScreen ~ coordinate:", coordinates)

  return (
    <SafeAreaView>
      <Text>MapScreen</Text>
      <Text>State: {stateName}</Text>
      {coordinates ? (
        <>
          <Text>Latitude: {coordinates.latitude}</Text>
          <Text>Longitude: {coordinates.longitude}</Text>
        </>
      ) : (
        <Text>Coordinates not found</Text>
      )}
    </SafeAreaView>
  );
}
