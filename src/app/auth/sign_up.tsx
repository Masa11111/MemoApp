import { router } from "expo-router"
import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Button from "../../components/Button"

const handlePress = (): void => {
    // ユーザ登録

    // ログイン画面へ遷移
    router.push('/auth/log_in')
}

const SignUp = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.Inner}>
                <Text style={styles.LoginTitle}>Sign Up</Text>
                <TextInput
                    style={styles.LoginInput}
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    keyboardType="email-address"
                    placeholder="Email Address"
                    textContentType="emailAddress"
                ></TextInput>
                <TextInput
                    style={styles.LoginInput}
                    value={password}
                    onChangeText={(text) => { setPassword(text) }}
                    secureTextEntry
                    placeholder="Password"
                    textContentType="password"
                ></TextInput>
                <Button buttonText={"Sign up"} onPress={handlePress} />
                <View style={styles.SignUp}>
                    <Text style={styles.SignUpText}>Already registered?</Text>
                    <TouchableOpacity onPress={() => { router.push('/auth/log_in') }}>
                        <Text style={styles.SignUpLink}>Log in.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Inner: {
        flex: 1,
        paddingVertical: 24,
        paddingHorizontal: 27,
        backgroundColor: '#F0F4F8'
    },
    LoginTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 32,
    },
    LoginInput: {
        marginTop: 24,
        height: 48,
        fontSize: 16,
        backgroundColor: '#ffffff',
        color: '#DDDDDD',
        borderColor: '#DDDDDD',
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 8
    },
    SignUp: {
        marginTop: 24,
        flexDirection: 'row',
        height: 24,
    },
    SignUpText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8
    },
    SignUpLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3'
    }
})
export default SignUp