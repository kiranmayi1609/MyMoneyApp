// src/screens/DashboardScreen.tsx
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { signOut } from 'firebase/auth';
// import { auth } from '../firebase';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../types/navigation';

// type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

// const DashboardScreen: React.FC<Props> = ({ navigation }) => {
//   const handleLogout = async () => {
//     await signOut(auth);
//     navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Welcome to Dashboard</Text>

//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileForm')}>
//         <Text style={styles.buttonText}>Go to Profile Form</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={[styles.button, { backgroundColor: '#f44336' }]} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Log Out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   button: { backgroundColor: '#4caf50', padding: 12, borderRadius: 6, marginVertical: 10, width: '80%', alignItems: 'center' },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
// });

// export default DashboardScreen;


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import QRScreen from './QRScreen';
import AlertsScreen from './AlertScreen';
import HistoryScreen from './HistoryScreen';
import { TabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<TabParamList>();

const DashboardScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Search':
              iconName = 'search';
              break;
            case 'QR':
              iconName = 'qr-code-scanner';
              break;
            case 'Alerts':
              iconName = 'notifications';
              break;
            case 'History':
              iconName = 'history';
              break;
            default:
              iconName = 'help';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          borderTopColor: '#ccc',
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="QR" component={QRScreen} />
      <Tab.Screen name="Alerts" component={AlertsScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

export default DashboardScreen;
