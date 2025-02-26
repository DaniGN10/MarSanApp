import * as React from "react";
import {useFonts} from "expo-font";
import Inicio from "./presentation/views/auth/Inicio";
import Formulario from "./presentation/views/auth/Formulario";
import Login from "./presentation/views/auth/Login";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import EstadoTareas from "./presentation/views/auth/EstadoTareas";
import VistaPDF from "./presentation/views/auth/VistaPDF";
import DetalleTarea from "./presentation/views/auth/DetalleTarea";

export type RootStackParamsList = {
  Login: undefined,
  Inicio: undefined,
  Formulario: undefined,
  EstadoTareas: undefined,
  DetalleTarea: { cliente: string },
  // VistaPDF: { pdfPath: string }
}
const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });

    return (
        <NavigationContainer>

          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"Login"} component={Login} options={{headerShown: true, title: "Login"}}></Stack.Screen>
            <Stack.Screen name={"Inicio"} component={Inicio} options={{title:"Navegación de administrador"}}></Stack.Screen>
            <Stack.Screen name={"Formulario"} component={Formulario} options={{title:"Formulario de creación"}}></Stack.Screen>
            <Stack.Screen name={"EstadoTareas"} component={EstadoTareas} options={{title:"Vista de los clientes"}}></Stack.Screen>
            <Stack.Screen name={"DetalleTarea"} component={DetalleTarea} options={{title:"Detalle de cada cliente"}}></Stack.Screen>
            {/*<Stack.Screen name={"VistaPDF"} component={VistaPDF} options={{title:"Ver PDF"}}></Stack.Screen>*/}
          </Stack.Navigator>
        </NavigationContainer>
    );
  }


