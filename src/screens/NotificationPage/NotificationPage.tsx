import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import ExitApp from 'react-native-exit-app';

import { useTopInset } from '~/hooks/useInset';
import useModalManager from '~/hooks/useModalManager';
import usePreferenceContext from '~/hooks/usePreferenceContext';

import { useAppTheme } from '~/resources/theme';

import { RootNavigatorNavProps } from '~/navigation/RootNavigator';
import IconAdd from '~/resources/Icons/IconAdd';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const NotificationPage = (): JSX.Element => {
  const { t } = useTranslation();
  const theme = useAppTheme();
  const navigation = useNavigation<RootNavigatorNavProps>();
  const { openModal } = useModalManager();
  const resultContext = usePreferenceContext();
  const topInsets = useTopInset();

  useFocusEffect(
    React.useCallback(() => {
      let backButtonPressCount = 0;
      let backButtonPressTimer: ReturnType<typeof setTimeout> = null;

      const onBackPress = () => {
        if (backButtonPressCount === 1) {
          ExitApp.exitApp();
          return true;
        } else {
          backButtonPressCount++;
          backButtonPressTimer = setTimeout(() => {
            backButtonPressCount = 0;
            clearTimeout(backButtonPressTimer);
          }, 2000);
          return true;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        backHandler.remove();
      };
    }, []),
  );

  const styleContainer = useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.backgroundColor,
      },
    ],
    [theme],
  );
  const listBar = [
    { title: 'Playlists' },
    { title: 'Artists' },
    { title: 'Albums' },
    { title: 'Podcasts & shows' }
  ]
  return (
    <SafeAreaView style={styleContainer}>

      <View style={{
        flex: 1,
        width: '100%',
        paddingHorizontal: 12,
        paddingTop: Platform.select({
          ios: 0,
          android: 80,
        })
      }}>
        <View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '100%',
            height: 55,
            alignItems: 'center',
          }}>
            <Image source={require('~/resources/images/avatar.png')} style={{ marginRight: 5 }} />
            <Text style={{
              fontSize: 24,
              fontWeight: '600',
              color: '#FFFFFF',
            }}>Library</Text>

            <View style={{ marginLeft: 'auto' }}>
              <IconAdd />
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            height: 55,
            alignItems: 'center',
            marginBottom: 15,
          }}>
            <>
              <ScrollView>
                <FlatList
                  data={listBar}
                  horizontal={true}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={{ height: 33, borderRadius: 45, borderWidth: 0.6, justifyContent: 'center', alignItems: 'center', borderColor: '#7F7F7F', backgroundColor: '#121212', paddingHorizontal: 19, marginRight: 8 }}>
                      <Text style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#FFFFFF',
                      }}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </ScrollView>
            </>
          </View>
        </View>
        <>
          <ScrollView>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 27.3
            }}>
              <Text style={{
                fontSize: 12,
                fontWeight: '600',
                color: '#ffffff',
              }}>Recent played</Text>
            </View>
          </ScrollView>
        </>
      </View>
    </SafeAreaView>
  );
};

export default NotificationPage;

const styles = StyleSheet.create({});
