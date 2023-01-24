import React from "react";
import RNDeckSwiper from "react-native-deck-swiper";

export interface DeckSwiperProps<T> {
  /** Card Props */
  stackSize?: number;
  cardIndex?: number;
  horizontalSwipe?: boolean;
  verticalSwipe?: boolean;
  children: React.ReactNode;
  data: Array<T>;
  /** Events Callbacks */
  onSwiped?: (index: number) => void;
  onSwipedAll?: () => void;
  onSwipedLeft?: (index: number) => void;
  onSwipedRight?: (index: number) => void;
  onSwipedBottom?: (index: number) => void;
  onSwipedTop?: (index: number) => void;
  onSwiping?: (x: number, y: number) => void;
  onSwipedAborted?: () => void;
  /** Animation Props */
  verticalThreshold?: number;
  horizontalThreshold?: number;
  swipeDuration?: number;
  /** Rest */
  rest?: any;
}

const DeckSwiper = ({
  data,
  children,
  rest,
  stackSize,
  cardIndex,
  horizontalSwipe,
  verticalSwipe,
  onSwiped,
  onSwipedAborted,
  onSwipedAll,
  onSwipedLeft,
  onSwipedRight,
  onSwipedBottom,
  onSwipedTop,
  onSwiping,
  verticalThreshold,
  horizontalThreshold,
  swipeDuration,
}: DeckSwiperProps<any>) => {
  if (!data || !children) {
    return;
  }
  return (
    <RNDeckSwiper
      cards={data}
      /*@ts-expect-error  */
      renderCard={(card: any) => children(card)}
      animateOverlayLabelsOpacity
      stackSize={stackSize}
      cardIndex={cardIndex}
      horizontalSwipe={horizontalSwipe}
      verticalSwipe={verticalSwipe}
      onSwiped={onSwiped}
      onSwipedAborted={onSwipedAborted}
      onSwipedAll={onSwipedAll}
      onSwipedLeft={onSwipedLeft}
      onSwipedRight={onSwipedRight}
      onSwipedBottom={onSwipedBottom}
      onSwipedTop={onSwipedTop}
      onSwiping={onSwiping}
      verticalThreshold={verticalThreshold}
      horizontalThreshold={horizontalThreshold}
      swipeAnimationDuration={swipeDuration}
      {...rest}
    />
  );
};

DeckSwiper.defaultProps = {
  stackSize: 3,
};


export default DeckSwiper;
