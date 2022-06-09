import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const LoadingRowCard = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={[0, 1, 2, 3, 4]}
      horizontal={true}
      renderItem={() => {
        return (
          <View style={styles.highlights}>
            <ShimmerPlaceholder style={styles.shimmerImage} />
            <View style={styles.titles}>
              <ShimmerPlaceholder style={styles.shimmerTitle} shimmerStyle={{ borderRadius: 5 }} />
              <ShimmerPlaceholder style={styles.shimmerTitle} shimmerStyle={{ borderRadius: 5 }} />
            </View>
            <ShimmerPlaceholder style={styles.shimmerText} shimmerStyle={{ borderRadius: 5 }} />
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  shimmerImage: {
    width: 218,
    height: 160,
    borderRadius: 14,
    marginRight: 14
  },
  shimmerText: {
    width: 90,
    height: 8,
    marginTop: 8
  },
  shimmerTitle: {
    marginTop: 4,
    width: 180,
    height: 12
  },
  titles: {
    marginTop: 8
  },
  highlights: {
    marginLeft: 20
  }
})

export default LoadingRowCard
