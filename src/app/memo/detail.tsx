import { router } from "expo-router"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import CircleButton from "../../components/CircleButton"
import Header from "../../components/Header"

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2025年2月18日</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。
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
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24
    },
    editButton: {
        position: 'absolute',
        top: 160,
        bottom: 'auto'
    }
})