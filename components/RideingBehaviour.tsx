import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import DownIcon from "../assets/icons/goingdownIcon.svg";
import UpIcon from "../assets/icons/goingupIcon.svg";

const RidingBehaviour = ({ percent }) => {
    const [value, setValue] = useState('down')
    return (
        <View className="bg-[#1A1A1A] rounded-xl border border-gray-700 mx-4 p-5">
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-white text-lg font-semibold">Riding Behaviour</Text>
                <AntDesign name="arrowright" color="white" size={20} />
            </View>

            <View className="flex-row justify-between items-center">
                <View>
                    <View>
                    </View>
                    <View className="flex-row">
                        {value === 'down' ?
                            <DownIcon height={14} width={14} />
                            :
                            <UpIcon height={14} width={14} />
                        }
                        <Text className={value === 'down' ? 'text-xs text-red-500' : 'text-xs text-green-500'}> {percent}% </Text>

                        <Text className="text-xs text-gray-400"> vs </Text>

                        <Text className="text-xs text-gray-400">Preceding period</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default RidingBehaviour;
