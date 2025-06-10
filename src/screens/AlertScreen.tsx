// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';

// const alerts = [
//   { id: '1', title: 'Loan Approved', message: 'Your personal loan has been approved.' },
//   { id: '2', title: 'Electricity Bill Due', message: 'Your bill of 1,250 is due tomorrow.' },
//   { id: '3', title: 'Offer Alert', message: 'Get 5% cashback on recharges this week.' },
// ];

// const AlertsScreen = () => {
//   return (
//     <FlatList
//       data={alerts}
//       keyExtractor={(item) => item.id}
//       contentContainerStyle={styles.container}
//       renderItem={({ item }) => (
//         <View style={styles.card}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text>{item.message}</Text>
//         </View>
//       )}
//     />
//   );
// };

// export default AlertsScreen;

// const styles = StyleSheet.create({
//   container: { padding: 16 },
//   card: {
//     padding: 16,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     marginBottom: 12,
//     elevation: 2,
//   },
//   title: {
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
// });

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Alert = {
  id: string;
  title: string;
  message: string;
  isRead: boolean;
  timestamp: string;
  type: 'success' | 'warning' | 'info' | 'payment';
};

const AlertsScreen = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    { 
      id: '1', 
      title: 'Loan Approved', 
      message: 'Your personal loan of ₹50,000 has been approved.', 
      isRead: false, 
      timestamp: '10 min ago',
      type: 'success'
    },
    { 
      id: '2', 
      title: 'Electricity Bill Due', 
      message: 'Your bill of ₹1,250 is due tomorrow.', 
      isRead: false, 
      timestamp: '1 hour ago',
      type: 'warning'
    },
    { 
      id: '3', 
      title: 'Offer Alert', 
      message: 'Get 5% cashback on mobile recharges this week.', 
      isRead: true, 
      timestamp: '3 hours ago',
      type: 'info'
    },
    { 
      id: '4', 
      title: 'Payment Received', 
      message: '₹5,000 received from John Doe.', 
      isRead: true, 
      timestamp: 'Yesterday',
      type: 'payment'
    },
  ]);

  const unreadCount = alerts.filter(alert => !alert.isRead).length;

  const markAsRead = (id: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? {...alert, isRead: true} : alert
    ));
  };

  const getIconAndColor = (type: string) => {
    switch(type) {
      case 'success':
        return { icon: 'check-circle', color: '#4CAF50' };
      case 'warning':
        return { icon: 'warning', color: '#FF9800' };
      case 'payment':
        return { icon: 'account-balance-wallet', color: '#2196F3' };
      default:
        return { icon: 'info', color: '#9C27B0' };
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with unread count */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Alerts</Text>
        {unreadCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unreadCount} unread</Text>
          </View>
        )}
      </View>

      {/* Alerts list */}
      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => markAsRead(item.id)}
            activeOpacity={0.8}
          >
            <View style={[
              styles.card, 
              !item.isRead && styles.unreadCard,
              { borderLeftColor: getIconAndColor(item.type).color }
            ]}>
              <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                  <Icon 
                    name={getIconAndColor(item.type).icon} 
                    size={20} 
                    color={getIconAndColor(item.type).color} 
                  />
                </View>
                <Text style={[
                  styles.title,
                  !item.isRead && styles.unreadTitle
                ]}>
                  {item.title}
                </Text>
                {!item.isRead && <View style={styles.unreadDot} />}
              </View>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  badge: {
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 16,
  },
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  unreadCard: {
    backgroundColor: '#f9f9ff',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconContainer: {
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontWeight: '600',
    color: '#555',
    fontSize: 16,
  },
  unreadTitle: {
    color: '#222',
    fontWeight: '700',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
  },
  message: {
    color: '#666',
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
  timestamp: {
    color: '#999',
    fontSize: 12,
  },
});

export default AlertsScreen;