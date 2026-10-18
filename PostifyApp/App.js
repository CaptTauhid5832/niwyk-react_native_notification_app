import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from 'react-native';
import Toast from 'react-native-toast-message';

//Add all the screens here
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import { ListUsers } from './ListUsers';
import PostifyPostsList from './PostifyPostsList';
import PostifyAddPostScreen from './PostifyAddPostScreen';
import SettingsScreen from './SettingsScreen';

import useAuthentication from './useAuthentication';
import { Ionicons } from '@expo/vector-icons'; // You can choose other icon sets as well
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const { user } = useAuthentication();

  const handleLogout = async () => {
    await signOut(auth);
  }

  const logoutButton = () => (
    <Pressable
      style={{ margin: 3 }}
      onPress={() => {
        handleLogout();
        console.log('User logged out');
      }}
    >
      <Ionicons name="log-out-outline" size={24} color="grey" />
    </Pressable>
  )

  const homeButton = (navigation) => () => (
    <Pressable
      style={{ margin: 3 }}
      onPress={() => {
        navigation.navigate('ListUsers')
      }}
    >
      <Ionicons style={{ marginLeft: 10 }} name="home" size={24} color="grey" />
    </Pressable>
  )

  if (user) {
    return (
      <>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'PostifyPostsList') {
                  iconName = focused ? 'list' : 'list-outline';
                } else if (route.name === 'PostifyAddPostScreen') {
                  iconName = focused ? 'add' : 'add-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'settings' : 'settings-outline';
                } else if (route.name === 'ListUsers') {
                  iconName = focused ? 'people' : 'people-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'purple',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen
              name="ListUsers"
              component={ListUsers}
              options={{
                title: 'Posties',
                headerRight: logoutButton,
              }} />
            <Tab.Screen
              name="PostifyPostsList"
              component={PostifyPostsList}
              options={({ navigation }) => ({
                title: 'Posts....',
                headerRight: logoutButton,
                headerLeft: homeButton(navigation)
              })} />
            <Tab.Screen
              name="PostifyAddPostScreen"
              component={PostifyAddPostScreen}
              options={({ navigation }) => ({
                title: 'Add!!!',
                headerRight: logoutButton,
                headerLeft: homeButton(navigation)
              })} />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={({ navigation }) => ({
                title: 'Settings',
                headerRight: logoutButton,
                headerLeft: homeButton(navigation)
              })} />
          </Tab.Navigator>
        </NavigationContainer>
        <Toast />
      </>
    )
  } else {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </>
    );
  }
}
