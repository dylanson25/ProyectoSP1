import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [];

const getItem = (_, index) => ({
  id: index+1,
  title: `Cedula_${index+1}`
});

const getItemCount = () => 50;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});

export default App;