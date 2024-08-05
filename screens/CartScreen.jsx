import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import Cart from '../components/Cart'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

export default function CartScreen({ route }) {
  const navigation = useNavigation();
  const cart = route.params
  console.log(cart)
  return (
    <SafeAreaView className="flex-1 bg-white px-4 space-y-4">
        <View className="flex-row items-center justify-between">
            <TouchableOpacity className="w-8 h-8 rounded-full border-2 border-[#ECECEE] items-center justify-center">
                <Icon.ArrowLeft color='black' onPress={() => navigation.goBack()} />
            </TouchableOpacity>
            <Text className="text-xl">Cart</Text>
            <Text></Text>
        </View>
        <View className="h-[85%] justify-between">
          <View className="h-[78%] mb-4">
            <ScrollView showsVerticalScrollIndicator={false}>
              <Cart />
              <Cart />
              <Cart />
            </ScrollView>
          </View>
          <View className="justify-end space-y-4">
            <View className="flex-row justify-between items-center">
              <Text>Sub Total</Text>
              <Text className="text-lg font-bold">$64.00</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text>Shipping</Text>
              <Text className="text-lg font-bold">$10.00</Text>
            </View>
            <View className="border border-[#ECECEE] border-dashed"></View>
            <View className="flex-row justify-between items-center">
              <Text>Total</Text>
              <Text className="text-lg font-bold">$70.00</Text>
            </View>
            <TouchableOpacity className="p-3 bg-[#51AE99] rounded-full">
              <Text className="text-white text-center text-lg">Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  )
}