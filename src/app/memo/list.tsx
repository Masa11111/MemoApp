import { StyleSheet, View } from "react-native"
import Button from "../../components/Button"
import Header from "../../components/Header"
import MemoListItem from "../../components/MemoListItem"

const List = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <Button iconName="plus" iconColor={"white"} ></Button>
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