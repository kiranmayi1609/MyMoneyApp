// import React from 'react';
// import { ScrollView, Text, View, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import CardComponent from '../components/CardComponent';

// const HomeScreen = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* 💳 Mobile Pay Cards Section */}
//       <View style={styles.cardsSection}>
//         <Text style={styles.sectionTitle}>My Wallet</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <CardComponent bank="Dansk Bank" cardNumber="**** **** **** 3456" type="Visa" />
//           <CardComponent bank="Axis Bank" cardNumber="**** **** **** 9876" type="Mastercard" />
//           <CardComponent bank="Kotak Bank" cardNumber="**** **** **** 1122" type="RuPay" />
//         </ScrollView>
//       </View>

//       {/* 💸 Money Transfers */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Money Transfers</Text>
//         <View style={styles.row}>
//           <TransferIcon name="phone" label="To Mobile" />
//           <TransferIcon name="account-balance" label="To Bank" />
//           <TransferIcon name="campaign" label="Refer & Earn" />
//           <TransferIcon name="account-balance-wallet" label="Check Balance" />
//         </View>
//       </View>

//       {/* 🔌 Recharge */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Recharge & Bills</Text>
//         <View style={styles.row}>
//           <TransferIcon name="bolt" label="Recharge" />
//           <TransferIcon name="home" label="Rent" />
//           <TransferIcon name="lightbulb" label="Electricity" />
//           <TransferIcon name="payments" label="Loan EMI" />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const TransferIcon = ({ name, label }: { name: string; label: string }) => (
//   <View style={styles.iconContainer}>
//     <View style={styles.iconCircle}>
//       <Icon name={name} size={24} color="white" />
//     </View>
//     <Text style={styles.iconLabel}>{label}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     flex: 1,
//   },
//   section: {
//     marginVertical: 20,
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 12,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   iconContainer: {
//     alignItems: 'center',
//     width: 70,
//   },
//   iconCircle: {
//     backgroundColor: '#7646FF',
//     padding: 16,
//     borderRadius: 40,
//     marginBottom: 6,
//   },
//   iconLabel: {
//     fontSize: 12,
//     textAlign: 'center',
//   },
//   cardsSection: {
//     paddingTop: 20,
//     paddingHorizontal: 20,
//   },
// });

// export default HomeScreen;



import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Dummy Card Component
const CardComponent = ({ bank, cardNumber, type }: { bank: string; cardNumber: string; type: string }) => (
  <View style={styles.card}>
    <Text style={styles.cardBank}>{bank}</Text>
    <Text style={styles.cardNumber}>{cardNumber}</Text>
    <Text style={styles.cardType}>{type}</Text>
  </View>
);

const TransferIcon = ({ name, label }: { name: string; label: string }) => (
  <View style={styles.iconContainer}>
    <View style={styles.iconCircle}>
      <Icon name={name} size={24} color="white" />
    </View>
    <Text style={styles.iconLabel}>{label}</Text>
  </View>
);

const HomeScreen = () => {
  const [profile, setProfile] = useState<{ name: string; image: string | null } | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const loadProfile = async () => {
      const data = await AsyncStorage.getItem('profile');
      if (data) {
        const parsed = JSON.parse(data);
        setProfile({ name: parsed.name, image: parsed.image ?? null });
      }
    };
    loadProfile();
  }, []);

  const handleMenuPress = (option: string) => {
    switch (option) {
      case 'Profile':
        navigation.navigate('ProfileForm' as never);
        break;
      case 'Settings':
        Alert.alert('Settings', 'Settings clicked');
        break;
      case 'Logout':
        AsyncStorage.removeItem('profile');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' as never }],
        });
        break;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      {profile && (
        <View style={styles.profileContainer}>
          {profile.image ? (
            <Image source={{ uri: profile.image }} style={styles.image} />
          ) : (
            <View style={[styles.image, styles.placeholderImage]}>
              <Text style={{ color: '#555' }}>No Image</Text>
            </View>
          )}
          <Text style={styles.welcome}>Welcome, {profile.name}</Text>

          <View style={styles.menu}>
            {['Profile', 'Settings', 'Logout'].map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.menuItem}
                onPress={() => handleMenuPress(item)}
              >
                <Text style={styles.menuText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* My Wallet */}
      <View style={styles.cardsSection}>
        <Text style={styles.sectionTitle}>My Wallet</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CardComponent bank="Dansk Bank" cardNumber="**** **** **** 3456" type="Visa" />
          <CardComponent bank="Axis Bank" cardNumber="**** **** **** 9876" type="Mastercard" />
          <CardComponent bank="Kotak Bank" cardNumber="**** **** **** 1122" type="RuPay" />
        </ScrollView>
      </View>

      {/* Money Transfers */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Money Transfers</Text>
        <View style={styles.row}>
          <TransferIcon name="phone" label="To Mobile" />
          <TransferIcon name="account-balance" label="To Bank" />
          <TransferIcon name="campaign" label="Refer & Earn" />
          <TransferIcon name="account-balance-wallet" label="Check Balance" />
        </View>
      </View>

      {/* Recharge & Bills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recharge & Bills</Text>
        <View style={styles.row}>
          <TransferIcon name="bolt" label="Recharge" />
          <TransferIcon name="home" label="Rent" />
          <TransferIcon name="lightbulb" label="Electricity" />
          <TransferIcon name="payments" label="Loan EMI" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImage: {
    backgroundColor: '#eee',
  },
  menu: {
    marginTop: 10,
    width: '80%',
  },
  menuItem: {
    padding: 10,
    backgroundColor: '#ecf0f1',
    marginBottom: 10,
    borderRadius: 8,
  },
  menuText: {
    fontSize: 16,
    textAlign: 'center',
  },
  cardsSection: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
    width: 70,
  },
  iconCircle: {
    backgroundColor: '#7646FF',
    padding: 16,
    borderRadius: 40,
    marginBottom: 6,
  },
  iconLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    width: 160,
  },
  cardBank: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cardNumber: {
    color: 'white',
    marginVertical: 10,
    fontSize: 14,
  },
  cardType: {
    color: 'white',
    fontSize: 12,
    alignSelf: 'flex-end',
  },
});

export default HomeScreen;

