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
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025年2月18日</Text>
                    </View>
                    <View>
                        <Text>×</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025年2月18日</Text>
                    </View>
                    <View>
                        <Text>×</Text>
                    </View>
                </View>
            </View>

            <View>
                <Text>+</Text>
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
    }
})