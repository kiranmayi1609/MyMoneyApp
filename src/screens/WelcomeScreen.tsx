// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../types/navigation';

// const { width } = Dimensions.get('window');

// type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

// const Welcome = () => {
//   const navigation = useNavigation<WelcomeScreenNavigationProp>();

//   const WELCOME_IMAGE_URL = 'https://www.moneypatrol.com/moneytalk/wp-content/uploads/2023/06/budget358.png';
//   const APP_LOGO_URL = 'https://www.expanseft.com/img/touch_fingerprints.png';

//   // Responsive font size example
//   const getResponsiveFontSize = () => {
//     if (width <= 428) return 24;
//     if (width <= 1000) return 28;
//     return 32;
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: WELCOME_IMAGE_URL }} style={styles.welcomeImage} resizeMode="cover" />
//       <Image source={{ uri: APP_LOGO_URL }} style={styles.logo} resizeMode="contain" />
      
//       <Text style={[styles.title, { fontSize: getResponsiveFontSize() }]}>
//         Expense Tracker Pro
//       </Text>

//       <Text style={styles.subtitle}>Manage your 50,000 KR wallet efficiently</Text>

//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
//         <Text style={styles.buttonText}>Get Started</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     padding: width < 500 ? 16 : 24,
//   },
//   welcomeImage: {
//     width: width * 0.9,
//     height: width < 500 ? 220 : 260,
//     borderRadius: 15,
//     marginTop: width < 500 ? 20 : 40,
//     marginBottom: 30,
//   },
//   logo: {
//     width: width < 500 ? 80 : 100,
//     height: width < 500 ? 80 : 100,
//     marginBottom: 20,
//   },
//   title: {
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#7f8c8d',
//     textAlign: 'center',
//     marginBottom: 40,
//     paddingHorizontal: 30,
//   },
//   button: {
//     backgroundColor: '#3498db',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 30,
//     width: '80%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default Welcome;

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

const { width } = Dimensions.get('window');

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const Welcome = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const WELCOME_IMAGE_URL = 'https://www.moneypatrol.com/moneytalk/wp-content/uploads/2023/06/budget358.png';
  const APP_LOGO_URL = 'https://www.expanseft.com/img/touch_fingerprints.png';

  const getResponsiveFontSize = () => {
    if (width <= 428) return 24;
    if (width <= 1000) return 28;
    return 32;
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: WELCOME_IMAGE_URL }} style={styles.welcomeImage} resizeMode="cover" />
      <Image source={{ uri: APP_LOGO_URL }} style={styles.logo} resizeMode="contain" />

      <Text style={[styles.title, { fontSize: getResponsiveFontSize() }]}>
        Quick Pay
      </Text>

      <Text style={styles.subtitle}>Fast. Simple. Secure</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f6ff', // soft light blue gradient-like
    padding: width < 500 ? 16 : 24,
  },
  welcomeImage: {
    width: width * 0.9,
    height: width < 500 ? 220 : 260,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 30,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 20,
  },
title: {
  fontWeight: '700',
  color: '#1a1a1a', // dark charcoal
  textAlign: 'center',
  textShadowColor: 'rgba(0, 0, 0, 0.1)',
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 2,
  marginBottom: 10,
  letterSpacing: 0.5,
},
subtitle: {
  fontSize: 16,
  color: '#7d7d7d', // muted grey-blue
  textAlign: 'center',
  marginBottom: 40,
  paddingHorizontal: 30,
  letterSpacing: 1,
  textTransform: 'uppercase',
},
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#007BFF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Welcome;

