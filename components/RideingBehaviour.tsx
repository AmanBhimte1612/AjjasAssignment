import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import DownIcon from "../assets/icons/goingdownIcon.svg";
import UpIcon from "../assets/icons/goingupIcon.svg";
import { useState } from "react";

const RidingBehaviour = ({ score = 91, label = "Excellent", percent = -24 }) => {
    const isDown = percent < 0;

    return (
        <View className="bg-[#1A1A1A] rounded-xl border border-gray-700 mx-4 p-5">

            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-white text-lg font-semibold">Riding Behaviour</Text>
                <AntDesign name="arrowright" color="white" size={20} />
            </View>


            <View className="flex-row items-center">

                <View className="flex-row border-2 border-blue-600 ">

                    <View className="bg-blue-600 rounded-md px-2 py-1 mr-2">
                        <Text className="text-white text-xs font-semibold">{score}%</Text>
                    </View>


                    <Text className="text-white text-sm font-semibold mr-3">{label}</Text>
                </View>


                {isDown ? (
                    <DownIcon height={14} width={14} />
                ) : (
                    <UpIcon height={14} width={14} />
                )}
                <Text className={isDown ? "text-xs text-red-500 ml-1" : "text-xs text-green-500 ml-1"}>
                    {Math.abs(percent)}%
                </Text>

                {/* Text */}
                <Text className="text-xs text-gray-400 ml-1">vs preceding period</Text>
            </View>
        </View>
    );
};

export default RidingBehaviour;
