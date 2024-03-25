import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { useAppTheme } from '~/resources/theme';

import { RootNavigatorNavProps } from '~/navigation/RootNavigator';
import IconBack from '~/resources/Icons/IconBack';
import IconBackFirst from '~/resources/Icons/IconBackFirst';

import Textarea from 'react-native-textarea'
import IconCheck from '~/resources/Icons/IconCheck';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Gender = (): JSX.Element => {
  const theme = useAppTheme();
  const navigation = useNavigation<RootNavigatorNavProps>();
  const [textInput, onChangeInput] = useState('');
  const genders = ["Male", "Female", "Other"]

  const { t } = useTranslation();

  const styleContainer = useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        backgroundColor: '#121212',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
          justifyContent: 'space-between',
          paddingBottom: 24,
         }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconBackFirst/>
          </TouchableOpacity>
          <Text style={{
            fontWeight: '700',
            fontSize: 16,
            textAlign: 'center',
            color: '#ffffff',
          }}>{t('Create account')}</Text>
          <View />
        </View>
        <>
         <View style={{
          marginTop: 5, marginLeft: 5,
         }}>
           <Text
             style={{fontWeight: '700', fontSize: 20, color: '#ffffff'}}
           >
            {t("What's your gender ?")}</Text>
            <TouchableOpacity style={{
                height: 51,
                borderRadius: 5,
                backgroundColor: '#777777',
                alignItems: 'flex-end',
                justifyContent: 'center',
                padding: 18,

            }}>
                <IconCheck/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Name')}
            style={{
              marginTop: 62,
              paddingHorizontal: 21,
              backgroundColor: '#535353',
              borderRadius: 21,
              height: 42,
              width: 82,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center'
            }}>
              <Text style={{
                fontWeight: '600',
                fontSize: 15,
                color: '#000000'
              }}>Next</Text>
            </TouchableOpacity>
            
         </View>
        </>
      </View>
    </SafeAreaView>
  );
};

export default Gender;

const style = StyleSheet.create({});
