import { router, useFocusEffect, useNavigation } from "expo-router"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useCallback, useEffect, useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import CircleButton from "../../components/CircleButton"
import LogOutButton from "../../components/LogOutButton"
import MemoListItem from "../../components/MemoListItem"
import { auth, db } from "../../config"
import { type Memo } from "../interface/memo"

const onPress = (): void => {
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    const [memos, setMemos] = useState<Memo[]>([])

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
        })
    }, [])

    // 一覧データ取得
    useFocusEffect(
        useCallback(() => {
            // ユーザ情報が存在しない場合、処理を中断
            if (!auth.currentUser)
            {
                return
            }

            const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
            const q = query(ref, orderBy('createdAt', 'desc'));

            // 🔥 Firestore のリアルタイム監視
            const remoteMemos: Memo[] = []
            const unsubscribe = onSnapshot(q, (snapshot) => {
                snapshot.forEach((doc) => {
                    const { bodyText, updatedAt } = doc.data()
                    remoteMemos.push({
                        id: doc.id,
                        bodyText,
                        updatedAt
                    })
                });
                setMemos(remoteMemos)
            });

            // 🚀 クリーンアップ処理 (画面を閉じたときに監視を解除)
            return () => {
                console.log("Firestore の監視を解除");
                unsubscribe();
            };
        }, [])
    )
    return (
        <View style={styles.container}>
            <FlatList
                data={memos}
                renderItem={({ item }) => <MemoListItem memo={item} />}
            />
            <CircleButton onPress={onPress} iconName="plus" iconColor={"white"} ></CircleButton>
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        flex: 1, // 画面全体に要素を広げる
        backgroundColor: '#ffffff'
    }
})