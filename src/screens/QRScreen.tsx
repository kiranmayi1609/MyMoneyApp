// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Camera, useCameraDevices, CameraPermissionStatus } from 'react-native-vision-camera';

// export default function QRScreen() {
//   const [hasPermission, setHasPermission] = useState<boolean | null>(null);
//   const devices = useCameraDevices();
//   const device = devices.back;

//   useEffect(() => {
//     const getPermission = async () => {
//       const status: CameraPermissionStatus = await Camera.getCameraPermissionStatus();

//       if (status === 'authorized') {
//         setHasPermission(true);
//       } else {
//         const newStatus = await Camera.requestCameraPermission();
//         setHasPermission(newStatus === 'authorized');
//       }
//     };

//     getPermission();
//   }, []);

//   if (hasPermission === null) {
//     return (
//       <View style={styles.center}>
//         <Text>Requesting permission...</Text>
//       </View>
//     );
//   }

//   if (!hasPermission) {
//     return (
//       <View style={styles.center}>
//         <Text>Permission denied</Text>
//       </View>
//     );
//   }

//   if (!device) {
//     return (
//       <View style={styles.center}>
//         <Text>Camera not ready</Text>
//       </View>
//     );
//   }

//   return (
//     <Camera
//       style={StyleSheet.absoluteFill}
//       device={device}
//       isActive={true}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });



import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QRScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>QR Screen</Text>
    </View>
  );
};

export default QRScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});