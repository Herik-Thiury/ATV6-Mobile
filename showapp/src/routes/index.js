import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import CadastroScreen from '../screens/CadastroScreen';
import DetalheShowScreen from '../screens/DetalheShowScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import NovoShowScreen from '../screens/NovoShowScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const cores = {
  fundo: '#0B0B14', 
  ativo: '#B829EA', 
  inativo: '#4F4F5B', 
  barra: '#161622', 
};

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: cores.barra,
          borderTopWidth: 0,
          elevation: 0,
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: cores.ativo,
        tabBarInactiveTintColor: cores.inativo,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Busca') iconName = focused ? 'search' : 'search-outline';
          else if (route.name === 'Novo') iconName = focused ? 'add-circle' : 'add-circle-outline';
          else if (route.name === 'Perfil') iconName = focused ? 'person' : 'person-outline';
          
          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Busca" component={HomeScreen} /> 
      <Tab.Screen name="Novo" component={NovoShowScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false, 
        cardStyle: { backgroundColor: cores.fundo }, 
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      
      <Stack.Screen name="MainApp" component={AppTabs} />
      
      <Stack.Screen name="DetalheShow" component={DetalheShowScreen} />
    </Stack.Navigator>
  );
}