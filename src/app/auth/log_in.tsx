import { router } from "expo-router"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRef, useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Button from "../../components/Button"
import { auth } from "../../config"

const loginStatusRef = {
    loginError: ''
}
const handlePress = (email: string, password: string): void => {
    // ログイン処理(firebaseAPI)
    signInWithEmailAndPassword(auth, email, password)
        .then((userCreadential) => {

            // メモ一覧へ遷移
            router.replace('/memo/list')
        })
        .catch((error) => {
            loginStatusRef.loginError = 'ログインに失敗しました。'
        })
}

const LogIn = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let loginStatus = useRef(loginStatusRef)
    return (
        <View style={styles.container}>
            <View style={styles.Inner}>
                <Text style={styles.LoginTitle}>Log In</Text>
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
                <Button buttonText={"Log in"} onPress={() => { handlePress(email, password) }} />
                <View style={styles.SignUp}>
                    <Text style={styles.SignUpText}>Not registered?</Text>
                    <TouchableOpacity onPress={() => { router.replace('/auth/sign_up') }}>
                        <Text style={styles.SignUpLink}>Sign up here!</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.loginStatusStyle}>{loginStatus.current.loginError}</Text>
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
        color: 'gray',
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
    },
    loginStatusStyle: {
        color: 'red',
        fontSize: 14
    }
})
export default LogIn