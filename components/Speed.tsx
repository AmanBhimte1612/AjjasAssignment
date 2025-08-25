import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import AvgSpeedIcon from "../assets/icons/avg_speed.svg";
import TopSpeedIcon from "../assets/icons/top_speed.svg";
import DownIcon from "../assets/icons/goingdownIcon.svg";
import UpIcon from "../assets/icons/goingupIcon.svg";

const Speed = ({ avgpercent,toppercent,avg_speed,top_speed,avgval,topval}) => {
    const [avgValue, setAvgValue] = useState(avgval)
    const [topValue, setTopValue] = useState(topval)

    return (
        <View className="bg-[#1A1A1A] border border-gray-700 rounded-xl  mx-4 p-5">
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-white text-lg font-semibold">Speed</Text>
                <AntDesign name="arrowright" color="white" size={20} />
            </View>

            <View className="flex-row justify-between items-center">
                <View className="flex-1 items-center">
                    <View className="flex-row items-center space-x-2 mb-2">
                        <AvgSpeedIcon width={24} height={24} />
                        <Text className="text-gray-300 ml-2 text-sm">Average Speed</Text>
                    </View>
                    <View className="flex-row items-end">
                        <Text className="text-white text-4xl font-bold">{avg_speed}</Text>
                        <Text className="text-gray-400 ml-1 mb-1">km/hr</Text>
                    </View>
                    <View className="flex-row">
                        {avgValue  ?
                            <UpIcon height={14} width={14} />
                            :
                            <DownIcon height={14} width={14} />
                        }
                        <Text className={avgValue ? 'text-xs text-green-500' : 'text-xs text-red-500'}> {avgpercent}% </Text>

                        <Text className="text-xs text-gray-400"> vs </Text>

                        <Text className="text-xs text-gray-400">Preceding period</Text>
                    </View>
                </View>

                <View className="w-px h-16 bg-gray-700 mx-4" />

                <View className="flex-1 items-center">
                    <View className="flex-row items-center space-x-2 mb-2">
                        <TopSpeedIcon width={24} height={24} />
                        <Text className="text-gray-300 ml-2 text-sm">Top Speed</Text>
                    </View>
                    <View className="flex-row items-end">
                        <Text className="text-white text-4xl font-bold">{top_speed}</Text>
                        <Text className="text-gray-400 ml-1 mb-1">km/hr</Text>
                    </View>
                    <View className="flex-row">
                        {topValue === 'down' ?
                            <UpIcon height={14} width={14} />
                            :
                            <DownIcon height={14} width={14} />
                        }
                        <Text className={topValue ? 'text-xs text-green-500' : 'text-xs text-red-500'}> {toppercent}% </Text>

                        <Text className="text-xs text-gray-400"> vs </Text>

                        <Text className="text-xs text-gray-400">Preceding period</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Speed;
