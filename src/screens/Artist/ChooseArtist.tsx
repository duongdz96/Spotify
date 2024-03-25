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

import Textarea from 'react-native-textarea';
import IconSearch from '~/resources/Icons/IconBottomBar/IconSearch';
import getImage from '~/libs/getImage';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const ChooseArtist = (): JSX.Element => {
  const { t } = useTranslation();
  const theme = useAppTheme();
  const navigation = useNavigation<RootNavigatorNavProps>();
  const { openModal } = useModalManager();
  const resultContext = usePreferenceContext();
  const topInsets = useTopInset();
  const [search, setSearch] = useState('');
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
        paddingHorizontal: 24,
        paddingTop: Platform.select({
          ios: 0,
          android: 42,
        })
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 24,
        }}>

          <Text style={{
            fontWeight: '700',
            fontSize: 16,
            textAlign: 'center',
            color: '#ffffff',
          }}>{t('Choose 3 or more artists you like')}</Text>
          <View />
        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          height: 42,
          paddingHorizontal: 8,
          borderRadius: 5,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#ffffff',
        }}>
          <IconSearch />
          <Textarea
            containerStyle={{
              backgroundColor: '#ffffff',
              height: 42,
              paddingHorizontal: 8,
              borderRadius: 5,
            }}
            onChangeText={(e: any) => setSearch(e)}
            underlineColorAndroid={'transparent'}
            value={search}
            placeholder={'Search'}
            placeholderTextColor={'#000000'}
            style={{ color: '#000000' }}
          />
        </View>
        <>
          <ScrollView contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            paddingBottom: 30,
          }}
            showsVerticalScrollIndicator={false}>
            {imageData.map((src, index) => (
              <TouchableOpacity
                key={index}
                style={{ width: '33.33%', aspectRatio: 1, marginVertical: 15, }}
                onPress={() => navigation.navigate('ChoosePodCast')}
              >
                <Image source={src.image} style={{ width: 110, height: 110, borderRadius: 75 }} />
                <Text style={{
                  fontWeight: '600',
                  fontSize: 12,
                  textAlign: 'center',
                  color: '#ffffff',
                  // marginBottom: 12,
                }}>{src.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </>
      </View>
    </SafeAreaView>
  );
};

export default ChooseArtist;

const styles = StyleSheet.create({});
