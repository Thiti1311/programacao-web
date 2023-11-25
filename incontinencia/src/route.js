import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Start from "./pages/start/Start";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import InformationUser from "./pages/information/InformationUser";
import Botons from "./pages/principal/BotonsScreen";

const AppStack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen 
          name="Inicio" 
          component={Start}  
          options={{ cardStyle: { backgroundColor: "white" }}}
        />
        <AppStack.Screen 
          name="Login" 
          component={Login}  
          options={{ cardStyle: { backgroundColor: "white" }}}
        />
        <AppStack.Screen 
          name="InformationUser" 
          component={InformationUser}  
          options={{ cardStyle: { backgroundColor: "white" }}}
        />
        <AppStack.Screen 
          name="Principal" 
          component={Botons}  
          options={{ cardStyle: { backgroundColor: "white" }}}
        />
        <AppStack.Screen 
          name="Registro" 
          component={Register}  
          options={{ cardStyle: { backgroundColor: "white" }}}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;