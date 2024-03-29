import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';

import IconLogo from '~/resources/Icons/IconLogo';
import { useAppTheme } from '~/resources/theme';

import { ANDROID_INTER_SPLASH, IOS_INTER_SPLASH } from '@env';
import i18n from 'i18next';
import { RootNavigatorNavProps } from '~/navigation/RootNavigator';

const SplashPage = (): JSX.Element => {
  const navigation = useNavigation<RootNavigatorNavProps>();
  const theme = useAppTheme();
  const { t } = useTranslation();

  const [isFirst, setIsFirst] = useState(false);

  useEffect(() => {
    // AsyncStorage.removeItem('isFirstOpen');
    // AsyncStorage.setItem('isFirstOpen', 'true');

    const loadPurchase = async () => {
      const isFirstState = Boolean(await AsyncStorage.getItem('isFirstOpen'));
      setIsFirst(isFirstState);
    };
    loadPurchase();
  }, []);

  const styleContainer = useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        backgroundColor: theme.colors.backgroundColor,
      },
      styles.viewContainer,
    ],
    [theme],
  );

  const styleAppName = useMemo<StyleProp<TextStyle>>(
    () => [
      {
        color: '#1ED760',
        marginTop: 100,
        fontWeight: '700',
        fontFamily: 'SFProDisplay-Medium',
        fontSize: 35,
        textAlign: 'center',
      },
    ],
    [theme],
  );

  useEffect(() => {
    const loadLanguage = async () => {
      const language = await AsyncStorage.getItem('languageApp');
      if (language) {
        i18n.changeLanguage(language);
      }
    };
    loadLanguage();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!isFirst) {
        navigation.navigate('AuthenPage');
      } else {
        navigation.navigate('BottomTabNavigator', {
          screen: 'HomeNavigator',
        });
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styleContainer}>
      {/* <StatusBar translucent backgroundColor='transparent' /> */}
      <View style={styles.viewLogo}>
        <IconLogo/>
        <Text style={styleAppName}>
          {t(`Spotify`)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLogo: { justifyContent: 'center', alignItems: 'center', marginTop: 150},
  loading: { position: 'absolute', bottom: 100 },
});

export default SplashPage;
