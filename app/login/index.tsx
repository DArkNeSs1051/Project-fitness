import { View, Text, Image } from "react-native";
import React from "react";

const LoginPage = () => {
  return (
    <View className="bg-[#42779F] w-full h-full flex flex-col items-center justify-center">
      <View className="flex flex-col items-center justify-center gap-4 px-4">
        <View className="!w-[185px] !h-[136px]">
          <Image
            source={require("../../assets/images/IconFitness.png")}
            className="!w-[185px] !h-[136px]"
          />
        </View>
        <View className="flex flex-col gap-6 px-4 py-6">
          <View className="bg-[#FFFFFF] rounded-[16px] min-w-[255px] min-h-[44px] px-6 py-2 flex flex-row gap-5 items-center justify-center">
            <View className="!w-[28px] !h-[28px]">
              <Image
                source={require("../../assets/images/IconGmail.png")}
                className="!w-[28px] !h-[28px]"
              />
            </View>
            <Text className="text-[#5FA3D6] text-[12px] font-normal">
              Sign in with Google
            </Text>
          </View>
          <View className="bg-[#5FA3D6] rounded-[16px] min-w-[255px] min-h-[44px] px-6 py-2 flex flex-row gap-5 items-center justify-center">
            <Text className="text-[#EEEEF0] text-[12px] font-normal">
              Sign in
            </Text>
          </View>
          <View className="flex flex-row gap-2 items-center justify-center">
            <View className="w-[96px] border-[#FFFFFF] border-[1px] h-[1px]"></View>
            <Text className="text-[#EEEEF0] text-[12px] font-normal">or</Text>
            <View className="w-[96px] border-[#FFFFFF] border-[1px] h-[1px]"></View>
          </View>
          <View className="bg-[#FFFFFF] rounded-[16px] min-w-[255px] min-h-[44px] px-6 py-2 flex flex-row gap-5 items-center justify-center">
            <Text className="text-[#5FA3D6] text-[12px] font-normal">
              Create new Account
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
