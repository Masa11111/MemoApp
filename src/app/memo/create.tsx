import { router } from "expo-router"
import { KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native"
import CircleButton from "../../components/CircleButton"

const Create = (): JSX.Element => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline value="" style={styles.inputText}></TextInput>
            </View>
            <CircleButton
                iconName="check" iconColor={"white"}
                onPress={() => { router.back() }}
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flex: 1,
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    inputText: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        textAlignVertical: 'top'
    }
})

export default Create