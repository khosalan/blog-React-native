import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import indexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Index"
            component={indexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name="plus" size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Show" component={ShowScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
