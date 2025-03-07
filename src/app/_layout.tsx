import { Stack } from "expo-router";

const Layout = (): JSX.Element => {
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#467FD3',
        },
        headerTintColor: '#ffffff',
        headerTitle: 'Memo App',
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold'
        },
        headerBackTitle: 'Back',
        headerBackVisible: true
    }} />
}

export default Layout