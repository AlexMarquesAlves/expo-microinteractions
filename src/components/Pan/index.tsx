import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { styles } from "./styles";

export const Pan = () => {
  const position = useSharedValue(0);
  const rotationGesture = Gesture.Pan()
    .minPointers(2)
    .onUpdate((event) => {
      position.value = event.translationX;

      if (event.translationY >= 0) {
        console.log(`Indo para a direita`);
      } else {
        console.log(`Indo para a esquerda`);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={rotationGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
};
