import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Button, View, TextInput } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation, route }) => {
  const { text } = route.params || {};
  
  const handleProfilePress = () => {
    navigation.navigate('Profile', { name: 'Jane' });
  };

  const handleThirdScreenPress = () => {
    navigation.navigate('Third');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Home Screen</Text>
      {text && <Text>You entered: {text}</Text>}
      <Button title="Go to Jane's Profile" onPress={handleProfilePress} />
      <Button title="Go to Third Screen" onPress={handleThirdScreenPress} />
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
};

const ThirdScreen = ({ navigation }) => {
  const [inputText, setInputText] = React.useState('');

  const handleButtonPress = () => {
    navigation.navigate('Home', { text: inputText });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10 }}
        placeholder="Enter text"
        onChangeText={setInputText}
        value={inputText}
      />
      <Button
        title="Submit"
        onPress={handleButtonPress}
      />
      <Button
        title="Go to Home Screen"
        onPress={() =>
          navigation.navigate('Home')
        }
      />
      <Button
        title="Go to Profile Screen"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
