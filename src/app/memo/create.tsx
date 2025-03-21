import { router } from "expo-router"
import { Timestamp, addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native"
import CircleButton from "../../components/CircleButton"
import { auth, db } from "../../config"

const handlePress = async (bodyText: string) => {
    // ログインしていない場合は処理を終了
    if (!auth.currentUser) { return }

    // 未入力の場合は処理を終了する
    if (!bodyText) { return }

    // リフレクションを作成
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)

    // ドキュメントを追加
    try
    {
        await addDoc(ref, {
            bodyText: bodyText, // 入力テキスト
            createdAt: Timestamp.fromDate(new Date()), // 作成日付
            updatedAt: ''
        })
        router.back()
    }
    catch (error)
    {
        return
    }
}

const Create = (): JSX.Element => {
    const [bodyText, setBodyText] = useState('')
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline
                    value={bodyText}
                    style={styles.inputText}
                    onChangeText={(text) => { setBodyText(text) }}
                ></TextInput>
            </View>
            <CircleButton
                iconName="check" iconColor={"white"}
                onPress={() => { handlePress(bodyText) }}
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