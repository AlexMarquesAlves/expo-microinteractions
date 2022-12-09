import { View } from "react-native";

import Animated from "react-native-reanimated";
import { styles } from "./styles";

export const LongPress = () => {
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box]} />
    </View>
  );
};
