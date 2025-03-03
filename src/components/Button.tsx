import { StyleSheet, Text, TouchableOpacity } from "react-native"

interface Props {
    buttonText: String
    onPress?: () => void
}

const Button = (props: Props): JSX.Element => {
    const { buttonText, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.Button}>
            <Text style={styles.ButtonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}
export default Button

const styles = StyleSheet.create({
    Button: {
        marginTop: 16,
        height: 48,
        width: 99,
        backgroundColor: '#467FD3',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText: {
        fontSize: 16,
        color: '#ffffff',
        lineHeight: 32
    }
})