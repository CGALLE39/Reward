import React from "react";
import { NavigatorContatiner } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Chat from "./screens/Chat";

const Stack = createStackNavigator();

function ChatStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

function RootNavigator () {
  return (
    <NavigatorContatiner>
      <ChatStack />
    </NavigatorContatiner>
  )
}

export default function App() {
  return 
  <RootNavigator />
}

