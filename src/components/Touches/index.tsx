import { Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { styles } from "./styles";

export const Touches = () => {
  const position = useSharedValue(100);

  function onPressIn(params: any) {
    position.value = withSpring(150);
  }

  function onPressOut(params: any) {
    position.value = withSpring(100);
  }

  const animatedStyle = useAnimatedStyle(() => ({
    width: position.value,
    height: position.value,
  }));

  return (
    <View style={styles.container}>
      <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </Pressable>
    </View>
  );
};
