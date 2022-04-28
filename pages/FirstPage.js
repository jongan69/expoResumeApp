// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Welcome to my resume app!
          </Text>
          <Text  style={{
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 16,
            }}> This app was built to demo a reume in mobile app form</Text>
          <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Go to About Me"
          />
          <Button
            onPress={() => navigation.navigate('ThirdPage')}
            title="View Projects"
          />

        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Jonathan Gan
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
        https://jongan69.github.io/linktree/
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
