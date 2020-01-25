import React from 'react';
import {
    Image,
    StatusBar,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {

        return (
            <ScrollView style={{ backgroundColor: "#010001", }}>
                <StatusBar hidden={true} />
                <View style={{ padding: 36, }}>
                    <Image resizeMode="contain"
                        source={require('../../images/logo.png')}
                        style={{ width: 200, height: 200, marginTop: 54, marginBottom: 24, alignSelf: 'center', }}>
                    </Image>
                </View>

                <View style={[styles.container, { marginTop: 16, }]}>
                    <Icon name="email-outline"style={styles.login_icon} />
                    <TextInput placeholder="Email address"
                        placeholderTextColor="#ADADAD"
                        underlineColorAndroid='transparent'
                        style={{ color: "#fff", flex: 1, fontSize: 16, padding: 12, }}

                    />
                </View>
                <View style={[styles.container, { marginBottom: 24, }]}>
                    <Icon name="lock-outline" style={styles.login_icon} />
                    <TextInput placeholder="Password"
                        placeholderTextColor="#ADADAD"
                        underlineColorAndroid='transparent'
                        style={{ color: "#fff", flex: 1, fontSize: 16, paddingLeft: 12, }}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={{ flex: 1, backgroundColor: "#25aae1", borderRadius: 2, padding: 10, }}>
                    <Text style={{ alignSelf: "center", fontSize: 16, color: "#fff", }}>LOGIN</Text>
                </TouchableOpacity>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1, justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: '#b6b6b6',
    },
    login_icon: {
        fontSize: 25,
        color: "#ADADAD",
        alignSelf:"center",
    },
});


