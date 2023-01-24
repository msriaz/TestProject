import {
  COMPONENT_TYPES,
  createBoolProp,
  createNumberProp,
  Triggers,
  createActionProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Deck Swiper",
  tag: "DeckSwiper",
  description: "A Component to swipe a deck of cards",
  category: COMPONENT_TYPES.swiper,
  layout: {
    height: 300,
    width: "100%",
  },
  triggers: [Triggers.OnSwipe],
  props: {
    /** Card Props */
    stackSize: createNumberProp({
      label: "Stack Size",
      description: "number of under laying cards to show",
      defaultValue: 3,
    }),
    cardIndex: createNumberProp({
      label: "Card Index",
      description: "cardIndex to start with",
      defaultValue: 0,
    }),
    horizontalSwipe: createBoolProp({
      label: "Horizontal Swipe",
      description: "enable/disable horizontal swiping",
      defaultValue: true,
    }),
    verticalSwipe: createBoolProp({
      label: "Vertical Swipe",
      description: "enable/disable vertical swiping",
      defaultValue: true,
    }),
    /** Events Callbacks */
    onSwiped: createActionProp({
      label: "On Swiped",
      description:
        "function to be called when a card is swiped. it receives the swiped card index",
    }),
    onSwipedAll: createActionProp({
      label: "On Swiped All",
      description: "function to be called when all cards have been swiped",
    }),
    onSwipedRight: createActionProp({
      label: "On Swiped Right",
      description:
        "function to be called when a card is swiped right. it receives the swiped card index",
    }),
    onSwipedLeft: createNumberProp({
      label: "On Swiped Left",
      description:
        "function to be called when a card is swiped left. it receives the swiped card index",
    }),
    onSwipedTop: createActionProp({
      label: "On Swiped Top",
      description:
        "function to be called when a card is swiped top. it receives the swiped card index",
    }),
    onSwipedBottom: createNumberProp({
      label: "On Swiped Bottom",
      description:
        "function to be called when a card is swiped bottom. it receives the swiped card index",
    }),
    onSwiping: createNumberProp({
      label: "On Swiping",
      description:
        "function to be called when a card is being moved. it receives X and Y positions",
    }),
    onSwipedAborted: createNumberProp({
      label: "On Swiped Aborted",
      description:
        "function to be called when a card is released before reaching the threshold",
    }),
    /** Animation Props */
    verticalThreshold: createNumberProp({
      label: "Vertical Threshold",
      description: "Vertical swipe threshold",
    }),
    horizontalThreshold: createNumberProp({
      label: "Horizontal Threshold",
      description: "Horizontal swipe threshold",
    }),
    swipeAnimationDuration: createNumberProp({
      label: "swipeAnimationDuration",
      description: "duration of the swipe animation",
      defaultValue: 350,
    }),
  },
};
