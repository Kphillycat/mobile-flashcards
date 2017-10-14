# Mobile Flashcards

Mobile flashcards is a smartphone application that allows the user to create virtual flashcards to quiz themselves. You can add new decks, add cards to existing decks and take quizzes on any deck which will display your score in the end. There's also a daily reminder at 7:15 am every day to encourage you to keep the progress going!

Works on Android Version 8.0 (Oreo) and iPhone iOS 10.0.

In Dev Mode only, you have the ability to reset all the decks and notification data on the device.

## Installation

After you clone or download the code in this repo please run the commands below:

```
npm install
npm start or yarn start
```

This will startup the [Expo](https://expo.io/) server and will allow you to use the application on your physical device via the expo phone application - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) or [iOS](https://itunes.apple.com/app/apple-store/id982107779?ct=www&mt=8)

You can also use the [Expo XDE](https://expo.io/tools) to run the application on an Android or iPhone simulator.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

# Credits

## Expo

This project was developed using Expo find more information [here](https://docs.expo.io/versions/latest/index.html)

## React Native Element

This project was styled with React Native Elements. Please find more information [here](https://github.com/react-native-training/react-native-elements)

## Create React Native App

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

# License

Mobile Flashcards is Copyright © 2017 Keith Williams Jr. It is free software, and may be redistributed under the terms specified in the [LICENSE](https://github.com/Kphillycat/mobile-flashcards/blob/master/LICENSE) file.