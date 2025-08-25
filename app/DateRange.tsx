import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'

const DateRange = () => {
    const navigation = useNavigation()
    const [activeTab, setActiveTab] = useState('day')
    return (
        <View className='flex-1 bg-black'>
            <View className=' w-full border rounded-b-xl bg-[#1A1A1A]'>
                <View className='flex-row items-center mt-12 justify-between'>
                    <View className='flex-row'>
                        <Pressable className='mx-4'
                            onPress={() => navigation.goBack()}>
                            <Ionicons name='close-sharp' size={26} color={'white'} />
                        </Pressable>
                        <Text className='text-white text-[20px]  font-semibold '>Date range</Text>
                    </View>

                    <Pressable className='mx-5'>
                        <Text className='text-[#FFBE00] text-lg'>Save</Text>
                    </Pressable>
                </View>
                <View className='flex-row mx-8 gap-10 justify-between items-center'>
                    <TouchableOpacity className={`flex-row items-center px-2  py-5 ${activeTab === 'day' && 'border-b-4 border-[#FFBE00]'}`}
                        onPress={() => { setActiveTab('day') }}>
                        <Text className={`text-lg ${activeTab === 'day' ? 'text-[#FFBE00]' : 'text-white'}`}>Day</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`flex-row items-center gap-10 px-2 py-5 ${activeTab === 'week' && 'border-b-4 border-[#FFBE00]'}`}
                        onPress={() => { setActiveTab('week') }}>
                        <Text className={`text-lg ${activeTab === 'week' ? 'text-[#FFBE00]' : 'text-white'}`}>Week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`flex-row items-center gap-10 px-2 py-5 ${activeTab === 'month' && 'border-b-4 border-[#FFBE00]'}`}
                        onPress={() => { setActiveTab('month') }}>
                        <Text className={`text-lg ${activeTab === 'month' ? 'text-[#FFBE00]' : 'text-white'}`}>Month</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`flex-row items-center gap-10 px-2 py-5 ${activeTab === 'other' && 'border-b-4 border-[#FFBE00]'}`}
                        onPress={() => { setActiveTab('other') }}>
                        <Text className={`text-lg ${activeTab === 'other' ? 'text-[#FFBE00]' : 'text-white'}`}>Other</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                
            </View>
        </View>
    )
}

export default DateRange