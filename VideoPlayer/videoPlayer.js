import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import Video from 'react-native-video';
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import Icon_Ionicons from 'react-native-vector-icons/Ionicons';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import Icon_MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from 'react-native-slider';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window')
const height = width * .5625

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volumeRate: 1.0,
            paused: false,
            isVideoLoading: true,
            actualVideoDuration: 0,
            onGoingVideoDuration: 0,
            displayControlsView: true,
            progressBarDuration: 0,
            endReached: false,
            displayVolumeSlider: false,
            videoError: false,
            videoTitle: props.videoTitle,
            videoTitleStyle: props.videoTitleStyle,
            resumeVideoFrom: props.resumeVideoFrom,
            videoThumbnailImg: props.videoThumbnailImg,
            fastForwardIconSize: props.fastForwardIconSize,
            fastBackwardIconSize: props.fastBackwardIconSize,
            fastForwardIconColor: props.fastForwardIconColor,
            fastBackwardIconColor: props.fastBackwardIconColor,
            pauseIconSize: props.pauseIconSize,
            pauseIconColor: props.pauseIconColor,
            reloadIconSize: props.reloadIconSize,
            reloadIconColor: props.reloadIconColor,
            playIconSize: props.playIconSize,
            playIconColor: props.playIconColor,
            volumeIconSize: props.volumeIconSize,
            volumeIconColor: props.volumeIconColor,
            videoSource: props.videoSource,
            videoErrorText: props.videoErrorText,
            videoWidth: props.videoWidth,
            videoHeight: props.videoHeight,
            fastForwardRate: props.fastForwardRate,
            fastBackwardRate: props.fastBackwardRate,
            videoLoadingBackgroundColor: props.videoLoadingBackgroundColor,
            videoLoadingBackgroundOpacity: props.videoLoadingBackgroundOpacity,
            videoErrorIconSize: props.videoErrorIconSize,
            videoErrorIconColor: props.videoErrorIconColor,
            videoLoadingSpinnerColor: props.videoLoadingSpinnerColor,
            videoLoadingSpinnerSize: props.videoLoadingSpinnerSize,
            videoProgressMaximumTrackTintColor: props.videoProgressMaximumTrackTintColor,
            videoProgressMinimumTrackTintColor: props.videoProgressMinimumTrackTintColor,
            videoProgressThumbTintColor: props.videoProgressThumbTintColor,
            volumeMaximumTrackTintColor: props.volumeMaximumTrackTintColor,
            volumeMinimumTrackTintColor: props.volumeMinimumTrackTintColor,
            volumeThumbTintColor: props.volumeThumbTintColor,
            volumeOverlayWidth: props.volumeOverlayWidth,
            volumeOverlayBackgroundColor: props.volumeOverlayBackgroundColor,
            volumeOverlayOpacity: props.volumeOverlayOpacity,
        };
    }

    static propTypes = {
        videoTitle: PropTypes.string,
        videoTitleStyle: PropTypes.object,
        onVideoPlay: PropTypes.func,
        onVideoPause: PropTypes.func,
        onVideoReload: PropTypes.func,
        onVideoFastFordward: PropTypes.func,
        onVideoFastBackward: PropTypes.func,
        onVideoEnd: PropTypes.func,
        onVideoLoadStart: PropTypes.func,
        resumeVideoFrom: PropTypes.number,
        videoThumbnailImg: PropTypes.any,
        fastForwardIconSize: PropTypes.number,
        fastBackwardIconSize: PropTypes.number,
        fastForwardIconColor: PropTypes.string,
        fastBackwardIconColor: PropTypes.string,
        pauseIconSize: PropTypes.number,
        pauseIconColor: PropTypes.string,
        reloadIconSize: PropTypes.number,
        reloadIconColor: PropTypes.string,
        playIconSize: PropTypes.number,
        playIconColor: PropTypes.string,
        volumeIconSize: PropTypes.number,
        volumeIconColor: PropTypes.string,
        videoSource: PropTypes.any,
        videoErrorText: PropTypes.string,
        videoWidth: PropTypes.number,
        videoHeight: PropTypes.number,
        fastForwardRate: PropTypes.number,
        fastBackwardRate: PropTypes.number,
        videoLoadingBackgroundColor: PropTypes.string,
        videoLoadingBackgroundOpacity: PropTypes.number,
        videoErrorIconSize: PropTypes.number,
        videoErrorIconColor: PropTypes.string,
        videoLoadingSpinnerColor: PropTypes.string,
        videoLoadingSpinnerSize: PropTypes.oneOf(['large', 'small']),
        videoErrorTextStyles: PropTypes.object,
        videoProgressMaximumTrackTintColor: PropTypes.string,
        videoProgressMinimumTrackTintColor: PropTypes.string,
        videoProgressThumbTintColor: PropTypes.string,
        videoProgressOnThumbSlide: PropTypes.func,
        volumeMaximumTrackTintColor: PropTypes.string,
        volumeMinimumTrackTintColor: PropTypes.string,
        volumeThumbTintColor: PropTypes.string,
        volumeOnSlide: PropTypes.func,
        volumeSliderWidth: PropTypes.number,
        volumeOverlayWidth: PropTypes.number,
        volumeOverlayBackgroundColor: PropTypes.string,
        volumeOverlayOpacity: PropTypes.number
    }

    static defaultProps = {
        videoTitle: '',
        videoTitleStyle: {},
        onVideoPlay: () => { },
        onVideoPause: () => { },
        onVideoReload: () => { },
        onVideoFastFordward: () => { },
        onVideoFastBackward: () => { },
        onVideoEnd: () => { },
        onVideoProgress: () => { },
        onVideoError: () => { },
        onVideoLoadStart: () => { },
        resumeVideoFrom: 0,
        videoThumbnailImg: {},
        fastForwardIconSize: 30,
        fastBackwardIconSize: 30,
        fastForwardIconColor: 'white',
        fastBackwardIconColor: 'white',
        pauseIconSize: 45,
        pauseIconColor: 'white',
        reloadIconSize: 45,
        reloadIconColor: 'white',
        playIconSize: 45,
        playIconColor: 'white',
        volumeIconSize: 23,
        volumeIconColor: 'white',
        videoSource: {},
        videoErrorText: 'Oops, could not load video',
        videoWidth: width,
        videoHeight: height,
        fastForwardRate: 4,
        fastBackwardRate: 4,
        videoLoadingBackgroundColor: 'grey',
        videoLoadingBackgroundOpacity: 0.55,
        videoErrorIconSize: 35,
        videoErrorIconColor: 'white',
        videoLoadingSpinnerColor: 'red',
        videoLoadingSpinnerSize: 'large',
        videoErrorTextStyles: {},
        videoProgressMaximumTrackTintColor: 'grey',
        videoProgressMinimumTrackTintColor: 'red',
        videoProgressThumbTintColor: 'red',
        videoProgressOnThumbSlide: () => { },
        volumeMaximumTrackTintColor: 'grey',
        volumeMinimumTrackTintColor: 'red',
        volumeThumbTintColor: 'red',
        volumeOnSlide: () => { },
        volumeSliderWidth: 200,
        volumeOverlayWidth: 300,
        volumeOverlayBackgroundColor: 'black',
        volumeOverlayOpacity: 0.7,
    }

    static getDerivedStateFromProps(props, state) {

        if (props.videoTitle != state.videoTitle) {
            return {
                videoTitle: props.videoTitle
            }
        }

        if (props.videoTitleStyle != state.videoTitleStyle) {
            return {
                videoTitleStyle: props.videoTitleStyle
            }
        }

        if (props.resumeVideoFrom != state.resumeVideoFrom) {
            return {
                resumeVideoFrom: props.resumeVideoFrom
            }
        }

        if (props.videoThumbnailImg != state.videoThumbnailImg) {
            return {
                videoThumbnailImg: props.videoThumbnailImg
            }
        }

        if (props.fastForwardIconSize != state.fastForwardIconSize) {
            return {
                fastForwardIconSize: props.fastForwardIconSize
            }
        }

        if (props.fastBackwardIconSize != state.fastBackwardIconSize) {
            return {
                fastBackwardIconSize: props.fastBackwardIconSize
            }
        }

        if (props.fastForwardIconColor != state.fastForwardIconColor) {
            return {
                fastForwardIconColor: props.fastForwardIconColor
            }
        }

        if (props.fastBackwardIconColor != state.fastBackwardIconColor) {
            return {
                fastBackwardIconColor: props.fastBackwardIconColor
            }
        }

        if (props.pauseIconSize != state.pauseIconSize) {
            return {
                pauseIconSize: props.pauseIconSize
            }
        }

        if (props.pauseIconColor != state.pauseIconColor) {
            return {
                pauseIconColor: props.pauseIconColor
            }
        }

        if (props.reloadIconSize != state.reloadIconSize) {
            return {
                reloadIconSize: props.reloadIconSize
            }
        }

        if (props.reloadIconColor != state.reloadIconColor) {
            return {
                reloadIconColor: props.reloadIconColor
            }
        }

        if (props.playIconSize != state.playIconSize) {
            return {
                playIconSize: props.playIconSize
            }
        }

        if (props.playIconColor != state.playIconColor) {
            return {
                playIconColor: props.playIconColor
            }
        }

        if (props.volumeIconSize != state.volumeIconSize) {
            return {
                volumeIconSize: props.volumeIconSize
            }
        }

        if (props.volumeIconColor != state.volumeIconColor) {
            return {
                volumeIconColor: props.volumeIconColor
            }
        }

        if (props.videoSource != state.videoSource) {
            return {
                videoSource: props.videoSource
            }
        }

        if (props.videoErrorText != state.videoErrorText) {
            return {
                videoErrorText: props.videoErrorText
            }
        }

        if (props.videoHeight != state.videoHeight) {
            return {
                videoHeight: props.videoHeight
            }
        }

        if (props.videoWidth != state.videoWidth) {
            return {
                videoWidth: props.videoWidth
            }
        }

        if (props.fastForwardRate != state.fastForwardRate) {
            return {
                fastForwardRate: props.fastForwardRate
            }
        }

        if (props.fastBackwardRate != state.fastBackwardRate) {
            return {
                fastBackwardRate: props.fastBackwardRate
            }
        }

        if (props.videoLoadingBackgroundColor != state.videoLoadingBackgroundColor) {
            return {
                videoLoadingBackgroundColor: props.videoLoadingBackgroundColor
            }
        }

        if (props.videoLoadingBackgroundOpacity != state.videoLoadingBackgroundOpacity) {
            return {
                videoLoadingBackgroundOpacity: props.videoLoadingBackgroundOpacity
            }
        }

        if (props.videoErrorIconSize != state.videoErrorIconSize) {
            return {
                videoErrorIconSize: props.videoErrorIconSize
            }
        }

        if (props.videoErrorIconColor != state.videoErrorIconColor) {
            return {
                videoErrorIconColor: props.videoErrorIconColor
            }
        }

        if (props.videoLoadingSpinnerColor != state.videoLoadingSpinnerColor) {
            return {
                videoLoadingSpinnerColor: props.videoLoadingSpinnerColor
            }
        }

        if (props.videoLoadingSpinnerSize != state.videoLoadingSpinnerSize) {
            return {
                videoLoadingSpinnerSize: props.videoLoadingSpinnerSize
            }
        }

        if (props.videoErrorTextStyles != state.videoErrorTextStyles) {
            return {
                videoErrorTextStyles: props.videoErrorTextStyles
            }
        }

        if (props.videoProgressMaximumTrackTintColor != state.videoProgressMaximumTrackTintColor) {
            return {
                videoProgressMaximumTrackTintColor: props.videoProgressMaximumTrackTintColor
            }
        }

        if (props.videoProgressMinimumTrackTintColor != state.videoProgressMinimumTrackTintColor) {
            return {
                videoProgressMinimumTrackTintColor: props.videoProgressMinimumTrackTintColor
            }
        }

        if (props.videoProgressThumbTintColor != state.videoProgressThumbTintColor) {
            return {
                videoProgressThumbTintColor: props.videoProgressThumbTintColor
            }
        }

        if (props.volumeMaximumTrackTintColor != state.volumeMaximumTrackTintColor) {
            return {
                volumeMaximumTrackTintColor: props.volumeMaximumTrackTintColor
            }
        }

        if (props.volumeMinimumTrackTintColor != state.volumeMinimumTrackTintColor) {
            return {
                volumeMinimumTrackTintColor: props.volumeMinimumTrackTintColor
            }
        }

        if (props.volumeThumbTintColor != state.volumeThumbTintColor) {
            return {
                volumeThumbTintColor: props.volumeThumbTintColor
            }
        }

        if (props.volumeSliderWidth != state.volumeSliderWidth) {
            return {
                volumeSliderWidth: props.volumeSliderWidth
            }
        }

        if (props.volumeOverlayWidth != state.volumeOverlayWidth) {
            return {
                volumeOverlayWidth: props.volumeOverlayWidth
            }
        }

        if (props.volumeOverlayBackgroundColor != state.volumeOverlayBackgroundColor) {
            return {
                volumeOverlayBackgroundColor: props.volumeOverlayBackgroundColor
            }
        }

        if (props.volumeOverlayOpacity != state.volumeOverlayOpacity) {
            return {
                volumeOverlayOpacity: props.volumeOverlayOpacity
            }
        }

        // Return null to indicate no change to state.
        return null;
    }

    onVideoLoad = async (videoOnLoad) => {
        await this.setState({
            isVideoLoading: false,
            paused: true,
            actualVideoDuration: videoOnLoad.duration,
            onGoingVideoDuration: this.state.resumeVideoFrom,
        })
        this.player.seek(this.state.onGoingVideoDuration)
    }

    onVideoProgress = (object) => {
        this.setState({
            onGoingVideoDuration: object.currentTime,
            progressBarDuration: object.currentTime / this.state.actualVideoDuration
        })
        this.props.onVideoProgress(object, this.state.onGoingVideoDuration)
    }

    onVideoEnd = () => {
        this.setState({
            displayControlsView: true,
            paused: true,
            endReached: true
        })
        this.props.onVideoEnd()
    }

    onVideoLoadStart = (loadStartObject) => {
        this.setState({
            isVideoLoading: true,
        })
        this.props.onVideoLoadStart(loadStartObject)
    }

    onPlay = () => {
        this.setState({
            paused: false,
            endReached: false,
            displayControlsView: false
        })
        this.player.seek(this.state.onGoingVideoDuration)
        this.props.onVideoPlay(this.state.onGoingVideoDuration)
    }

    onReset = () => {
        this.setState({
            paused: false,
            endReached: false,
            displayControlsView: false
        })
        this.player.seek(0)
        this.props.onVideoReload(0)
    }

    onPause = (flag) => {
        this.setState({
            paused: true,
        })
        this.props.onVideoPause(this.secondsToTime(this.state.onGoingVideoDuration))
    }

    onVideoTouch = () => {
        this.setState({
            displayControlsView: !this.state.displayControlsView
        })
    }

    secondsToTime = (time) => {
        let secs = Math.round(time);
        var hours = Math.floor(secs / (60 * 60));

        var divisor_for_minutes = secs % (60 * 60);
        var minutes = Math.floor(divisor_for_minutes / 60);

        var divisor_for_seconds = divisor_for_minutes % 60;
        var seconds = Math.ceil(divisor_for_seconds);

        var obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };

        if (obj.h > 0)
            return `${obj.h}:${obj.m}:${obj.s}`
        else
            return `${obj.m}:${obj.s}`;
    }

    onFastForward = () => {
        if (!this.state.endReached) {
            let fastForwardSeek = this.state.onGoingVideoDuration + this.state.fastForwardRate
            this.player.seek(fastForwardSeek)
            this.setState({
                onGoingVideoDuration: fastForwardSeek,
                endReached: false,
            })
            this.props.onVideoFastFordward(this.secondsToTime(fastForwardSeek))
        }
    }

    onFastBackward = () => {
        if (this.state.onGoingVideoDuration > 0) {
            let fastBackwardSeek = this.state.onGoingVideoDuration - this.state.fastBackwardRate
            if (fastBackwardSeek > 0) {
                this.player.seek(fastBackwardSeek)
                this.setState({
                    onGoingVideoDuration: fastBackwardSeek,
                    endReached: false,
                })
                this.props.onVideoFastBackward(this.secondsToTime(fastBackwardSeek))
            } else {
                this.player.seek(0)
                this.setState({
                    onGoingVideoDuration: 0,
                    endReached: false,
                })
                this.props.onVideoFastBackward(0)
            }
        }
    }

    renderVolumeIcon = () => {
        if (this.state.volumeRate == 0.0) {
            // Mute
            return 'ios-volume-mute';
        } else if (this.state.volumeRate > 0.0 && this.state.volumeRate <= 0.4) {
            return 'ios-volume-low'
        } else if (this.state.volumeRate > 0.4 && this.state.volumeRate <= 0.9) {
            return 'ios-volume-medium'
        } else if (this.state.volumeRate > 0.9) {
            return 'md-volume-high'
        }
    }

    renderVideoProgressBar = (width) => {
        return (
            <View>
                <Slider
                    value={this.state.onGoingVideoDuration}
                    minimumValue={0}
                    maximumValue={this.state.actualVideoDuration}
                    maximumTrackTintColor={this.state.videoProgressMaximumTrackTintColor}
                    minimumTrackTintColor={this.state.videoProgressMinimumTrackTintColor}
                    thumbTintColor={this.state.videoProgressThumbTintColor}
                    thumbStyle={[{ width: 0, height: 0 }, (this.state.displayControlsView || this.state.paused) && { width: 10, height: 10 }]}
                    // disabled={this.state.displayControlsView ? false : true}
                    trackStyle={{ height: 3, borderRadius: 10 }}
                    style={{ width: width }}
                    onSlidingComplete={(val) => this.onSlideComplete(val)}
                />
            </View>
        )
    }

    onSlideComplete = (time) => {
        this.player.seek(time)
        this.setState({
            onGoingVideoDuration: time
        })
        this.props.videoProgressOnThumbSlide(this.secondsToTime(time))
    }

    onVolumeSlide = (volume) => {
        this.setState({
            volumeRate: volume
        })
        this.props.volumeOnSlide(volume)
    }

    displayVolumeSlider = () => {
        this.setState({
            displayVolumeSlider: !this.state.displayVolumeSlider,
            displayControlsView: false
        })
    }

    onVideoError = (err) => {
        this.setState({
            videoError: true
        })
        this.props.onVideoError(err)
    }

    onVideoBufferring = (buffer) => {
        // console.log('bufferring')
    }

    renderVideoThumbnailImg = () => {
        if (this.state.videoThumbnailImg.uri) {
            let returnObj = { uri: this.state.videoThumbnailImg.uri }
            return returnObj;
        } else {
            let returnObj = this.state.videoThumbnailImg;
            return returnObj;
        }
    }

    muteAndUnmuteVolume = () => {
        if (this.state.volumeRate > 0.0) {
            this.setState({
                volumeRate: 0.0
            })
        } else {
            this.setState({
                volumeRate: 1.0
            })
        }
    }

    hideVolumePopUp = () => {
        this.setState({
            displayVolumeSlider: false
        })
    }

    render() {
        return (
            <View>
                <View>
                    <TouchableWithoutFeedback onPress={() => this.onVideoTouch()}>
                        <View style={{ alignItems: 'center' }}>
                            <Video
                                ref={ref => this.player = ref}
                                source={this.state.videoSource}
                                rate={1.0}
                                volume={this.state.volumeRate}
                                isMuted={true}
                                resizeMode="stretch"
                                shouldPlay
                                isLooping
                                paused={this.state.paused}
                                onError={(err) => this.onVideoError(err)}
                                onLoad={(videoOnLoad) => this.onVideoLoad(videoOnLoad)}
                                onLoadStart={(loadStartObject) => this.onVideoLoadStart(loadStartObject)}
                                onProgress={(object) => this.onVideoProgress(object)}
                                onEnd={() => this.onVideoEnd()}
                                style={[styles.videoContainer, { width: this.state.videoWidth, height: this.state.videoHeight }]}
                                fullscreen={true}
                                onBuffer={(buffer) => this.onVideoBufferring(buffer)}
                            />

                            {this.state.displayVolumeSlider &&
                                <TouchableWithoutFeedback onPress={() => this.hideVolumePopUp()}>
                                    <View style={[styles.volumePopUpContainer, { width: this.state.videoWidth, height: this.state.videoHeight - 15 }]}>
                                        <TouchableWithoutFeedback>
                                            <View style={[styles.volumePopUpChildContainer, { width: this.state.volumeOverlayWidth, backgroundColor: this.state.volumeOverlayBackgroundColor, opacity: this.state.volumeOverlayOpacity }]}>
                                                <View style={{ flexDirection: 'row' }}>

                                                    <View style={{ paddingRight: 7, justifyContent: 'center' }}>
                                                        <TouchableOpacity onPress={() => this.muteAndUnmuteVolume()}>
                                                            <Icon_Ionicons name={this.renderVolumeIcon()} color={this.state.volumeIconColor} size={this.state.volumeIconSize} />
                                                        </TouchableOpacity>
                                                    </View>

                                                    <View style={{ justifyContent: 'center' }}>
                                                        <Slider
                                                            value={this.state.volumeRate}
                                                            minimumValue={0.0}
                                                            maximumValue={1.0}
                                                            step={0.1}
                                                            maximumTrackTintColor={this.state.volumeMaximumTrackTintColor}
                                                            minimumTrackTintColor={this.state.volumeMinimumTrackTintColor}
                                                            thumbTintColor={this.state.volumeThumbTintColor}
                                                            thumbStyle={styles.volumeSliderThumbStyle}
                                                            trackStyle={styles.volumeSliderTrackStyle}
                                                            style={[styles.volumeSliderStyle, { width: this.state.volumeSliderWidth }]}
                                                            thumbTouchSize={styles.volumeSliderThumbTouchSize}
                                                            onSlidingComplete={(val) => this.onVolumeSlide(val)}
                                                        />
                                                    </View>

                                                </View>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </TouchableWithoutFeedback>
                            }

                            {/* Video Loading Spinner & Error Text */}
                            {this.state.isVideoLoading &&
                                <View style={[styles.videoLoadingContainer, { width: this.state.videoWidth, height: this.state.videoHeight, backgroundColor: this.state.videoLoadingBackgroundColor, opacity: this.state.videoLoadingBackgroundOpacity }]}>
                                    {!this.state.videoError &&
                                        <View>
                                            <ActivityIndicator color={this.state.videoLoadingSpinnerColor} size={this.state.videoLoadingSpinnerSize} />
                                        </View>
                                    }

                                    {this.state.videoError &&
                                        <View>
                                            <View style={styles.videoErrorIconContainer}>
                                                <Icon_MaterialIcons name={'error'} color={this.state.videoErrorIconColor} size={this.state.videoErrorIconSize} />
                                            </View>

                                            <View style={styles.videoErrorSeperationStyles} />

                                            <View>
                                                <Text style={[styles.videoErrorTextStyles, this.state.videoErrorTextStyles]}>
                                                    {this.state.videoErrorText}
                                                </Text>
                                            </View>
                                        </View>
                                    }
                                </View>
                            }

                            {((this.state.displayControlsView || this.state.paused) && !this.state.isVideoLoading) &&
                                <View style={[styles.videoControlsContainer, { width: this.state.videoWidth, height: this.state.videoHeight }]}>

                                    {/* source={this.state.onGoingVideoDuration <= 0 ? { uri: 'https://www.blendernation.com/wp-content/uploads/2016/03/elephants-dream-turns-10.jpeg' } : { uri: '' }} */}
                                    <ImageBackground source={this.state.onGoingVideoDuration <= 0 ? this.renderVideoThumbnailImg() : {}} resizeMode={'stretch'} style={[styles.thumbnailContainer, { width: this.state.videoWidth, height: this.state.videoHeight }]}>

                                        {/* Video Title */}
                                        <View style={{ position: 'absolute', top: 10 }}>
                                            <Text style={styles.videoTitleTextStyles, this.state.videoTitleStyle}>
                                                {this.state.videoTitle}
                                            </Text>
                                        </View>

                                        {/* Controllers - Backward , Play/Reset , Forward */}
                                        <View style={styles.controllersStyle}>

                                            {!this.state.isVideoLoading &&
                                                <View style={styles.fastBackwardContainer}>
                                                    <TouchableOpacity onPress={() => this.onFastBackward(false)}>
                                                        <Icon_Entypo name={'controller-fast-backward'} color={this.state.fastBackwardIconColor} size={this.state.fastBackwardIconSize} />
                                                    </TouchableOpacity>
                                                </View>
                                            }

                                            <View>
                                                {(!this.state.isVideoLoading && this.state.paused) &&
                                                    <View>
                                                        {this.state.endReached ?
                                                            <TouchableOpacity onPress={() => this.onReset(false)}>
                                                                <Icon_AntDesign name={'reload1'} color={this.state.playIconColor} size={this.state.playIconSize} />
                                                            </TouchableOpacity>
                                                            :
                                                            <TouchableOpacity onPress={() => this.onPlay(false)}>
                                                                <Icon_AntDesign name={'play'} color={this.state.playIconColor} size={this.state.playIconSize} />
                                                            </TouchableOpacity>
                                                        }
                                                    </View>
                                                }

                                                {(!this.state.isVideoLoading && !this.state.paused) &&
                                                    <TouchableOpacity onPress={() => this.onPause(true)}>
                                                        <Icon_AntDesign name={'pausecircle'} color={this.state.pauseIconColor} size={this.state.pauseIconSize} />
                                                    </TouchableOpacity>
                                                }
                                            </View>

                                            {!this.state.isVideoLoading &&
                                                <View style={styles.fastForwardContainer}>
                                                    <TouchableOpacity onPress={() => this.onFastForward(false)}>
                                                        <Icon_Entypo name={'controller-fast-forward'} color={this.state.fastForwardIconColor} size={this.state.fastForwardIconSize} />
                                                    </TouchableOpacity>
                                                </View>
                                            }

                                        </View>

                                        {/* Video Time, Volume */}
                                        {(!this.state.isVideoLoading && !this.state.displayVolumeSlider) &&
                                            <View style={styles.durationSpeakerVolumeContainer}>
                                                <View style={styles.directionRow}>
                                                    <View style={styles.videoDurationContainer}>
                                                        <Text style={styles.videoDurationText}>
                                                            {this.secondsToTime(this.state.onGoingVideoDuration)} / {this.secondsToTime(this.state.actualVideoDuration)}
                                                        </Text>
                                                    </View>

                                                    <View style={[styles.speakerVolumeSliderContainer, this.state.displayVolumeSlider && { bottom: 0 }]}>
                                                        <View style={styles.speakerVolumeSliderChildContainer}>
                                                            <View style={styles.speakerContainer}>
                                                                <TouchableOpacity onPress={() => this.displayVolumeSlider()}>
                                                                    <Icon_Ionicons name={this.renderVolumeIcon()} color={this.state.volumeIconColor} size={this.state.volumeIconSize} />
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        }

                                    </ImageBackground>
                                </View>
                            }

                        </View>
                    </TouchableWithoutFeedback>

                    {!this.state.isVideoLoading &&
                        <View style={[styles.progressViewContainer]}>
                            <View style={[styles.progressBarContainer]}>
                                {this.renderVideoProgressBar(this.state.videoWidth)}
                            </View>
                        </View>
                    }
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    videoContainer: {
        width: width,
        height: height
    },
    progressBarContainer: {
        position: 'absolute',
        bottom: -20,
    },
    progressViewContainer: {
        alignItems: 'center'
    },
    fastBackwardContainer: {
        paddingRight: 25
    },
    fastForwardContainer: {
        paddingLeft: 25
    },
    controllersStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    videoErrorIconContainer: {
        alignItems: 'center'
    },
    videoErrorSeperationStyles: {
        paddingVertical: 5
    },
    videoLoadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        position: 'absolute',
        backgroundColor: 'grey',
        opacity: 0.55
    },
    videoControlsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        position: 'absolute',
        width: width,
        height: height,
        backgroundColor: 'black',
        opacity: 0.6
    },
    durationSpeakerVolumeContainer: {
        position: 'absolute',
        bottom: 6,
        left: 6,
        right: 6
    },
    videoTitleTextStyles: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    videoDurationContainer: {
        alignItems: 'flex-start'
    },
    videoDurationText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    speakerVolumeSliderContainer: {
        position: 'absolute',
        right: 4,
        bottom: 0
    },
    speakerVolumeSliderChildContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    speakerContainer: {
        paddingRight: 3,
        zIndex: 3,
    },
    volumeSliderContainer: {
        justifyContent: 'center',
        zIndex: 1
    },
    volumeSliderThumbStyle: {
        width: 13.5,
        height: 13.5
    },
    volumeSliderTrackStyle: {
        height: 3,
        borderRadius: 10
    },
    volumeSliderStyle: {
        width: 80,
    },
    volumeSliderThumbTouchSize: {
        width: 50,
        height: 50
    },
    directionRow: {
        flexDirection: 'row'
    },
    thumbnailContainer: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    videoErrorTextStyles: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    volumePopUpContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'transparent',
    },
    volumePopUpChildContainer: {
        width: 300,
        borderRadius: 5,
        backgroundColor: 'black',
        opacity: 0.7,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 4
    }
});

module.exports = {
    VideoPlayer: VideoPlayer,
}
