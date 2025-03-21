import { router } from "expo-router"
import { signOut } from "firebase/auth"
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native"
import { auth } from "../config"

// ログアウト
const handlePress = (): void => {
    signOut(auth).then(() => {
        router.replace("auth/log_in")
    }).catch((error) => {
        Alert.alert("ログアウトに失敗しました。")
    })
}

const LogOutButton = (): JSX.Element => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text} >ログアウト</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 24,
        color: 'rgba(225, 225, 225, 0.7)',
        paddingHorizontal: 16
    }
})

export default LogOutButton