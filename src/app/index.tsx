import { StyleSheet, View } from "react-native"
import Button from "../components/Button"
import Header from "../components/Header"
import MemoListItem from "../components/MemoListItem"

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <MemoListItem />
            <Button />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1, // 画面全体に要素を広げる
        backgroundColor: '#ffffff'
    }
})