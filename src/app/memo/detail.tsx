import { router, useLocalSearchParams } from "expo-router"
import { doc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import CircleButton from "../../components/CircleButton"
import { auth, db } from "../../config"
import { Memo } from "../interface/memo"

const Detail = (): JSX.Element => {
    const params = useLocalSearchParams()
    const [memo, setMemo] = useState<Memo | null>(null)
    useEffect(() => {
        if (!auth.currentUser)
        {
            return
        }
        const ref = doc(db, `users/${auth.currentUser.uid}`, String(params.Id))
        const unsubscribe = onSnapshot(ref, (memoDoc) => {
            const { bodyText, updatedAt } = memoDoc.data() as Memo
            setMemo({
                id: memoDoc.id,
                bodyText: bodyText,
                updatedAt: updatedAt
            })
        })
        return unsubscribe
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle} numberOfLines={1}>{memo?.bodyText}</Text>
                <Text style={styles.memoDate}>{memo?.updatedAt.toDate().toLocaleString("ja-JP")}</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    {memo?.bodyText}
                </Text>
            </ScrollView>
            <CircleButton
                iconName="edit" iconColor={"white"} style={styles.editButton}
                onPress={() => { router.push('/memo/edit') }}
            />
        </View>
    )
}
export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    memoHeader: {
        height: 96,
        paddingVertical: 24,
        paddingHorizontal: 19,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#467FD3'
    },
    memoTitle: {
        lineHeight: 32,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    memoDate: {
        lineHeight: 16,
        fontSize: 12,
        color: '#ffffff'
    },
    memoBody: {
        paddingHorizontal: 27
    },
    memoBodyText: {
        paddingVertical: 32,
        fontSize: 16,
        lineHeight: 24
    },
    editButton: {
        position: 'absolute',
        top: 60,
        bottom: 'auto'
    }
})