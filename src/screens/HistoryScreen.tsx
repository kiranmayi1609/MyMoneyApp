// import React from 'react';
// import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';


// const searchItems = [
//   'Mobile Recharge', 'Loan Repayment', 'Rent', 'Free Credit Score',
//   'Refer & Earn ₹200', 'Electricity', 'FASTag', 'Mutual Funds',
// ];

// const SearchScreen = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.header}>Search</Text>

//       <View style={styles.searchBox}>
//         <Ionicons name="search" size={20} color="#aaa" />
//         <TextInput
//           placeholder="Search for 'contacts'"
//           style={styles.input}
//         />
//       </View>

//       <Text style={styles.subHeader}>SEARCH FOR</Text>
//       <View style={styles.chipsContainer}>
//         {searchItems.map((item, index) => (
//           <TouchableOpacity key={index} style={styles.chip}>
//             <Text style={styles.chipText}>{item}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// export default SearchScreen;

// const styles = StyleSheet.create({
//   container: { padding: 16 },
//   header: { fontSize: 20, fontWeight: '600', marginBottom: 16 },
//   searchBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#eee',
//     padding: 10,
//     borderRadius: 12,
//     marginBottom: 24,
//   },
//   input: { marginLeft: 10, flex: 1 },
//   subHeader: { fontWeight: '500', marginBottom: 10 },
//   chipsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 10,
//   },
//   chip: {
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 20,
//     backgroundColor: '#f2f2f2',
//     marginRight: 8,
//     marginBottom: 8,
//   },
//   chipText: { fontSize: 14 },
// });

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const financialData = {
  balance: '₹45,820',
  income: '₹72,500',
  expenses: '₹26,680',
  goals: [
    { name: 'Vacation Fund', progress: 65, target: '₹50,000' },
    { name: 'New Laptop', progress: 30, target: '₹80,000' }
  ],
  recentTransactions: [
    { id: 1, name: 'Mobile Recharge', amount: '₹599', type: 'expense', date: 'Today', icon: 'phone-portrait' },
    { id: 2, name: 'Electricity Bill', amount: '₹1,200', type: 'expense', date: 'Yesterday', icon: 'flash' },
    { id: 3, name: 'Rent Payment', amount: '₹15,000', type: 'expense', date: 'May 1', icon: 'home' },
    { id: 4, name: 'Loan EMI', amount: '₹9,500', type: 'expense', date: 'May 1', icon: 'cash' },
    { id: 5, name: 'Salary', amount: '₹72,500', type: 'income', date: 'May 1', icon: 'wallet' }
  ],
  quickActions: [
    { name: 'Recharge', icon: 'phone-portrait' },
    { name: 'Pay Bill', icon: 'document-text' },
    { name: 'Loan EMI', icon: 'cash' },
    { name: 'Transfer', icon: 'arrow-redo' }
  ]
};

const FinanceOverviewScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Financial Overview</Text>
        <Ionicons name="notifications-outline" size={24} color="#333" />
      </View>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Current Balance</Text>
        <Text style={styles.balanceAmount}>{financialData.balance}</Text>
        
        <View style={styles.incomeExpenseRow}>
          <View style={styles.incomeExpenseItem}>
            <Text style={styles.incomeExpenseLabel}>Income</Text>
            <Text style={[styles.incomeExpenseAmount, styles.incomeText]}>{financialData.income}</Text>
          </View>
          <View style={styles.incomeExpenseItem}>
            <Text style={styles.incomeExpenseLabel}>Expenses</Text>
            <Text style={[styles.incomeExpenseAmount, styles.expenseText]}>{financialData.expenses}</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.quickActionsContainer}>
        {financialData.quickActions.map((action, index) => (
          <TouchableOpacity key={index} style={styles.quickAction}>
            <View style={styles.quickActionIcon}>
              <Ionicons name={action.icon} size={20} color="#4a6bff" />
            </View>
            <Text style={styles.quickActionText}>{action.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Goals */}
      <Text style={styles.sectionTitle}>Your Goals</Text>
      <View style={styles.goalsContainer}>
        {financialData.goals.map((goal, index) => (
          <View key={index} style={styles.goalCard}>
            <View style={styles.goalHeader}>
              <Text style={styles.goalName}>{goal.name}</Text>
              <Text style={styles.goalTarget}>{goal.target}</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${goal.progress}%` }]} />
            </View>
            <Text style={styles.progressText}>{goal.progress}% completed</Text>
          </View>
        ))}
      </View>

      {/* Recent Transactions */}
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <View style={styles.transactionsContainer}>
        {financialData.recentTransactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionItem}>
            <View style={styles.transactionIcon}>
              <Ionicons name={transaction.icon} size={20} color={transaction.type === 'income' ? '#4CAF50' : '#F44336'} />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>{transaction.name}</Text>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
            <Text style={[
              styles.transactionAmount,
              transaction.type === 'income' ? styles.incomeText : styles.expenseText
            ]}>
              {transaction.amount}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  balanceCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  incomeExpenseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  incomeExpenseItem: {
    flex: 1,
  },
  incomeExpenseLabel: {
    fontSize: 14,
    color: '#666',
  },
  incomeExpenseAmount: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 4,
  },
  incomeText: {
    color: '#4CAF50',
  },
  expenseText: {
    color: '#F44336',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  quickAction: {
    alignItems: 'center',
    width: '23%',
  },
  quickActionIcon: {
    backgroundColor: '#ebf0ff',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  goalsContainer: {
    marginBottom: 24,
  },
  goalCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  goalName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  goalTarget: {
    fontSize: 14,
    color: '#666',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#eee',
    borderRadius: 3,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4a6bff',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
  },
  transactionsContainer: {
    marginBottom: 24,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  transactionIcon: {
    backgroundColor: '#f5f5f5',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: '#999',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default FinanceOverviewScreen;