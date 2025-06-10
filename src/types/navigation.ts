
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
  ProfileForm: undefined;
  Welcome:undefined;
  
};

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  QR: undefined;
  Alerts: undefined;
  History: undefined;
 
};
export type CardComponentProps = {
  bank: string;
  cardNumber: string;
  type: string;
};
export type RootStackNavigationProp<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};