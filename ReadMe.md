# React Native Video Library
___

[![npm version](https://img.shields.io/badge/npm%20package-1.0.0-green)](//npmjs.com/package/react-native-video-library)  ![platform support](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-orange)

> A hight customized video component for React Native that has rich set of features. It enables the developers to customize the components as per the requirements.

### Features :
- Video thumbnail at the start of the video.
- Customized video progress bar.
- Customzied video controls
- Ability to Fast-Forward and Fast-Backward the video via controls.
- Customized sound controls.
- Enhanced UX.
- Full control over the component design.
- On load video error handling.

### Demo :

https://user-images.githubusercontent.com/33158163/121813897-d0c4a200-cc8b-11eb-9c2a-4d26c771db99.mp4


![Screenshot-1](https://github.com/shariqahmed49/react-native-video-library/blob/master/assets/Screenshot-1.png?raw=true) 

![Screenshot-2](https://github.com/shariqahmed49/react-native-video-library/blob/master/assets/Screenshot-2.png?raw=true)

![Screenshot-3](https://github.com/shariqahmed49/react-native-video-library/blob/master/assets/Screenshot-3.png?raw=true)

![Screenshot-4](https://github.com/shariqahmed49/react-native-video-library/blob/master/assets/Screenshot-4.png?raw=true)

![Screenshot-5](https://github.com/shariqahmed49/react-native-video-library/blob/master/assets/Screenshot-5.png?raw=true)

![Screenshot-6](https://github.com/shariqahmed49/react-native-video-library/blob/master/assets/Screenshot-6.png?raw=true)


### Changelogs : 
- [ v 1.0.0 ]
    - React Native Video Libaray deployment.

### Installation :
```
npm install react-native-video-library
                or
yarn add react-native-video-library
```

### Importing NPM Package
```
import { VideoPlayer } from 'react-native-video-library'
```


### Props:
| Sl. No | Prop | Type |Required| Value
|-|-|-|-|-|
|1|videoTitle|String|No|""|
|2|videoTitleStyle|Object|No|{ color: 'white',fontSize: 14,fontWeight: 'bold'}|
|3|videoThumbnailImg|String OR Object|NO|' OR {}|
|4|videoSource|String OR Object|Yes|"" OR {}|
|5|videoWidth|Number|No|width = Dimensions.get("window").width|
|6|videoHeight|Number|No|height = width * .5625|
|7|videoLoadingBackgroundColor|String|No|grey|
|8|videoLoadingBackgroundOpacity|Number|No|0.55|
|9|videoLoadingSpinnerColor|String|No|red|
|10|videoLoadingSpinnerSize|enum('large','small')|No|large|
|11|videoErrorIconSize|Number|No|35|
|12|videoErrorIconColor|String|No|red|
|13|videoErrorTextStyles|Object|No|{ fontSize: 14,fontWeight: 'bold' }|
|14|videoErrorText|String|No|Oops, could not load the video.|
|15|resumeVideoFrom|Number|No|0|
|16|fastForwardIconSize|Number|No|40|
|17|fastForwardIconColor|String|No|white|
|18|fastForwardRate|Number|No|4 (in seconds)|
|19|fastBackwardIconSize|Number|No|40|
|20|fastBackwardIconColor|String|No|white|
|21|fastBackwardRate|Number|No|4 (in seconds)|
|22|pauseIconSize|Number|No|45|
|23|pauseIconColor|String|No|white|
|24|reloadIconSize|Number|No|45|
|25|reloadIconColor|String|No|white|
|26|playIconSize|Number|No|45|
|27|playIconColor|String|No|white|
|28|volumeIconSize|Number|No|23|
|29|volumeIconColor|String|No|white|
|30|videoProgressMaximumTrackTintColor|String|No|grey|
|31|videoProgressMinimumTrackTintColor|String|No|red|
|32|videoProgressThumbTintColor|String|No|red|
|33|volumeMaximumTrackTintColor|String|No|grey|
|34|volumeMinimumTrackTintColor|String|No|red|
|35|volumeThumbTintColor|String|No|red|
|36|volumeSliderWidth|Number|No|80|
|37|volumeOverlayWidth|Number|No|300|
|38|volumeOverlayBackgroundColor|String|No|black|
|39|volumeOverlayOpacity|Number|No|0.7|

### Callback/Methods :
|Sl. No| Name | Type |Required| Value
|-|-|-|-|-|
|1|onVideoPlay|Function|-|(time) => ()|
|2|onVideoPause|Function|-|(time) => ()|
|3|onVideoReload|Function|-|(time) => ()|
|4|onVideoFastFordward|Function|-|(time) => ()|
|5|onVideoFastBackward|Function|-|(time) => ()|
|6|onVideoEnd|Function|-|(time) => ()|
|7|onVideoProgress|Function|-|(videoObj, time) => ()|
|8|onVideoError|Function|-|(errorObject) => ()|
|9|onVideoLoadStart|Function|-|(VideoLoadStartObject) => ()|
|10|videoProgressOnThumbSlide|Function|-|(time) => ()|
|11|volumeOnSlide|Function|-|(volume) => ()|

### Description with Examples :

