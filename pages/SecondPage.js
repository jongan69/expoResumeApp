// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const SecondPage = ({ navigation }) => {
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
            About Me
          </Text>

          <Text  
          style={{
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 16,
            }}> 
            I am a react native software engineer ⚛️ 
            </Text>

            <Text  
          style={{
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 16,
            }}> 
            I enjoy Music, Food, Photography, & Fast Cars 🏎
            </Text>

            <Text  
          style={{
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 16,
            }}> 
            I bring energy, resources & skills of all sorts to the table 📊
            </Text>

            <Text  
          style={{
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 16,
            }}> 
            and I need a job 📩
            </Text>

          {/* <Button
            title="Go to First Page"
            onPress={() => navigation.navigate('FirstPage')}
          />
          <Button
            title="Go to Third Page"
            onPress={() => navigation.navigate('ThirdPage')}
          /> */}

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

export default SecondPage;
