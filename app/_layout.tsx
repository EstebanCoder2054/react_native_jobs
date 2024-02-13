import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useCallback, useRef } from "react";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync(); // to remain the splash screen until we call hideAAsync

const Layout = () => {
  const [fontsLoaded, fontError] = useFonts({
    // this is a nice custom font
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

    if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
