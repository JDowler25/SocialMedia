import { createStaticNavigation } from '@react-navigation/native';
import { Routes } from './Routes';
import Home from '../screens/Home/Home';

const Stack = createStaticNavigation();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};
export default MainNavigation;
