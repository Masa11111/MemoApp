import { StyleSheet, View } from "react-native"
import CircleButton from "../../components/CircleButton"
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
            <CircleButton iconName="plus" iconColor={"white"} ></CircleButton>
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