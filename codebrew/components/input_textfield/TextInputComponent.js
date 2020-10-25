// TextInputComponent.js
// React Native Bottom Navigation - Example using React Navigation V5 with Calender //
// https://github.com/Rishu2505/CalendarEvent.git //
import React from 'react';
import { Text, View, StyleSheet, TextInput, } from 'react-native';
import { GlobalStyle, Colors, Fontsize } from '../constants';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
const TextInputComponent = (props) => {
    const {
        //outlets
        customtextname,
        customvalue,
        style,
        textstyle,
        customkeyboardType,
        customsecuretext,
        showSecureEntry,
        showDParray,
        gif,
        custommaxLength,
        custommultiline,
        customplaceholder,
        customhideTitle,
        issocialMediaField,
        socialMediaIcon,
        socialMediaIconType,
        editable,
        tintColor,
        iconsize,
        marginHorizontal,
        //actions
        onEditPress,
        onDeletePress,
        customonChangeText,
        managePasswordVisibility,
        viewstyle,
        fieldType,

    } = props

    return (
        <View style={[viewstyle, { marginHorizontal: marginHorizontal ? marginHorizontal : wp(4.5), }]}>
            {
                customhideTitle ?
                    null
                    :
                    <Text textBreakStrategy={'simple'} style={[styles.textstyle, textstyle]}>{customtextname}</Text>
            }
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                borderColor: Colors.borderC,
                borderWidth: .8,
                borderRadius: 5,
                marginTop: wp(2),
                height: null,
                backgroundColor: Colors.white

            }}>

                {
                    issocialMediaField ? <Icon
                        iconStyle={{ fontSize: iconsize ? iconsize : Fontsize.header }}
                        containerStyle={{ tintColor: tintColor && tintColor, width: "10%", justifyContent: 'center', alignItems: 'flex-end', paddingLeft: 5, paddingRight: 3.5, alignSelf: fieldType && fieldType == "description" ? 'flex-start' : 'center', paddingTop: fieldType && fieldType == "description" ? 8 : 0, }}
                        name={socialMediaIcon}
                        type={socialMediaIconType}
                        color={tintColor ? tintColor : Colors.graytext}
                    /> : null
                }

                <TextInput
                    textBreakStrategy={'simple'}
                    style={[GlobalStyle.textinputstyle, style, { height: fieldType && fieldType == "description" ? hp(30) : null, width: showSecureEntry && issocialMediaField ? "79%" : showSecureEntry && !issocialMediaField ? "89%" : showDParray ? "90%" : gif ? "90%" : "90%", textAlignVertical: fieldType && fieldType == "description" ? 'top' : 'center', }]}
                    secureTextEntry={customsecuretext}
                    value={customvalue}
                    returnKeyType='done'
                    keyboardType={customkeyboardType}
                    placeholderTextColor={Colors.placehcolor}
                    maxLength={custommaxLength}
                    multiline={custommultiline ? true : false}
                    placeholder={customplaceholder ? customplaceholder : ''}
                    onChangeText={customonChangeText}
                    editable={editable}
                    autoCapitalize={customkeyboardType == "email-address" || showSecureEntry ? "none" : "sentences"}
                >
                </TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        textstyle:
        {
            color: Colors.headingblack,
            fontSize: Fontsize.textinputHtext,
            alignSelf: 'center',
            marginTop: wp(3),
            width: '100%',
            textAlign: 'left'
        }
    })

export default TextInputComponent