import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/routes/Router';

export default function App() {
  return (
    <NavigationContainer>
     <AppRouter/>
    </NavigationContainer>
  );
}
