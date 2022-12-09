import { Pressable, View } from "react-native";

import { Gesture, GestureDetector } from "react-native-gesture-handler/";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { styles } from "./styles";

export const Touches = () => {
  const position = useSharedValue(100);
  const dobleTapActive = useSharedValue(0);

  function onPressIn(params: any) {
    position.value = withSpring(150);
  }

  function onPressOut(params: any) {
    position.value = withSpring(100);
  }

  const onGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      dobleTapActive.value = withTiming(dobleTapActive.value === 0 ? 1 : 0, {
        duration: 500,
      });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    width: position.value,
    height: position.value,
    backgroundColor: interpolateColor(
      dobleTapActive.value,
      [0, 1],
      ["#8527e5", "#bf5a07"]
    ),
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={onGesture}>
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </Pressable>
      </GestureDetector>
    </View>
  );
};
