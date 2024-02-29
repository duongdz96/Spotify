import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import getImage from '~/libs/getImage';

import { useAppTheme } from '~/resources/theme';

import { RootNavigatorNavProps } from '~/navigation/RootNavigator';

const AuthenPage = (): JSX.Element => {
  const { t } = useTranslation();
  const theme = useAppTheme();
  const navigation = useNavigation<RootNavigatorNavProps>();

  const styleContainer = useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        // backgroundColor: theme.colors.backgroundColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'
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
        alignItems: 'center',
      }}>
        <Image source={getImage('authenBackground')}/>
        <Text style={{
          fontWeight: '700',
          fontSize: 28,
          alignContent: 'center',
          color: '#ffffff',
        }}>Millions of Songs.</Text>
        <Text style={{
          fontWeight: '700',
          fontSize: 28,
          alignContent: 'center',
          color: '#ffffff',
        }}>Free on Spotify.</Text>

      <>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{marginBottom: 5,}}
          >
            <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
              <View style={{
                backgroundColor: '#16E05D',
                width: 337,
                height: 49,
                borderRadius: 45,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 25,
                }}>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#000000',
                  }}
                >{t('Sign up free')}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
              <View style={{
                backgroundColor: '#121212',
                width: 337,
                height: 49,
                borderRadius: 45,
                paddingHorizontal: 16,
                alignItems: 'center',
                marginTop: 12,
                flexDirection: 'row',
                borderColor: '#ffffff',
                borderWidth: 0.6,
                }}>
                  <Image source={getImage('googleIcon')} style={{marginRight: 65}}/>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#ffffff',
                  }}
                >{t('Continue with Google')}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
              <View style={{
                backgroundColor: '#121212',
                width: 337,
                height: 49,
                borderRadius: 45,
                paddingHorizontal: 14,
                alignItems: 'center',
                marginTop: 12,
                flexDirection: 'row',
                borderColor: '#ffffff',
                borderWidth: 0.6,
                }}>
                  <Image source={getImage('facebookIcon')} style={{marginRight: 65}}/>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#ffffff',
                  }}
                >{t('Continue with Facebook')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
              <View style={{
                backgroundColor: '#121212',
                width: 337,
                height: 49,
                borderRadius: 45,
                paddingHorizontal: 17,
                alignItems: 'center',
                marginTop: 12,
                flexDirection: 'row',
                borderColor: '#ffffff',
                borderWidth: 0.6,
                }}>
                  <Image source={getImage('appleIcon')} style={{marginRight: 65}}/>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#ffffff',
                  }}
                >{t('Continue with Apple')}</Text>
              </View>
            </TouchableOpacity>
        </ScrollView>        
      </>
      </View>
    </SafeAreaView>
  );
};

export default AuthenPage;
