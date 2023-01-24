# Star Rating

## Overview

Star Rating is component of [Draftbit's](https://draftbit.com) component library. Basic purpose is to add or display star rating. 

## Preview

![App preview](/assets/starrating.png)

## Platform

It Supports `android` , `ios` and `web` platforms

## Props


| Props           | type           | description                                                          | required | default |
| :-------------- | :------------- | :------------------------------------------------------------------- | :------- | :------ |
| starSize        | number         | size of star                                                         |          | 16      |
| maxStars        | number         | maximum number of stars                                              |          | 5       |
| rating          | number         | default rating                                                       |          | 0       |
| defaultValue    | number         | default rating                                                       |          | 0       |
| inactiveColor   | string         | inactive star color                                                  |          | #bdbdbd |
| activeColor     | string         | active star color                                                    |          | #616161 |
| isEditable      | bool           | bool to allow user to add rating if true                             |          | false   |
| roundValue      | bool           | round rating to nearest integer if true                              |          | false   |
| onPress         | func           | function to be called when star pressed                              |          |(rating) =>  void |
| style           | object         | custom styles for rating container                                   |          |         |



