import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import indexScreen from "./src/screens/indexScreen";
import { Provider } from "./src/context/BlogContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen name="Index" component={indexScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
