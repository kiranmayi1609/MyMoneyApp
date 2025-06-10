// src/screens/ProfileFormScreen.tsx
// import React, { useState } from 'react';
// import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { doc, updateDoc } from 'firebase/firestore';
// import { auth, db } from '../firebase';

// const ProfileFormScreen = () => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleSave = async () => {
//     const user = auth.currentUser;
//     if (!user) {
//       Alert.alert('Not logged in');
//       return;
//     }

//     try {
//       const userRef = doc(db, 'users', user.uid);
//       await updateDoc(userRef, { name, phone });
//       Alert.alert('Profile updated');
//     } catch (error: any) {
//       Alert.alert('Failed to update profile', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Update Profile</Text>
//       <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
//       <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} style={styles.input} keyboardType="phone-pad" />
//       <TouchableOpacity style={styles.button} onPress={handleSave}>
//         <Text style={styles.buttonText}>Save</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
//   input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 6 },
//   button: { backgroundColor: '#2196f3', padding: 12, borderRadius: 6, alignItems: 'center' },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
// });

// export default ProfileFormScreen;


// import React, { useState } from 'react';
// import {
//   View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, ScrollView
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../types/navigation';

// type Props = NativeStackScreenProps<RootStackParamList, 'ProfileForm'>;

// type Card = {
//   bank: string;
//   number: string;
// };

// const ProfileScreen: React.FC<Props> = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [cards, setCards] = useState<Card[]>([
//     { bank: '', number: '' },
//   ]);
//   const [imageUrl, setImageUrl] = useState('');

//   const handleAddCard = () => {
//     setCards([...cards, { bank: '', number: '' }]);
//   };

//   const handleCardChange = (index: number, field: keyof Card, value: string) => {
//     const updated = [...cards];
//     updated[index][field] = value;
//     setCards(updated);
//   };

//   const validateCards = () => {
//     return cards.every(card => {
//       if (card.bank === 'Dansk Bank') return card.number.startsWith('23');
//       if (card.bank === 'Nordea Bank') return card.number.startsWith('53');
//       return true;
//     });
//   };

//   const handleSubmit = async () => {
//     if (!name || cards.some(c => !c.bank || !c.number)) {
//       Alert.alert('Please fill all fields');
//       return;
//     }

//     if (!validateCards()) {
//       Alert.alert('Card number does not match bank type');
//       return;
//     }

//     const userProfile = { name, cards, imageUrl };

//     try {
//       await AsyncStorage.setItem('profile', JSON.stringify(userProfile));
//       Alert.alert('Profile saved');
//       navigation.navigate('Dashboard');
//     } catch (err) {
//       Alert.alert('Error saving profile');
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Profile Setup</Text>

//       <TextInput
//         placeholder="Full Name"
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//       />

//       {cards.map((card, index) => (
//         <View key={index} style={styles.cardBlock}>
//           <Text style={styles.cardLabel}>Card {index + 1}</Text>
//           <TextInput
//             placeholder="Bank (Dansk, Nordea, Jysk)"
//             value={card.bank}
//             onChangeText={(text) => handleCardChange(index, 'bank', text)}
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Card Number"
//             value={card.number}
//             onChangeText={(text) => handleCardChange(index, 'number', text)}
//             keyboardType="numeric"
//             style={styles.input}
//           />
//         </View>
//       ))}

//       {cards.length < 5 && (
//         <TouchableOpacity onPress={handleAddCard}>
//           <Text style={styles.addMore}>➕ Add another card</Text>
//         </TouchableOpacity>
//       )}

//       <TextInput
//         placeholder="Image URL (optional)"
//         value={imageUrl}
//         onChangeText={setImageUrl}
//         style={styles.input}
//       />
//       {imageUrl ? (
//         <Image source={{ uri: imageUrl }} style={styles.imagePreview} />
//       ) : null}

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Save Profile</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   input: {
//     borderWidth: 1, borderColor: '#ccc', borderRadius: 6,
//     padding: 10, marginBottom: 10,
//   },
//   button: { backgroundColor: '#4caf50', padding: 12, borderRadius: 6, alignItems: 'center', marginTop: 10 },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   cardBlock: { marginBottom: 10 },
//   cardLabel: { fontWeight: '600', marginBottom: 6 },
//   addMore: { color: '#007bff', marginBottom: 10 },
//   imagePreview: { width: '100%', height: 150, resizeMode: 'cover', marginBottom: 10, borderRadius: 8 },
// });

// export default ProfileScreen;


// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { launchImageLibrary } from 'react-native-image-picker';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const DashboardScreen = ({ navigation }: any) => {
//   const [profile, setProfile] = useState<any>(null);

//   useEffect(() => {
//     const loadProfile = async () => {
//       const stored = await AsyncStorage.getItem('profile');
//       if (stored) setProfile(JSON.parse(stored));
//     };
//     loadProfile();
//   }, []);

//   const handleImagePick = async () => {
//     launchImageLibrary({ mediaType: 'photo' }, async (response) => {
//       if (!response.didCancel && response.assets && response.assets.length > 0) {
//         const newImage = response.assets[0].uri;
//         const updatedProfile = { ...profile, imageUrl: newImage };
//         setProfile(updatedProfile);
//         await AsyncStorage.setItem('profile', JSON.stringify(updatedProfile));
//       }
//     });
//   };

//   if (!profile) return <Text style={styles.text}>Loading...</Text>;

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.headerRow}>
//         <Text style={styles.title}>Welcome, {profile.name}</Text>
//         <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//           <Icon name="menu" size={28} color="black" />
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity onPress={handleImagePick}>
//         <Image
//           source={{ uri: profile.imageUrl || 'https://via.placeholder.com/150' }}
//           style={styles.image}
//         />
//         <Text style={styles.uploadText}>Tap to upload/change photo</Text>
//       </TouchableOpacity>

