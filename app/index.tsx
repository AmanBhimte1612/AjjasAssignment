import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Journey from "@/components/Journey";
import Speed from "@/components/Speed";
import Fuel from "@/components/Fuel";
import RidingBehaviour from "@/components/RideingBehaviour";
import dummyData from "../Dummydata.json"; // adjust path

const Index = () => {
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        setData(dummyData);
    }, []);

    return (
        <View className="bg-black flex-1">
            <View className="w-full border-b border-gray-700 pt-11  bg-[#1A1A1A] rounded-b-xl pb-3">
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
                            <Text className="text-white">Mar 1 - Mar 7 (Last week)</Text>
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
            <View className="flex-1 w-full px-2 gap-y-5 mt-4">
                <RidingBehaviour percent={24} />
                <Journey
                    dist_percent={24}
                    dur_percent={24}
                    disval={true}
                    durval={true}
                    distance={'85.19'}
                    duration={'2hr'} />

                <Speed
                    avg_speed={"50"}
                    top_speed={"50"}
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
                    fuel={'3.01'}
                    cost={'248'}
                />
            </View>
        </View>
    );
};

export default Index;
