import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import FuelIcon from "../assets/icons/fuel.svg";
import CostIcon from "../assets/icons/cost.svg";
import DownIcon from "../assets/icons/goingdownIcon.svg";
import UpIcon from "../assets/icons/goingupIcon.svg";
const Fuel = ({ fuelpercent,costpercent, fuel, cost, fuelval, costval }) => {
    const [fuelValue, setFuelValue] = useState(fuelval)
    const [costValue, setCostValue] = useState(costval)

    return (
        <View className="bg-[#1A1A1A] border border-gray-700 rounded-xl mx-4 p-5">
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-white text-lg font-semibold">Fuel</Text>
                <AntDesign name="arrowright" color="white" size={20} />
            </View>

            <View className="flex-row justify-between items-center">
                <View className="flex-1 items-center">
                    <View className="flex-row items-center space-x-2 mb-2">
                        <FuelIcon width={24} height={24} />
                        <Text className="text-gray-300 ml-2 text-sm">Fuel Consumed</Text>
                    </View>
                    <View className="flex-row items-end">
                        <Text className="text-white text-4xl ">{fuel}</Text>
                        <Text className="text-gray-400 ml-1 mb-1">L</Text>
                    </View>
                    <View className="flex-row">
                        {fuelValue === false ?
                            <DownIcon height={14} width={14} />
                            :
                            <UpIcon height={14} width={14} />
                        }
                        <Text className={fuelValue === false ? 'text-xs text-red-500' : 'text-xs text-green-500'}> {fuelpercent}% </Text>

                        <Text className="text-xs text-gray-400"> vs </Text>

                        <Text className="text-xs text-gray-400">Preceding period</Text>
                    </View>
                </View>

                <View className="w-px h-16 bg-gray-700 mx-4" />

                <View className="flex-1 items-center">
                    <View className="flex-row items-center space-x-2 mb-2">
                        <CostIcon width={24} height={24} />
                        <Text className="text-gray-300 ml-2 text-sm">Fuel Cost</Text>
                    </View>
                    <View className="flex-row items-end">
                        <Text className="text-gray-400 ml-1 mb-1">₹</Text>
                        <Text className="text-white text-4xl ">{cost}</Text>
                    </View>
                    <View className="flex-row">
                        {costValue === false ?
                            <DownIcon height={14} width={14} />
                            :
                            <UpIcon height={14} width={14} />
                        }
                        <Text className={costValue === false ? 'text-xs text-red-500' : 'text-xs text-green-500'}> {costpercent}% </Text>

                        <Text className="text-xs text-gray-400"> vs </Text>

                        <Text className="text-xs text-gray-400">Preceding period</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Fuel;
