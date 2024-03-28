import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BackHandler,
  Dimensions,
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
import IconBackFirst from '~/resources/Icons/IconBackFirst';

import Textarea from 'react-native-textarea'
import IconSearch from '~/resources/Icons/IconBottomBar/IconSearch';
import getImage from '~/libs/getImage';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const LibraryPage = (): JSX.Element => {
  const { t } = useTranslation();
  const theme = useAppTheme();
  const navigation = useNavigation<RootNavigatorNavProps>();
  const { openModal } = useModalManager();
  const resultContext = usePreferenceContext();
  const topInsets = useTopInset();
  const [search, setSearch] = useState('');
  // const imageSource = getImage('avatar');
  const imageDataTop = [
    { des: 'Your top genres', image1: getImage('popMusic'), image2: getImage('indieMusic') },
  ];

  const podcasts = [
    { des: 'Popular podcast categories', image1: getImage('popMusic'), image2: getImage('indieMusic') },
  ]

  const browser = [
    { des: 'Browser', image1: getImage('popMusic'), image2: getImage('indieMusic'), image3: getImage('popMusic'), image4: getImage('indieMusic') },
  ]

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
        paddingHorizontal: 18,
        paddingTop: Platform.select({
          ios: 0,
          android: 81,
        })
      }}>
        <View style={{
          flexDirection: 'row',
          position: 'relative',
          paddingBottom: 10,
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: '700',
            color: '#ffffff',
          }}>Search</Text>
        </View>
        <>
          <ScrollView>
            <View style={{
              width: '100%',
              marginBottom: 25,
              paddingHorizontal: 3,
              paddingVertical: 8,
            }}>
              <TouchableOpacity style={{
                flexDirection: 'row',
                width: '100%',
                height: 46,
                backgroundColor: '#ffffff',
                borderRadius: 7,
                alignItems: 'center',
                paddingHorizontal: 15,
              }}
                activeOpacity={1}
                onPress={() => navigation.navigate('SearchPage')}
              >
                <IconSearch style={{ marginRight: 11, }} />
                <Text style={{
                  color: '#131313',
                  fontSize: 16,
                }}>Artists, songs, or podcasts</Text>
              </TouchableOpacity>
            </View>
            {imageDataTop.map((item, index) => (
              <View key={index} >
                <View style={{
                  height: 22,
                  width: 127,
                  marginBottom: 4,
                }}>
                  <Text style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#ffffff',
                  }}>{item.des}</Text>
                </View>
                <View style={{
                  width: '100%',
                  height: 138,
                  flexDirection: 'row',
                  paddingVertical: 15,
                  justifyContent: 'space-between',
                  marginBottom: 23,
                  // paddingHorizontal: 17,
                }}>
                  <TouchableOpacity style={{ flex: 1, marginRight: 6.5, }}>
                    <Image source={item.image1} style={{ width: '100%', height: '100%', borderRadius: 4 }} resizeMode="cover" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1, marginLeft: 6.5 }}>
                    <Image source={item.image2} style={{ width: '100%', height: '100%', borderRadius: 4 }} resizeMode="cover" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            {podcasts.map((item, index) => (
              <View key={index}>
                <View style={{
                  height: 22,
                  width: 127,
                  marginBottom: 4,
                }}>
                  <Text style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#ffffff',
                  }}>{item.des}</Text>
                </View>
                <View style={{
                  width: '100%',
                  height: 138,
                  flexDirection: 'row',
                  paddingVertical: 15,
                  justifyContent: 'space-between',
                  marginBottom: 23,
                }}>
                  <TouchableOpacity style={{ flex: 1, marginRight: 6.5, }}>
                    <Image source={item.image1} style={{ width: '100%', height: '100%', borderRadius: 4 }} resizeMode="cover" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1, marginLeft: 6.5 }}>
                    <Image source={item.image2} style={{ width: '100%', height: '100%', borderRadius: 4 }} resizeMode="cover" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            {browser.map((item, index) => (
              <View key={index}>
                <View style={{
                  height: 22,
                  width: 127,
                  marginBottom: 4,
                }}>
                  <Text style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#ffffff',
                  }}>{item.des}</Text>
                </View>
                <View style={{
                  marginBottom: 23,
                  height: 276,
                  paddingVertical: 15
                }}>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 109,
                    // paddingVertical: 15,
                    marginBottom: 11,
                  }}>
                    <TouchableOpacity style={{ marginRight: 6.5, flex: 1 }}>
                      <Image source={item.image1} style={{ width: '100%', height: '100%', borderRadius: 4 }} resizeMode="cover" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 6.5, flex: 1 }}>
                      <Image source={item.image2} style={{ width: '100%', height: '100%', borderRadius: 4 }} resizeMode="cover" />
                    </TouchableOpacity>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 109,
                    // paddingVertical: 15,
                  }}>
                    <TouchableOpacity style={{ marginRight: 6.5, flex: 1 }}>
                      <Image source={item.image3} style={{ width: '100%', height: '100%', borderRadius: 4 }} resizeMode="cover" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 6.5, flex: 1 }}>
                      <Image source={item.image4} style={{ width: '100%', height: '100%', borderRadius: 4 }} resizeMode="cover" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      </View>
    </SafeAreaView>
  );
};

export default LibraryPage;

const styles = StyleSheet.create({});
