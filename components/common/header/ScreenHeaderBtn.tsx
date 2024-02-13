import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "./screenheader.style";

interface IProps {
  iconUrl: string;
  dimension: string | number;
  handlePress: () => void;
}

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: IProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
