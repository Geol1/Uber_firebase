import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const ThirdPage = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            onPress={
              () => navigation.navigate('Dashboard')
            }
            title="HistoriqueTransaction"
          />
          <Button
            onPress={
              () => navigation.navigate('Transaction')
            }
            title="Transaction"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ThirdPage;