import { StyleSheet, Text, TextInput, View } from "react-native"
import Header from "../../components/Header"

const LogIn = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.Inner}>
                <Text style={styles.LoginTitle}>Log In</Text>
                <TextInput style={styles.LoginInput} value="EmailAddress"></TextInput>
                <TextInput style={styles.LoginInput} value="Password"></TextInput>
                <View style={styles.LoginSubmit}>
                    <Text style={styles.LoginSubmitText}>Submit</Text>
                </View>
                <View style={styles.SignUp}>
                    <Text style={styles.SignUpText}>Not registered?</Text>
                    <Text style={styles.SignUpLink}>Sign up here!</Text>
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
    LoginSubmit: {
        marginTop: 16,
        height: 48,
        width: 99,
        backgroundColor: '#467FD3',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoginSubmitText: {
        fontSize: 16,
        color: '#ffffff',
        lineHeight: 32
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