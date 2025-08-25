import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'

const DateRange = () => {
    const navigation = useNavigation()
    const [activeTab, setActiveTab] = useState('day')
    const [activeOpt, setActiveOpt] = useState('present')

    // each option will have { label, value: {start, end} }
    const [present, setPresent] = useState<any>({})
    const [past, setPast] = useState<any>({})
    const [before, setBefore] = useState<any>({})
    const [selectedVal, setSelectedVal] = useState<any>(null)


    useEffect(() => {
        if (activeTab === 'day') {
            const today = new Date();
            const startToday = new Date(today.setHours(0, 0, 0, 0)).getTime();
            const endToday = new Date().setHours(23, 59, 59, 999);

            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const startYesterday = new Date(yesterday.setHours(0, 0, 0, 0)).getTime();
            const endYesterday = new Date(yesterday.setHours(23, 59, 59, 999)).getTime();

            const beforeYesterday = new Date();
            beforeYesterday.setDate(beforeYesterday.getDate() - 2);
            const startBefore = new Date(beforeYesterday.setHours(0, 0, 0, 0)).getTime();
            const endBefore = new Date(beforeYesterday.setHours(23, 59, 59, 999)).getTime();

            setPresent({
                title: "Today",
                label: new Date(startToday).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
                value: { start: startToday, end: endToday }
            })
            setPast({
                title: "Yesterday",
                label: new Date(startYesterday).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
                value: { start: startYesterday, end: endYesterday }
            })
            setBefore({
                title: "Day before yesterday",
                label: new Date(startBefore).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
                value: { start: startBefore, end: endBefore }
            })
        }
        else if (activeTab === 'week') {
            const thisweek = getDateRange('thisWeek')
            const last = getDateRange('lastWeek')
            const last7 = getDateRange('last7')

            setPresent({ title: "This week", label: formatDateRange(thisweek.start, thisweek.end), value: thisweek })
            setPast({ title: "Last week", label: formatDateRange(last.start, last.end), value: last })
            setBefore({ title: "Last 7 days", label: formatDateRange(last7.start, last7.end), value: last7 })
        }
        else if (activeTab === 'month') {
            const thismonth = getDateRange('thisMonth')
            const lastmonth = getDateRange('lastMonth')
            const last30 = getDateRange('last30')

            setPresent({ title: "This month", label: formatDateRange(thismonth.start, thismonth.end), value: thismonth })
            setPast({ title: "Last month", label: formatDateRange(lastmonth.start, lastmonth.end), value: lastmonth })
            setBefore({ title: "Last 30 days", label: formatDateRange(last30.start, last30.end), value: last30 })
        }
    }, [activeTab])

    const getDateRange = (
        type: "thisWeek" | "lastWeek" | "last7" | "last30" | "thisMonth" | "lastMonth" | "thisYear" | "lastYear"
    ) => {
        const today = new Date();
        let start: Date, end: Date;

        if (type === "thisWeek" || type === "lastWeek") {
            const day = today.getDay();
            const startOfThisWeek = new Date(today);
            startOfThisWeek.setHours(0, 0, 0, 0);
            startOfThisWeek.setDate(today.getDate() - day);

            const endOfThisWeek = new Date(startOfThisWeek);
            endOfThisWeek.setDate(startOfThisWeek.getDate() + 6);
            endOfThisWeek.setHours(23, 59, 59, 999);

            if (type === "thisWeek") {
                start = startOfThisWeek;
                end = endOfThisWeek;
            } else {
                start = new Date(startOfThisWeek);
                start.setDate(start.getDate() - 7);

                end = new Date(endOfThisWeek);
                end.setDate(end.getDate() - 7);
            }
        }

        else if (type === "last7" || type === "last30") {
            end = new Date(today);
            end.setHours(23, 59, 59, 999);

            start = new Date(today);
            start.setDate(today.getDate() - (type === "last7" ? 6 : 29));
            start.setHours(0, 0, 0, 0);
        }

        else if (type === "thisMonth" || type === "lastMonth") {
            const year = today.getFullYear();
            const month = today.getMonth(); // 0 = Jan

            if (type === "thisMonth") {
                start = new Date(year, month, 1, 0, 0, 0, 0);
                end = new Date(year, month + 1, 0, 23, 59, 59, 999);
            } else {
                start = new Date(year, month - 1, 1, 0, 0, 0, 0);
                end = new Date(year, month, 0, 23, 59, 59, 999);
            }
        }

        else if (type === "thisYear" || type === "lastYear") {
            const year = today.getFullYear();

            if (type === "thisYear") {
                start = new Date(year, 0, 1, 0, 0, 0, 0);
                end = new Date(year, 11, 31, 23, 59, 59, 999);
            } else {
                start = new Date(year - 1, 0, 1, 0, 0, 0, 0);
                end = new Date(year - 1, 11, 31, 23, 59, 59, 999);
            }
        }

        else {
            throw new Error("Invalid type");
        }

        return {
            start: start.getTime(),
            end: end.getTime(),
        };
    };


    const formatDateRange = (startMillis: number, endMillis: number) => {
        const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
        const startStr = new Date(startMillis).toLocaleDateString("en-US", options);
        const endStr = new Date(endMillis).toLocaleDateString("en-US", options);
        return `${startStr} - ${endStr}`;
    };



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
                <Option
                    title={present.title}
                    label={present.label}
                    value={present.value}
                    activeOpt={activeOpt === 'present'}
                    setActiveOpt={() => setActiveOpt('present')}
                    setValue={(val) => setSelectedVal(val)}
                />
                <Option
                    title={past.title}
                    label={past.label}
                    value={past.value}
                    activeOpt={activeOpt === 'past'}
                    setActiveOpt={() => setActiveOpt('past')}
                    setValue={(val) => setSelectedVal(val)}
                />
                <Option
                    title={before.title}
                    label={before.label}
                    value={before.value}
                    activeOpt={activeOpt === 'before'}
                    setActiveOpt={() => setActiveOpt('before')}
                    setValue={(val) => setSelectedVal(val)}
                />
            </View>

        </View>
    )
}
const Option = ({ activeOpt, label, title, value, setValue, setActiveOpt }: any) => {
    return (
        <TouchableOpacity
            className='flex-row justify-between items-center py-4 px-5 border-b border-gray-700'
            onPress={() => { setActiveOpt(true); setValue(value) }}
        >
            <View>
                <Text className={`${activeOpt ? 'text-[#FFBE00]' : 'text-white'} text-xl font-semibold`}>
                    {title}
                </Text>
                <Text className='text-gray-400'>{label}</Text>
            </View>
            {activeOpt && <Feather name='check' size={24} color={'#FFBE00'} />}
        </TouchableOpacity>
    )
}

export default DateRange


