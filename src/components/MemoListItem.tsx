import { Feather } from "@expo/vector-icons"
import { router } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { type Memo } from "../app/interface/memo"

const handlePress = (memoId: string): void => {
    // メモ詳細画面へ遷移
    router.push(
        {
            pathname: '/memo/detail',
            params: { memoId }
        })
}

type Props = {
    memo: Memo
}

const MemoListItem = ({ memo }: Props): JSX.Element | null => {

    // データチェック
    const { bodyText, updatedAt } = memo
    if (!bodyText || !updatedAt) { return null }

    // 日付変換
    const updatedAtString =
        updatedAt instanceof Date
            ? updatedAt.toLocaleString("ja-JP")
            : typeof updatedAt === "string"
                ? new Date(updatedAt).toLocaleString("ja-JP")
                : updatedAt.toDate().toLocaleString("ja-JP");

    return (
        <TouchableOpacity onPress={() => { handlePress(memo.id) }} style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListTitle} numberOfLines={1} >{bodyText}</Text>
                <Text style={styles.memoListDate}>{updatedAtString}</Text>
            </View>
            <TouchableOpacity>
                <Feather name="delete" size={20} color={'#848484'} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default MemoListItem

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)'
    },
    memoListTitle: {
        fontSize: 16,
        lineHeight: 32
    },
    memoListDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    }
})