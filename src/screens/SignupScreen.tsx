// // SignupScreen.tsx
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
// import { auth, db } from '../firebase';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../types/navigation';

// type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

// const SignupScreen: React.FC<Props> = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleSignup = async () => {
//   if (!email || !password || !name || !phone) {
//     Alert.alert('Please fill all fields');
//     return;
//   }

//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const uid = userCredential.user.uid;

//     await setDoc(doc(db, 'users', uid), {
//       email,
//       name,
//       phone,
//       cards: [],
//     });

//     Alert.alert('Registration Successful');
//     navigation.navigate('Login');
//   } catch (error: any) {
//     console.error('Signup failed:', error); // 👈 for debugging
//     Alert.alert('Signup Error', error.message || 'An unexpected error occurred');
//   }
// };


//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Sign Up</Text>
//       <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
//       <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} style={styles.input} />
//       <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" autoCapitalize="none" />
//       <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
//       <TouchableOpacity style={styles.button} onPress={handleSignup}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.link}>Already have an account? Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 6 },
//   button: { backgroundColor: '#4caf50', padding: 12, borderRadius: 6, alignItems: 'center' },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   link: { color: '#2196f3', marginTop: 10, textAlign: 'center' },
// });

// export default SignupScreen;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../types/navigation';

// type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

// const SignupScreen: React.FC<Props> = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleSignup = async () => {
//     if (!email || !password || !name || !phone) {
//       Alert.alert('Please fill all fields');
//       return;
//     }

//     try {
//       const existingData = await AsyncStorage.getItem('users');
//       const users = existingData ? JSON.parse(existingData) : [];

//       const emailExists = users.some((user: any) => user.email === email);
//       if (emailExists) {
//         Alert.alert('Email already exists. Please login instead.');
//         return;
//       }

//       const newUser = { email, password, name, phone, cards: [] };
//       users.push(newUser);
//       await AsyncStorage.setItem('users', JSON.stringify(users));

//       Alert.alert('Signup successful! You can now login.');
//       navigation.navigate('Login');
//     } catch (error) {
//       console.error('Signup error:', error);
//       Alert.alert('Error', 'Something went wrong during signup');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Sign Up</Text>
//       <TextInput
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Phone"
//         value={phone}
//         onChangeText={setPhone}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSignup}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.link}>Already have an account? Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#fff' },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 6,
//   },
//   button: {
//     backgroundColor: '#4caf50',
//     padding: 12,
//     borderRadius: 6,
//     alignItems: 'center',
//   },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   link: { color: '#2196f3', marginTop: 10, textAlign: 'center' },
// });

// export default SignupScreen;


//New Design 
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = (phone: string) => /^[0-9]{10}$/.test(phone);

  const calculateAge = (birthDate: Date): number => {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    return m < 0 || (m === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;
  };

  const handleSignup = async () => {
    if (!name || !email || !phone || !password || !dob) {
      Alert.alert('All fields are required');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Invalid Email');
      return;
    }

    if (!isValidPhone(phone)) {
      Alert.alert('Phone number must be 10 digits');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Password must be at least 6 characters');
      return;
    }

    const age = calculateAge(dob);
    if (age < 18) {
      Alert.alert('You must be at least 18 years old to use this app');
      return;
    }

    const userData = { name, email, phone, password, dob: dob.toISOString() };
    try {
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      Alert.alert('Signup Successful');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Signup Error', 'Failed to save data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Phone" keyboardType="numeric" value={phone} onChangeText={setPhone} style={styles.input} />
      <TextInput placeholder="Email" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />

      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
        <Text>{dob ? dob.toDateString() : 'Select Date of Birth'}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          value={dob || new Date(2000, 0, 1)}
          onChange={(_, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDob(selectedDate);
          }}
          maximumDate={new Date()}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 10, borderRadius: 8 },
  button: { backgroundColor: '#2196f3', padding: 12, borderRadius: 6, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { color: '#4caf50', marginTop: 10, textAlign: 'center' },
});

export default SignupScreen;
