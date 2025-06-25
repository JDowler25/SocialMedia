import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const ProfileTabs = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const PhotosTabLabel = ({ focused }) => (
  <ProfileTabTitle isFocused={focused} title={'Photos'} />
);
const VideosTabLabel = ({ focused }) => (
  <ProfileTabTitle isFocused={focused} title={'Videos'} />
);
const SavedTabLabel = ({ focused }) => (
  <ProfileTabTitle isFocused={focused} title={'Saved'} />
);

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}
    >
      <ProfileTabs.Screen
        name={'Tab1'}
        options={{
          tabBarLabel: PhotosTabLabel,
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Tab2'}
        options={{
          tabBarLabel: VideosTabLabel,
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Tab3'}
        options={{
          tabBarLabel: SavedTabLabel,
        }}
        component={ProfileTabContent}
      />
    </ProfileTabs.Navigator>
  );
};

export const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ header: () => null, headerShown: false }}
    >
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null, headerShown: false }}
      initialRouteName={'Drawer'}
    >
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};
export default MainNavigation;
