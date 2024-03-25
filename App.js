import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Assistant" }}
        />

        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          // options={{
          //   headerRight: () => (
          //     <Button
          //       icon="delete"
          //       mode="contained"
          //       onPress={() => console.log("Pressed")}
          //     >
          //       Reset
          //     </Button>
          //   ),
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
