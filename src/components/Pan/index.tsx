import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { styles } from "./styles";

export const Pan = () => {
  const scale = useSharedValue(1);
  const rotationGesture = Gesture.Pinch().onUpdate((event) => {
    scale.value = event.scale;
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={rotationGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
};
