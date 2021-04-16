import React, {useCallback, useMemo, useState} from 'react'
import {View, Text, TouchableOpacity, Animated} from 'react-native'

export default function Buttons({children, style, onPress}) {
  const [anime] = useState(new Animated.Value(1))

  const up = useCallback(() => {
      Animated.timing( anime, {toValue: 1, useNativeDriver: false, duration: 200}, ).start()
  }, [anime]) 

  const down = useCallback(() => {
    Animated.timing( anime, {toValue: 0, useNativeDriver: false, duration: 80}).start()
}, [anime ])

 const animationScale = useMemo(() => { 
   return ({ 
    transform: [{scale: anime.interpolate({
      inputRange:[0,1],
      outputRange: [0.5,1]
    })}]
   })
  }, [anime])

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} onPressOut={() => up()} onPressIn= {() => down()} style = {style}> 

    <Animated.View style= {animationScale}>
    {children}
    </Animated.View>

 </TouchableOpacity>
  )
 }