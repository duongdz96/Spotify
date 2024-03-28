import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';

import LoginPage from '~/screens/Authentication/LoginPage';
import SignUpPage from '~/screens/Authentication/SignUpPage';
import NotificationPage from '~/screens/NotificationPage/NotificationPage';
import OnBoardingPage from '~/screens/OnBoardingPage/OnBoardingPage';
import SelectLanguageOnboardingPage from '~/screens/OnBoardingPage/SelectLanguageOnboardingPage';
import SelectLanguagePage from '~/screens/SettingPage/SelectLanguagePage';
import SettingPage from '~/screens/SettingPage/SettingPage';
import SplashPage from '~/screens/SplashPage/SplashPage';
import TestPage from '~/screens/TestPage';
import WebViewPage from '~/screens/WebViewPage';
import AuthenPage from '~/screens/Authentication/AuthenPage';

import BottomTabNavigator, {
  BottomTabNavigatorProps,
} from './BottomTabNavigator';
import Password from '~/screens/Authentication/Password';
import Gender from '~/screens/Authentication/Gender';
import Name from '~/screens/Authentication/Name';
import ChooseArtist from '~/screens/Artist/ChooseArtist';
import ChoosePodCast from '~/screens/Artist/ChoosePodcast';
import SearchPage from '~/screens/LibraryPage/SearchPage';

export type RootNavigatorProps = {
  navigate(arg0: string): unknown;
  SplashPage: undefined;
  TestPage: undefined;
  BottomTabNavigator: NavigatorScreenParams<BottomTabNavigatorProps>;
  OnBoardingPage: undefined;
  SettingPage: undefined;
  LoginPage: undefined;
  SignUpPage: undefined;
  SelectLanguagePage: undefined;
  NotificationPage: undefined;
  SelectLanguageOnboardingPage: undefined;
  WebViewPage: { uri: string } | undefined;
  AuthenPage: undefined;
  Password: undefined;
  Gender: undefined;
  Name: undefined;
  ChooseArtist: undefined;
  ChoosePodCast: undefined;
  SearchPage: undefined;
};

export type RootNavigatorNavProps = StackNavigationProp<RootNavigatorProps>;

export type BottomTabNavigatorNavProps = StackNavigationProp<
  RootNavigatorProps,
  'BottomTabNavigator'
>;

export type RootRouteProps<RouteName extends keyof RootNavigatorProps> =
  RouteProp<RootNavigatorProps, RouteName>;

const StackNavigator = createStackNavigator<RootNavigatorProps>();
const screenOptions = { headerShown: false };

const RootNavigator = (): JSX.Element => {
  return (
    <StackNavigator.Navigator
      screenOptions={screenOptions}
      initialRouteName='SplashPage'>
      <StackNavigator.Screen name='SplashPage' component={SplashPage} />
      <StackNavigator.Screen name='TestPage' component={TestPage} />
      <StackNavigator.Screen
        name='BottomTabNavigator'
        component={BottomTabNavigator}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='OnBoardingPage'
        component={OnBoardingPage}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='SelectLanguageOnboardingPage'
        component={SelectLanguageOnboardingPage}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='SettingPage'
        component={SettingPage}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='NotificationPage'
        component={NotificationPage}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='LoginPage'
        component={LoginPage}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='SignUpPage'
        component={SignUpPage}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='SelectLanguagePage'
        component={SelectLanguagePage}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='WebViewPage'
        component={WebViewPage}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='AuthenPage'
        component={AuthenPage}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='Password'
        component={Password}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='Gender'
        component={Gender}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='Name'
        component={Name}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='ChooseArtist'
        component={ChooseArtist}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='ChoosePodCast'
        component={ChoosePodCast}
        options={{ gestureEnabled: false }}
      />
      <StackNavigator.Screen
        name='SearchPage'
        component={SearchPage}
        options={{ gestureEnabled: false }}
      />
    </StackNavigator.Navigator>
  );
};

export default RootNavigator;
