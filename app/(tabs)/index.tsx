import { Image, StyleSheet, Platform, Button, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [dark, setDark] = useState(false);

  return (
    <View className={dark ? 'dark pt-20' : 'pt-20'}>
      <Text className="bg-primary">Hi</Text>
      <Button title="Toggle dark" onPress={() => setDark(!dark)} />
    </View>
  );
}
