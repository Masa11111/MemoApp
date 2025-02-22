import { StyleSheet, Text, View } from "react-native"

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>Memo App</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
                </View>
            </View>

            <View>
                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListTitle}>買い物リスト</Text>
                        <Text style={styles.memoListDate}>2025年2月18日</Text>
                    </View>
                    <View>
                        <Text>×</Text>
                    </View>
                </View>
                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListTitle}>買い物リスト</Text>
                        <Text style={styles.memoListDate}>2025年2月18日</Text>
                    </View>
                    <View>
                        <Text>×</Text>
                    </View>
                </View>

                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListTitle}>買い物リスト</Text>
                        <Text style={styles.memoListDate}>2025年2月18日</Text>
                    </View>
                    <View>
                        <Text>×</Text>
                    </View>
                </View>

            </View>

            <View style={styles.circleButton}>
                <Text style={styles.circleButtonLabel}>＋</Text>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1, // 画面全体に要素を広げる
        backgroundColor: '#ffffff'
    },
    header: {
        backgroundColor: "#467FD3",
        height: 104,
        justifyContent: 'flex-end'
    },
    headerInner: {
        alignItems: 'center',
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: 'rgba(255, 255, 255, 0.7)'
    },
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
    },
    circleButton: {
        position: 'absolute',
        bottom: 64,
        right: 64,
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