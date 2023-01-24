# Deck Swiper
## Overview
Deck Swiper is based on [react-native-deck-swiper](https://github.com/webraptor/react-native-deck-swiper#readme) with a minor difference i.e: 
- It takes `children` and render them as `renderCard` prop of [react-native-deck-swiper](https://github.com/webraptor/react-native-deck-swiper#readme).
- It takes `data` (array of data for the cards to be rendered) as prop and render it as `cards` prop of [react-native-deck-swiper](https://github.com/webraptor/react-native-deck-swiper#readme).

## Preview

![App preview](/assets/preview.gif)

## Platform
It Supports `android`, `ios` and `web` platforms

## Props

### Card props

| Props           | type           | description                                                          | required | default |
| :-------------- | :------------- | :------------------------------------------------------------------- | :------- | :------ |
| data            | array          | array of data for the cards to be rendered                           | required |
| cardIndex       | number         | cardIndex to start with                                              |          | 0       |
| horizontalSwipe | bool           | enable/disable horizontal swiping                                    |          | true    |
| verticalSwipe   | bool           | enable/disable vertical swiping                                      |          | true    |
| stackSize       | number         | number of underlaying cards to show (showSecondCard must be enabled) |          | 3       |

### Event callbacks

| Props             | type   | description                                                                           | default |
| :---------------- | :----- | :------------------------------------------------------------------------------------ | :------ |
| onSwipedAll       | func   | function to be called when all cards have been swiped                                 |         | () => {} |
| onSwiped          | func   | function to be called when a card is swiped. it receives the swiped card index        |         | (cardIndex) => {} |
| onSwipedAborted   | func   | function to be called when a card is released before reaching the threshold           |         | () => {} |
| onSwipedLeft      | func   | function to be called when a card is swiped left. it receives the swiped card index   |         | (cardIndex) => {} |
| onSwipedRight     | func   | function to be called when a card is swiped right. it receives the swiped card index  |         | (cardIndex) => {} |
| onSwipedTop       | func   | function to be called when a card is swiped top. it receives the swiped card index    |         | (cardIndex) => {} |
| onSwipedBottom    | func   | function to be called when a card is swiped bottom. it receives the swiped card index |         | (cardIndex) => {} |
| onSwiping         | func   | function to be called when a card is being moved. it receives X and Y positions       |         | (x, y) => {} |

### Swipe animation props

| Props                  | type   | description                     | default    |
| :--------------------- | :----- | :------------------------------ | :--------- |
| verticalThreshold      | number | vertical swipe threshold        | height / 5 |
| horizontalThreshold    | number | horizontal swipe threshold      | width / 4  |
| swipeDuration          | number | duration of the swipe animation | 350        |


### Rest

> This component support all props of [react-native-deck-swiper](https://github.com/webraptor/react-native-deck-swiper#readme). 