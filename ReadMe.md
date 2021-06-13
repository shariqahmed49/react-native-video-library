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
|1|[videoTitle](#videoTitle-)|String|No|""|
|2|[videoTitleStyle](#videoTitleStyle-)|Object|No|{ color: 'white',fontSize: 14,fontWeight: 'bold'}|
|3|[videoThumbnailImg](#videoThumbnailImg-)|String OR Object|NO|' OR {}|
|4|[videoSource](#videoSource-)|String OR Object|Yes|"" OR {}|
|5|[videoWidth](#videoWidth-)|Number|No|width = Dimensions.get("window").width|
|6|[videoHeight](#videoHeight-)|Number|No|height = width * .5625|
|7|[videoLoadingBackgroundColor](#videoLoadingBackgroundColor-)|String|No|grey|
|8|[videoLoadingBackgroundOpacity](#videoLoadingBackgroundOpacity-)|Number|No|0.55|
|9|[videoLoadingSpinnerColor](#videoLoadingSpinnerColor-)|String|No|red|
|10|[videoLoadingSpinnerSize](#videoLoadingSpinnerSize-)|enum('large','small')|No|large|
|11|[videoErrorIconSize](#videoErrorIconSize-)|Number|No|35|
|12|[videoErrorIconColor](#videoErrorIconColor-)|String|No|red|
|13|[videoErrorTextStyles](#videoErrorTextStyles-)|Object|No|{ fontSize: 14,fontWeight: 'bold' }|
|14|[videoErrorText](#videoErrorText-)|String|No|Oops, could not load the video.|
|15|[resumeVideoFrom](#resumeVideoFrom-)|Number|No|0|
|16|[fastForwardIconSize](#fastForwardIconSize-)|Number|No|40|
|17|[fastForwardIconColor](#fastForwardIconColor-)|String|No|white|
|18|[fastForwardRate](#fastForwardRate-)|Number|No|4 (in seconds)|
|19|[fastBackwardIconSize](#fastBackwardIconSize-)|Number|No|40|
|20|[fastBackwardIconColor](#fastBackwardIconColor-)|String|No|white|
|21|[fastBackwardRate](#fastBackwardRate-)|Number|No|4 (in seconds)|
|22|[pauseIconSize](#pauseIconSize-)|Number|No|45|
|23|[pauseIconColor](#pauseIconColor-)|String|No|white|
|24|[reloadIconSize](#reloadIconSize-)|Number|No|45|
|25|[reloadIconColor](#reloadIconColor-)|String|No|white|
|26|[playIconSize](#playIconSize-)|Number|No|45|
|27|[playIconColor](#playIconColor-)|String|No|white|
|28|[volumeIconSize](#volumeIconSize-)|Number|No|23|
|29|[volumeIconColor](#volumeIconColor-)|String|No|white|
|30|[videoProgressMaximumTrackTintColor](#videoProgressMaximumTrackTintColor-)|String|No|grey|
|31|[videoProgressMinimumTrackTintColor](#videoProgressMinimumTrackTintColor-)|String|No|red|
|32|[videoProgressThumbTintColor](#videoProgressThumbTintColor-)|String|No|red|
|33|[volumeMaximumTrackTintColor](#volumeMaximumTrackTintColor-)|String|No|grey|
|34|[volumeMinimumTrackTintColor](#volumeMinimumTrackTintColor-)|String|No|red|
|35|[volumeThumbTintColor](#volumeThumbTintColor-)|String|No|red|
|36|[volumeSliderWidth](#volumeSliderWidth-)|Number|No|80|
|37|[volumeOverlayWidth](#volumeOverlayWidth-)|Number|No|300|
|38|[volumeOverlayBackgroundColor](#volumeOverlayBackgroundColor-)|String|No|black|
|39|[volumeOverlayOpacity](#volumeOverlayOpacity-)|Number|No|0.7|

### Callback/Methods :
|Sl. No| Name | Type |Required| Value
|-|-|-|-|-|
|1|[onVideoPlay](#onVideoPlay-)|Function|-|(time) => ()|
|2|[onVideoPause](#onVideoPause-)|Function|-|(time) => ()|
|3|[onVideoReload](#onVideoReload-)|Function|-|(time) => ()|
|4|[onVideoFastFordward](#onVideoFastFordward-)|Function|-|(time) => ()|
|5|[onVideoFastBackward](#onVideoFastBackward-)|Function|-|(time) => ()|
|6|[onVideoEnd](#onVideoEnd-)|Function|-|(time) => ()|
|7|[onVideoProgress](#onVideoProgress-)|Function|-|(videoObj, time) => ()|
|8|[onVideoError](#onVideoError-)|Function|-|(errorObject) => ()|
|9|[onVideoLoadStart](#onVideoLoadStart-)|Function|-|(VideoLoadStartObject) => ()|
|10|[videoProgressOnThumbSlide](#videoProgressOnThumbSlide-)|Function|-|(time) => ()|
|11|[volumeOnSlide](#volumeOnSlide-)|Function|-|(volume) => ()|

### Description with Examples :
#### videoTitle : 
