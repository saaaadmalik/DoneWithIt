import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'


const RootLayout = () => {
    return (
        <>
            {/* one way */}
            {/* <Text>Header</Text>
            <Slot />
            <Text>Footer</Text> */}

            <Stack>
                <Stack.Screen name = "index" options = {{headerShown: false}}/>
            </Stack>
        </>
    )
}

export default RootLayout
