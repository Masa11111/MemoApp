import { StyleSheet, Text, View } from "react-native"

const Button = (): JSX.Element => {
    return (
        <View style={styles.circleButton}>
            <Text style={styles.circleButtonLabel}>＋</Text>
        </View>
    )
}
export default Button

const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
        bottom: 64,
        right: 64,
        backgroundColor: "#467FD3",
        height: 64,
        width: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8 },
        elevation: 16
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 30,
    }
})