//       <View style={styles.cardList}>
//         {profile.cards.map((card: any, i: number) => (
//           <View key={i} style={styles.card}>
//             <Text style={styles.cardText}>Bank: {card.bank}</Text>
//             <Text style={styles.cardText}>Card: {card.number}</Text>
//           </View>
//         ))}
//       </View>

//       <View style={styles.verticalMenu}>
//         <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
//           <Text style={styles.menuText}>👤 Profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
//           <Text style={styles.menuText}>⚙️ Settings</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold' },
//   text: { textAlign: 'center', marginTop: 50 },
//   image: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     alignSelf: 'center',
//     marginTop: 10,
//   },
//   uploadText: {
//     textAlign: 'center',
//     color: '#888',
//     marginVertical: 10,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   cardList: { marginTop: 20 },
//   card: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   cardText: { fontSize: 16 },
//   verticalMenu: {
//     marginTop: 30,
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//     paddingTop: 10,
//   },
//   menuItem: {
//     paddingVertical: 10,
//   },
//   menuText: {
//     fontSize: 16,
//   },
// });

// export default DashboardScreen;
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  Platform,
  ScrollView,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'ProfileForm'>;

const ProfileFormScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [cards, setCards] = useState<any[]>([]);

  // Card form
  const [bank, setBank] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES ??
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to your images to select a profile photo.',
            buttonPositive: 'OK',
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn('Permission error:', err);
        return false;
      }
    }
    return true;
  };

  const pickImage = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Cannot access gallery without permission.');
      return;
    }

    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (response) => {
        if (response.didCancel) return;
        if (response.errorCode) {
          Alert.alert('Error', response.errorMessage || 'Unknown error occurred');
          return;
        }
        if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri || null);
        }
      }
    );
  };

  const addCard = () => {
    if (!bank || !cardNumber || !cardType) {
      Alert.alert('Card Info Required', 'Fill all card details.');
      return;
    }
    const newCard = { bank, number: cardNumber, type: cardType };
    setCards((prev) => [...prev, newCard]);
    setBank('');
    setCardNumber('');
    setCardType('');
  };

  const validateAndSave = async () => {
    if (!name || !phone || !dob) {
      Alert.alert('Validation Error', 'Name, phone, and DOB are required.');
      return;
    }

    const birthYear = parseInt(dob.split('-')[0], 10);
    const age = new Date().getFullYear() - birthYear;

    if (age < 18) {
      Alert.alert('Age Restriction', 'You must be at least 18 years old.');
      return;
    }

    const profileData = {
      name,
      phone,
      dob,
      image: imageUri ?? null,
      cards,
    };

    try {
      await AsyncStorage.setItem('profile', JSON.stringify(profileData));
      Alert.alert('Success', 'Profile saved!');
      navigation.replace('Dashboard');
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Could not save profile.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Complete Your Profile</Text>

      <TouchableOpacity onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={{ color: '#888' }}>Tap to select image</Text>
          </View>
        )}
      </TouchableOpacity>

      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={styles.input} />
      <TextInput placeholder="Date of Birth (YYYY-MM-DD)" value={dob} onChangeText={setDob} style={styles.input} />

      <Text style={styles.subHeader}>Add Card</Text>

      <TextInput placeholder="Bank Name" value={bank} onChangeText={setBank} style={styles.input} />
      <TextInput placeholder="Card Number" value={cardNumber} onChangeText={setCardNumber} keyboardType="number-pad" style={styles.input} />
      <TextInput placeholder="Card Type (Visa, MasterCard)" value={cardType} onChangeText={setCardType} style={styles.input} />

      <Button title="Add Card" onPress={addCard} />

      <Text style={styles.subHeader}>Your Cards</Text>
      {cards.length === 0 && <Text style={{ color: '#999', marginBottom: 10 }}>No cards added yet.</Text>}
      {cards.map((card, index) => (
        <View key={index} style={styles.cardBox}>
          <Text>🏦 {card.bank}</Text>
          <Text>💳 {card.number}</Text>
          <Text>📌 {card.type}</Text>
        </View>
      ))}

      <View style={{ marginVertical: 20 }}>
        <Button title="Save Profile" onPress={validateAndSave} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  subHeader: { fontSize: 18, fontWeight: '600', marginTop: 20, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 15,
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },
  cardBox: {
    backgroundColor: '#f7f7f7',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default ProfileFormScreen;





