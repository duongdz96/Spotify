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

import Textarea from 'react-native-textarea'
import IconSearch from '~/resources/Icons/IconBottomBar/IconSearch';
import { FlatList } from 'react-native-gesture-handler';
import getImage from '~/libs/getImage';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const SearchPage = (): JSX.Element => {
    const { t } = useTranslation();
    const theme = useAppTheme();
    const navigation = useNavigation<RootNavigatorNavProps>();
    const { openModal } = useModalManager();
    const resultContext = usePreferenceContext();
    const topInsets = useTopInset();
    const [search, setSearch] = useState('');

    const dataReview = [
        { image: getImage('topSong'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong1'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong2'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong1'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong2'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong1'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong2'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong1'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong2'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong1'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
        { image: getImage('topSong2'), hasTag: '#SPOTIFYWRAPPED', des: 'Your 2021 in review' },
    ]

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
                paddingHorizontal: 17,
                paddingTop: Platform.select({
                    ios: 0,
                    android: 58,
                })
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: '#282828',
                        height: 35,
                        width: '80%',
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#282828',
                    }}>
                        <IconSearch />
                        <Textarea
                            containerStyle={{
                                backgroundColor: '#282828',
                                height: 35,
                                paddingHorizontal: 9,
                                borderRadius: 10,
                                width: 236,
                                justifyContent: 'center',
                            }}
                            onChangeText={(e: any) => setSearch(e)}
                            underlineColorAndroid={'transparent'}
                            value={search}
                            placeholder={'Search'}
                            placeholderTextColor={'#ffffff'}
                            style={{ color: '#ffffff' }}
                        />
                    </View>
                    <TouchableOpacity style={{
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                    }}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={{
                            fontSize: 15,
                            fontWeight: '500',
                            textAlign: 'center',
                            color: '#ffffff',
                        }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <>
                    <ScrollView contentContainerStyle={{
                        paddingVertical: 33,
                    }}
                        showsVerticalScrollIndicator={false}>
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 17,
                            color: '#ffffff',
                        }}>Recent Searches</Text>
                        <>
                            <FlatList
                                data={dataReview}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={{ paddingVertical: 20, }} activeOpacity={1}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={item.image} style={{ height: 60, width: 60, borderRadius: 75 }} />
                                            <View style={{
                                                padding: 10,
                                            }}>
                                                <Text style={{
                                                    color: '#ffffff',
                                                    fontSize: 15,
                                                    fontWeight: '500'
                                                }}>{item.hasTag}</Text>
                                                <Text style={{
                                                    color: '#B3B3B3',
                                                    fontSize: 13,
                                                    fontWeight: '500'
                                                }}>{item.des}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </>
                    </ScrollView>
                </>
            </View>
        </SafeAreaView>
    );
};

export default SearchPage;

const styles = StyleSheet.create({});
