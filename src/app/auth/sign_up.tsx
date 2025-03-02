import { StyleSheet, Text, TextInput, View } from "react-native"
import Button from "../../components/Button"
import Header from "../../components/Header"

const SignUp = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.Inner}>
                <Text style={styles.LoginTitle}>Sign Up</Text>
                <TextInput style={styles.LoginInput} value="EmailAddress"></TextInput>
                <TextInput style={styles.LoginInput} value="Password"></TextInput>
                <Button buttonText={"Sign up"} />
                <View style={styles.SignUp}>
                    <Text style={styles.SignUpText}>Already registered?</Text>
                    <Text style={styles.SignUpLink}>Log in.</Text>
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