import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Pressable,
} from "react-native";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
import { colors } from "@material-ui/core";

type Props = {
  starSize?: number;
  maxStars?: number;
  rating?: number;
  defaultValue?: number;
  isEditable?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  roundValue?: boolean;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  onPress?: (newValue: number) => void;
} & IconSlot;

const StarRating: React.FC<React.PropsWithChildren<Props>> = ({
  Icon,
  starSize,
  maxStars,
  rating,
  defaultValue,
  isEditable = false,
  roundValue = false,
  activeColor,
  inactiveColor,
  style,
  onPress,
  ...rest
}) => {
  const [localRating, setLocalRating] = useState<number>(
    rating || defaultValue || 0
  );

  const setRating = useCallback(
    (ratingValue: number) => {
      var roundRating = ratingValue;
      if (roundValue) {
        let floorRating = Math.floor(roundRating);
        let diff = roundRating - floorRating;
        roundRating = diff >= 0.5 ? Math.ceil(roundRating) : floorRating;
      }
      setLocalRating(roundRating);
    },
    [roundValue]
  );

  useEffect(() => {
    if (rating != null) {
      setRating(rating);
    }
  }, [rating, setRating]);

  useEffect(() => {
    if (defaultValue != null) {
      setRating(defaultValue);
    }
  }, [defaultValue, setRating]);

  const ratingHandler = useCallback(
    (r: number) => {
      setRating(r);
      !!onPress && onPress(r);
    },
    [onPress, setRating]
  );

  const ratingRounded = Math.round(localRating * 2) / 2;

  return (
    <View style={[styles.container, style]} {...rest}>
      {[...Array(maxStars)].map((_, i) => (
        <View key={i} style={{ display: "flex" }}>
          <Icon
            name={
              ratingRounded - i === 0.5
                ? "MaterialIcons/star-half"
                : "MaterialIcons/star"
            }
            size={starSize || 16}
            color={ratingRounded > i ? activeColor : inactiveColor}
          />
          {isEditable && (
            <View style={styles.touchContainer}>
              <Pressable
                style={styles.pressable}
                onPress={() => ratingHandler(i + 0.5)}
              />
              <Pressable
                style={styles.pressable}
                onPress={() => ratingHandler(i + 1)}
              />
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

StarRating.defaultProps = {
  starSize: 16,
  maxStars: 5,
  rating: 0,
  inactiveColor: colors.grey[400],
  isEditable: false,
  roundValue: false,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  touchContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1,
  },
  pressable: {
    flex: 1,
    height: "100%",
    width: "50%",
  },
});

export default withTheme(StarRating);
