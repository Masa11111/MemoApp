import { KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native"
import Button from "../../components/Button"
import Header from "../../components/Header"

const Edit = (): JSX.Element => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <Header />
            <View style={styles.inputContainer}>
                <TextInput multiline value="hello world" style={styles.inputText}></TextInput>
            </View>
            <Button iconName="check" iconColor={"white"} style={styles.checkButton} />
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
    },
    checkButton: {
        right: 64,
        bottom: 64
    }
})

export default Edit