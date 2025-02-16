import { StyleSheet, Text, TextStyle, View } from 'react-native'

interface Props {
    children: String
    bang?: boolean
    style?: TextStyle
}

const Hello = (props: Props): JSX.Element => {
    const { children, bang, style } = props
    return (
        <View>
            <Text style={[
                styels.text,
                style
            ]}>
                Hello {children} {bang ? '!' : ''}
            </Text>
        </View>
    )
}

export default Hello

const styels = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16
    }
})