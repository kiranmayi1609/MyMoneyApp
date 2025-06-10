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

// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../types/navigation';

// const { width } = Dimensions.get('window');

// type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

// const Welcome = () => {
//   const navigation = useNavigation<WelcomeScreenNavigationProp>();

//   const WELCOME_IMAGE_URL = 'https://www.moneypatrol.com/moneytalk/wp-content/uploads/2023/06/budget358.png';
//   const APP_LOGO_URL = 'https://www.expanseft.com/img/touch_fingerprints.png';

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
//         Quick Pay
//       </Text>

//       <Text style={styles.subtitle}>Fast. Simple. Secure</Text>

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
//     justifyContent: 'center',
//     backgroundColor: '#f2f6ff', // soft light blue gradient-like
//     padding: width < 500 ? 16 : 24,
//   },
//   welcomeImage: {
//     width: width * 0.9,
//     height: width < 500 ? 220 : 260,
//     borderRadius: 20,
//     marginTop: 20,
//     marginBottom: 30,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//       },
//       android: {
//         elevation: 6,
//       },
//     }),
//   },
//   logo: {
//     width: 90,
//     height: 90,
//     marginBottom: 20,
//   },
// title: {
//   fontWeight: '700',
//   color: '#1a1a1a', // dark charcoal
//   textAlign: 'center',
//   textShadowColor: 'rgba(0, 0, 0, 0.1)',
//   textShadowOffset: { width: 0, height: 2 },
//   textShadowRadius: 2,
//   marginBottom: 10,
//   letterSpacing: 0.5,
// },
// subtitle: {
//   fontSize: 16,
//   color: '#7d7d7d', // muted grey-blue
//   textAlign: 'center',
//   marginBottom: 40,
//   paddingHorizontal: 30,
//   letterSpacing: 1,
//   textTransform: 'uppercase',
// },
//   button: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 14,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     width: '80%',
//     alignItems: 'center',
//     ...Platform.select({
//       ios: {
//         shadowColor: '#007BFF',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//       },
//       android: {
//         elevation: 6,
//       },
//     }),
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

// export default Welcome;


import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Responsive design utilities
const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const Welcome = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const WELCOME_IMAGE_URL = 'https://www.moneypatrol.com/moneytalk/wp-content/uploads/2023/06/budget358.png';
  const APP_LOGO_URL = 'https://www.expanseft.com/img/touch_fingerprints.png';

  // Responsive font sizes
  const getResponsiveFontSize = (baseSize: number) => {
    if (width <= 428) return moderateScale(baseSize);
    if (width <= 1000) return moderateScale(baseSize + 2);
    return moderateScale(baseSize + 4);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Decorative background elements */}
      <View style={styles.decorativeCircleLarge} />
      <View style={styles.decorativeCircleMedium} />
      <View style={styles.decorativeCircleSmall} />

      {/* Main content */}
      <View style={styles.contentContainer}>
        <Image 
          source={{ uri: APP_LOGO_URL }} 
          style={[
            styles.logo, 
            { 
              width: moderateScale(90), 
              height: moderateScale(90),
              marginBottom: verticalScale(20)
            }
          ]} 
          resizeMode="contain" 
        />

        <View style={styles.textContainer}>
          <Text style={[
            styles.title, 
            { 
              fontSize: getResponsiveFontSize(24),
              marginBottom: verticalScale(10)
            }
          ]}>
            Quick Pay
          </Text>

          <Text style={[
            styles.subtitle,
            {
              fontSize: moderateScale(14),
              marginBottom: verticalScale(40),
              paddingHorizontal: moderateScale(30)
            }
          ]}>
            Fast. Simple. Secure
          </Text>
        </View>

        <Image 
          source={{ uri: WELCOME_IMAGE_URL }} 
          style={[
            styles.welcomeImage, 
            { 
              width: width * 0.9,
              height: width < 500 ? verticalScale(220) : verticalScale(260),
              borderRadius: moderateScale(20),
              marginBottom: verticalScale(30)
            }
          ]} 
          resizeMode="cover" 
        />

        <View style={styles.featuresContainer}>
          {[
            { icon: 'bolt', text: 'Instant Transfers' },
            { icon: 'security', text: 'Bank-Level Security' },
            { icon: 'qr-code', text: 'QR Payments' }
          ].map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Icon 
                name={feature.icon} 
                size={moderateScale(24)} 
                color="#007BFF" 
                style={styles.featureIcon}
              />
              <Text style={[styles.featureText, { fontSize: moderateScale(12) }]}>
                {feature.text}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={[
            styles.button, 
            { 
              paddingVertical: verticalScale(14),
              paddingHorizontal: moderateScale(40),
              borderRadius: moderateScale(25),
              width: '80%',
              marginTop: verticalScale(20)
            }
          ]} 
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={[
            styles.buttonText, 
            { 
              fontSize: moderateScale(16)
            }
          ]}>
            Get Started
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={[
            styles.loginText,
            { fontSize: moderateScale(14) }
          ]}>
            Already have an account? <Text style={styles.loginHighlight}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Global responsive styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f6ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(20),
  },
  decorativeCircleLarge: {
    position: 'absolute',
    width: scale(300),
    height: scale(300),
    borderRadius: scale(150),
    backgroundColor: 'rgba(0, 123, 255, 0.05)',
    top: -scale(100),
    right: -scale(100),
  },
  decorativeCircleMedium: {
    position: 'absolute',
    width: scale(200),
    height: scale(200),
    borderRadius: scale(100),
    backgroundColor: 'rgba(0, 123, 255, 0.05)',
    bottom: -scale(80),
    left: -scale(80),
  },
  decorativeCircleSmall: {
    position: 'absolute',
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
    backgroundColor: 'rgba(0, 123, 255, 0.05)',
    top: '30%',
    left: -scale(30),
  },
  contentContainer: {
    width: '90%',
    alignItems: 'center',
    zIndex: 1,
  },
  logo: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  title: {
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitle: {
    color: '#7d7d7d',
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  welcomeImage: {
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
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginVertical: verticalScale(10),
  },
  featureItem: {
    alignItems: 'center',
    margin: moderateScale(10),
    width: moderateScale(100),
  },
  featureIcon: {
    marginBottom: verticalScale(5),
  },
  featureText: {
    color: '#555',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
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
    fontWeight: '600',
  },
  loginLink: {
    marginTop: verticalScale(15),
  },
  loginText: {
    color: '#7d7d7d',
  },
  loginHighlight: {
    color: '#007BFF',
    fontWeight: '600',
  },
});

export default Welcome;