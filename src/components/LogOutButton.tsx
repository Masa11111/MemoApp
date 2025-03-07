import { StyleSheet, Text, TouchableOpacity } from "react-native"

const LogOutButton = (): JSX.Element => {
    return (
        <TouchableOpacity>
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