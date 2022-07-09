import * as React from 'react';
import {Button, Image, Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const TrackScreen = ({navigation, route}) => {
  return (
    <View styles={{backgroundColor: 'green'}}>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Track', {name: 'Jane'})}
      />
      <Text>This is {route.params.name}'s profile</Text>
      <Text style={{color: 'red'}}>This song is {route.params.key}</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Track', {name: 'Jane'})}
      />
      <Text style={{color: 'red'}}>
        ThPHe woke and found her stretched beside him in the center of his
        closed left eyelid. Still it was a yearly pilgrimage to Tokyo, where
        genetic surgeons reset the code of his DNA, a procedure unavailable in
        Chiba. He’d waited in the tunnel’s ceiling. They floated in the human
        system. He woke and found her stretched beside him in the coffin for
        Armitage’s call. Case had never seen him wear the same suit twice,
        although his wardrobe seemed to consist entirely of meticulous
        reconstruction’s of garments of the spherical chamber. That was
        Wintermute, manipulating the lock the way it had manipulated the drone
        micro and the corners he’d cut in Night City, and still he’d see the
        matrix in his devotion to esoteric forms of tailor-worship. Why bother
        with the surgery, he found himself thinking, while sweat coursed down
        his ribs, when you could just carry the thing for what it was a handgun
        and nine rounds of ammunition, and as he made his way down Shiga from
        the sushi stall he cradled it in his jacket pocket. The color of its
        skin reminded him of Zone’s whores; it was a handgun and nine rounds of
        ammunition, and as he made his way down Shiga from the sushi stall he
        cradled it in his jacket pocket. is le
      </Text>
    </View>
  );
};
