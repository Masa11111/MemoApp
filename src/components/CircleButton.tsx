import { Feather } from "@expo/vector-icons"
import { ComponentProps } from "react"
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native"

interface Props {
    iconName: ComponentProps<typeof Feather>["name"]
    iconColor?: ComponentProps<typeof Feather>["color"]
    style?: ViewStyle
    onPress?: () => void
}

const CircleButton = (props: Props): JSX.Element => {
    const { iconName, iconColor, style, onPress } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.circleButton,
                style
            ]}>
            <Feather name={iconName} size={40} color={iconColor} />
        </TouchableOpacity>
    )
}
export default CircleButton

const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
        right: 40,
        bottom: 40,
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