import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {useProgress} from 'react-native-track-player';
import Slider from '@react-native-community/slider';

import styles from './styles';
import data from './manifest.json';

const trackPlayerInit = async () => {
  await TrackPlayer.setupPlayer();
  return true;
};

export const TrackScreen = ({navigation, route}) => {
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const {position, duration} = useProgress(50);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
      console.log(isTrackPlayerInit);
    };
    startPlayer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
    if (position >= duration) {
      TrackPlayer.reset();
      setIsPlaying(false);
      setSliderValue(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, duration]);

  const onButtonPressed = newTrack => {
    if (!isPlaying) {
      if (!newTrack === current) {
        TrackPlayer.reset();
      }
      TrackPlayer.add({
        url: data.data[newTrack].audio,
      });
      setCurrent(data.data[newTrack].audio);
      TrackPlayer.play();
      setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
  };

  const slidingStarted = () => {
    setIsSeeking(true);
  };

  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

  return (
    <View>
      <Text style={styles.songHeadline}>
        {data.data[route.params.key].title}{' '}
      </Text>
      <TouchableHighlight
        style={styles.albumImage}
        onPress={() => onButtonPressed(route.params.key)}>
        <Image
          source={{
            uri: data.data[route.params.key].cover,
          }}
          resizeMode="contain"
          style={styles.albumImage}
        />
      </TouchableHighlight>
      <View style={styles.controlsContainer}>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={1}
          value={sliderValue}
          minimumTrackTintColor="#111000"
          maximumTrackTintColor="#000000"
          onSlidingStart={slidingStarted}
          onSlidingComplete={slidingCompleted}
          thumbTintColor="#000"
        />
      </View>
      <Text style={styles.clockText}>
        {secondsToClock(position)} / {secondsToClock(duration)}
      </Text>
    </View>
  );

  function secondsToClock(secs) {
    var minutes = Math.floor(secs / 60);
    var seconds = ((secs % 60000) / 1).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
};
