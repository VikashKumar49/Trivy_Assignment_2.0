// // HomeScreen.js
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import faker from 'faker';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   cancelAnimation
// } from 'react-native-reanimated';

// export default function HomeScreen() {
//   const [data, setData] = useState({ title: '', number: 0 });
//   const [isFrozen, setFrozen] = useState(false);
//   const overlayOpacity = useSharedValue(0);

//   useEffect(() => {
//     setData({
//       title: faker.lorem.words(3),
//       number: faker.datatype.number(1000)
//     });
//   }, []);

//   // Animate overlay when freeze toggled
//   React.useEffect(() => {
//     overlayOpacity.value = isFrozen
//       ? withTiming(0.6, { duration: 300 })
//       : withTiming(0, { duration: 300 });
//   }, [isFrozen]);

//   const overlayStyle = useAnimatedStyle(() => ({
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(240,240,255,0.6)',
//     opacity: overlayOpacity.value,
//   }));

//   function handleFreezeToggle() {
//     // allow press feedback to complete before freezing
//     setTimeout(() => setFrozen(!isFrozen), 100);
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.title}>{data.title}</Text>
//         <Text style={styles.subtitle}>#{data.number}</Text>
//         {isFrozen && <Animated.View pointerEvents="none" style={overlayStyle} />}
//       </View>

//       <Pressable
//         style={({ pressed }) => [
//           styles.button,
//           { opacity: pressed ? 0.5 : 0.2 }
//         ]}
//         onPress={handleFreezeToggle}
//       >
//         <Text style={styles.btnText}>{isFrozen ? 'Unfreeze' : 'Freeze'}</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' },
//   card: { width: 300, height: 200, backgroundColor: '#fff', borderRadius: 12, padding: 20, alignItems: 'center', justifyContent: 'center' },
//   title: { fontSize: 24, marginBottom: 8 },
//   subtitle: { fontSize: 18, color: '#666' },
//   button: {
//     marginTop: 40,
//     width: 58,
//     height: 58,
//     borderRadius: 29,
//     borderWidth: 1,
//     borderColor: '#A90808',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#000'
//   },
//   btnText: { color: '#fff', fontSize: 12 }
// });
