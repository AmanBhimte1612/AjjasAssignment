import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons'

const Journey = () => {
    return (
        <View className=' bg-[#1A1A1A] rounded-xl mx-4 p-5'>
            <View className='flex-row justify-between items-center '>
                <Text className='text-white text-lg font-semibold'>Journey</Text>
                <AntDesign name='arrowright' color={'gray'} size={20}/>
            </View>
            <View className='flex-row justify-between items-center'>
                <View>
                    <View><Text>Distance Travelled</Text></View>
                    <View> <Text>85.19</Text></View>
                    <View><Text>3.01</Text></View>

                </View>
                <View>

                </View>
            </View>
        </View>
    )
}

export default Journey