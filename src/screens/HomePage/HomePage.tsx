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
import IconNoti from '~/resources/Icons/IconNoti';
import IconTime from '~/resources/Icons/IconTimes';
import IconSetting from '~/resources/Icons/IconSetting';
import getImage from '~/libs/getImage';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const HomePage = (): JSX.Element => {
  const { t } = useTranslation();
  const theme = useAppTheme();
  const navigation = useNavigation<RootNavigatorNavProps>();
  const { openModal } = useModalManager();
  const resultContext = usePreferenceContext();
  const topInsets = useTopInset();
  const imageSource = getImage('avatar');
  const imageData = [
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
    { name: 'Billie Eilish', image: imageSource },
  ];
  const dataReview = [
    { image: getImage('topSong'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
    { image: getImage('topSong1'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
    { image: getImage('topSong2'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
  ]

  const randomIndex = Math.floor(Math.random() * dataReview.length);
  const randomItem = dataReview[randomIndex];

  const styleContainer = useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111111',
      },
    ],
    [theme],
  );
  return (
    <SafeAreaView style={styleContainer}>
      <View style={{
        flex: 1,
        width: '100%',
        paddingHorizontal: 27,
        paddingTop: Platform.select({
          ios: 0,
          android: 70,
        })
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // alignItems: 'flex-start',
        }}>
          <Text style={{
            fontSize: 19,
            fontWeight: '700',
            color: '#FFFFFF',
            marginRight: 121,
          }}>Recent played</Text>
          <IconNoti />
          <IconTime />
          <IconSetting />
        </View>
        <View style={{
          marginTop: 17,
          justifyContent: 'space-between',
        }}>
          <ScrollView>
            <>
              <ScrollView showsHorizontalScrollIndicator={false}>
                <FlatList
                  horizontal={true}
                  data={imageData}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={{ marginRight: 17 }} activeOpacity={1}>
                      <Image source={item.image} style={{ width: 105, height: 105 }} />
                      <Text style={{
                        // textAlign: 'center',
                        fontSize: 12,
                        fontWeight: '600',
                        color: '#ffffff',
                        paddingTop: 1,
                      }}>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                />
              </ScrollView>
            </>

            <TouchableOpacity style={{
              marginTop: 21,
              flexDirection: 'row',
            }}
              key={randomIndex}
              activeOpacity={1}
            >
              <Image source={randomItem.image} style={{ width: 58, height: 58, borderRadius: 2, }} />
              <View style={{
                flexDirection: 'column',
                paddingHorizontal: 10,
              }}>
                <Text style={{
                  color: '#9C9C9C',
                  fontSize: 10,
                  fontWeight: '400',
                  // textAlign: 'center',
                }}>{randomItem.hasTag}</Text>
                <Text style={{
                  fontSize: 26,
                  fontWeight: '600',
                  color: '#ffffff',
                }}>{randomItem.des}</Text>
              </View>
            </TouchableOpacity>
            <View style={{
              marginTop: 16,
            }}>
              <FlatList
                horizontal={true}
                data={imageData.slice(0, 2)}
                renderItem={({ item }) => (
                  <TouchableOpacity style={{ marginRight: 17 }} activeOpacity={1}>
                    <Image source={item.image} style={{ width: 153, height: 155 }} />
                    <Text style={{

                      fontSize: 13.5,
                      fontWeight: '600',
                      color: '#ffffff',
                      paddingTop: 1,
                      lineHeight: 28,
                    }}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={{
              marginTop: 15,
            }}>
              <Text style={{
                fontWeight: '600',
                fontSize: 24,
                color: '#ffffff',
              }}>Editor's picks</Text>
              <>
                <ScrollView style={{ marginTop: 10, }}>
                  <FlatList
                    horizontal={true}
                    data={imageData}
                    renderItem={({ item }) => (
                      <TouchableOpacity style={{ marginRight: 17 }} activeOpacity={1}>
                        <Image source={item.image} style={{ width: 154, height: 154 }} />
                        <Text style={{
                          // textAlign: 'center',
                          fontSize: 12,
                          fontWeight: '600',
                          color: '#ffffff',
                          paddingTop: 1,
                        }}>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </ScrollView>
              </>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
