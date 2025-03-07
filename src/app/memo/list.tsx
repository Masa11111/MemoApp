import { router, useNavigation } from "expo-router"
import { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import CircleButton from "../../components/CircleButton"
import MemoListItem from "../../components/MemoListItem"

const onPress = (): void => {
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <Text>ログアウト</Text> }
        })
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
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