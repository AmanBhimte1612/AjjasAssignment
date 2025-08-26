import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Journey from "@/components/Journey";
import Speed from "@/components/Speed";
import Fuel from "@/components/Fuel";
import RidingBehaviour from "@/components/RideingBehaviour";
import dummyData from "../Dummydata.json";
import { useDateRange } from "@/hooks/useDateRange";
import { getStatsInRange } from "@/constants/FilterStats";
const Index = () => {
    const { start, end, title } = useDateRange();
    const [range, setRange] = useState("Today");
    const [data, setData] = useState<any[]>([])
    console.log("start", start, 'end', end)
    useEffect(() => {
        setData(dummyData)
    }, [])

    const [stats, setStats] = useState(getStatsInRange(data, start, end));
    console.log(stats)
    const formatDateRange = (startMillis: number, endMillis: number) => {
        const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
        const startStr = new Date(startMillis).toLocaleDateString("en-US", options);
        const endStr = new Date(endMillis).toLocaleDateString("en-US", options);
        return `${startStr} - ${endStr}`;
    };
    const [daterange,setDateRange]=useState('') 
    useEffect(()=>{
        const daterange = formatDateRange(start,end)

        setDateRange(daterange)

    })
    return (
        <View className="bg-black flex-1">
            <View className="w-full border-b border-gray-700 pt-11 bg-[#1A1A1A] rounded-b-xl pb-3">
                <Text className="text-white text-[20px] mt-3 mx-5 font-semibold">
                    Statistics
                </Text>

                <View className="flex-row justify-between items-center mt-2">
                    <View className="ml-3">
                        <TouchableOpacity
                            className="flex-row items-center gap-2 m-2"
                            onPress={() => router.push("/DateRange")}
                        >
                            <Feather name="calendar" size={18} color="white" />
                            <Text className="text-white">
                                {start === end ?start :daterange} 
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View className="flex-row gap-x-6 mr-4">
                        <TouchableOpacity className="px-2">
                            <AntDesign name="left" size={22} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity className="px-2">
                            <AntDesign name="right" size={22} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Stats Content */}
            <View className="flex-1 w-full px-2 gap-y-5 mt-4">
                <RidingBehaviour percent={24} />

                <Journey
                    dist_percent={24}
                    dur_percent={24}
                    disval={true}
                    durval={true}
                    distance={stats.distance.toFixed(2)}
                    duration={`${Math.round(stats.duration / 60)}`}
                />

                <Speed
                    avg_speed={stats.avgSpeed.toString()}
                    top_speed={stats.topSpeed.toString()}
                    avgpercent={24}
                    toppercent={24}
                    topval={false}
                    avgval={true}
                />

                <Fuel
                    fuelpercent={24}
                    costpercent={24}
                    fuelval={true}
                    costval={true}
                    fuel={stats.fuel.toFixed(2)}
                    cost={stats.cost.toFixed(2)}
                />
            </View>
        </View>
    );
};

export default Index;
