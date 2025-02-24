import { Feather } from "@expo/vector-icons"
import { ComponentProps } from "react"
import { StyleSheet, View, ViewStyle } from "react-native"

interface Props {
    iconName: ComponentProps<typeof Feather>["name"]
    iconColor?: ComponentProps<typeof Feather>["color"]
    style?: ViewStyle
}

const Button = (props: Props): JSX.Element => {
    const { iconName, iconColor, style } = props
    return (
        <View style={[
            styles.circleButton,
            style
        ]}>
            <Feather name={iconName} size={40} color={iconColor} />
        </View>
    )
}
export default Button

const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
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