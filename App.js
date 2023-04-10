import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { dogs } from './breeds';
import Item from './Item';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          {dogs.map((item, index) => {
            return (
                <Text key={index}>{item.breed}</Text>
            )
          })}
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
