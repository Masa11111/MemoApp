import { StyleSheet, Text, View } from "react-native"

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>

            <View>
                <View>
                    <Text>Memo App</Text>
                    <Text>ログアウト</Text>
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
        flex: 1, // 画面いっぱい
        justifyContent: 'center', // 縦方向に中心
        alignItems: 'center'
    }
})