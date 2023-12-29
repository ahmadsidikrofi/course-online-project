import Homepage from './screens/homepage/Homepage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailPage from './screens/detailCourse/DetailPage';
import Checkout from './screens/checkoutPage/Checkout';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Homepage' component={Homepage} options={{ 
          headerShown: false
        }}/>
        <Stack.Screen name='Detail Page' component={DetailPage} options={{ 
          headerShown: false
        }}/>
        <Stack.Screen name='Checkout page' component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
