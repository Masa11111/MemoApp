import { Feather } from "@expo/vector-icons"
import { router } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const handlePress = (): void => {
    // メモ詳細画面へ遷移
    router.push('/memo/detail')
}

const MemoListItem = (): JSX.Element => {
    return (
        <TouchableOpacity onPress={handlePress} style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListTitle}>買い物リスト</Text>
                <Text style={styles.memoListDate}>2025年2月18日</Text>
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