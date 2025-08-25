import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
const index = () => {

    return (
        // <Redirect  href={'/(tabs)/home'}/>
        <View className='bg-black flex-1'>
            <View className='   h-70 w-full border rounded-b-xl bg-[#1A1A1A]'>
                <Text className='text-white text-xl mt-20 mx-5 font-bold mb-10'>Satictics</Text>
                <View className='flex-row justify-between items-center'>
                    <View className='m-3'>
                        <TouchableOpacity className='flex-row items-center gap-2 m-2'
                        onPress={()=>router.replace("/(tabs)/home")}>
                            <Feather name="calendar" size={4} color="white" /> 
                            <Text className='text-white'>
                                Mar 1- Mar 7 (last week)
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View className='flex-row gap-x-4 mx-4'>
                        <TouchableOpacity className='px-2'>
                            <AntDesign name='left' size={24} color={'white'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name='right' size={24} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View className=' flex-1 w-full h-70 '>
                <View className='rounded-lg bg-[#1A1A1A]'>

                </View>
            </View>

        </View>

    )

}

export default index