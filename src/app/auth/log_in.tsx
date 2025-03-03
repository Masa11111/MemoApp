import { router } from "expo-router"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Button from "../../components/Button"
import Header from "../../components/Header"

const handlePress = (): void => {
    // ログイン処理

    // メモ一覧へ遷移
    router.push('/memo/list')
}

const LogIn = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.Inner}>
                <Text style={styles.LoginTitle}>Log In</Text>
                <TextInput style={styles.LoginInput} value="EmailAddress"></TextInput>
                <TextInput style={styles.LoginInput} value="Password"></TextInput>
                <Button buttonText={"Log in"} onPress={handlePress} />
                <View style={styles.SignUp}>
                    <Text style={styles.SignUpText}>Not registered?</Text>
                    <TouchableOpacity onPress={() => { router.push('/auth/sign_up') }}>
                        <Text style={styles.SignUpLink}>Sign up here!</Text>
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
export default LogIn