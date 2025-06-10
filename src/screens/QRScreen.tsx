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





import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, Platform } from 'react-native';
import { Camera, useCameraDevice, useCameraFormat, useCodeScanner } from 'react-native-vision-camera';
import type { CameraProps, CodeScanner } from 'react-native-vision-camera';

const QRScannerScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const device = useCameraDevice('back');
  
  // Configure code scanner for QR codes
  const codeScanner: CodeScanner = {
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      if (codes.length > 0) {
        const value = codes[0].value;
        if (value) {
          setScannedData(value);
          //  here when QR is scanned
          console.log('Scanned QR code:', value);
        }
      }
    },
  };

  // Request camera permission
  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Select the best format for the device
  const format = useCameraFormat(device, [
    { videoResolution: { width: 1280, height: 720 } },
    { fps: 60 }
  ]);

  if (hasPermission === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Camera permission not granted. Please enable camera access in settings.
        </Text>
      </View>
    );
  }

  if (!device) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>No compatible camera device found</Text>
      </View>
    );
  }

  // Camera props based on the type you provided
  const cameraProps: CameraProps = {
    device: device,
    style: StyleSheet.absoluteFill,
    isActive: true,
    codeScanner: codeScanner,
    format: format,
    enableZoomGesture: true,
   
    torch: 'off',
    resizeMode: 'cover',
    pixelFormat: 'yuv',
    photo: true,
    video: false,
    audio: false,
    enableFpsGraph: false,
    exposure: 0,
  };

  return (
    <View style={styles.container}>
      <Camera {...cameraProps} />
      
      {/* QR Scanner Overlay */}
      <View style={styles.overlay}>
        <View style={styles.qrFrame} />
        <Text style={styles.instructionText}>
          {scannedData ? `Scanned: ${scannedData}` : 'Align QR code within the frame'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    position: 'relative',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#333',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  permissionText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  qrFrame: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
  instructionText: {
    marginTop: 32,
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default QRScannerScreen;