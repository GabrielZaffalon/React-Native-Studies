import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const LoadingColumCard = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={[0, 1, 2, 3, 4]}
      renderItem={() => {
        return (
          <View>
            <View style={styles.row}>
              <ShimmerPlaceholder style={styles.shimmerImage} />
              <View>
                <ShimmerPlaceholder style={styles.shimmerText} shimmerStyle={{ borderRadius: 5 }} />
                <View style={styles.titles}>
                  <ShimmerPlaceholder
                    style={styles.shimmerTitle}
                    shimmerStyle={{ borderRadius: 5 }}
                  />
                  <ShimmerPlaceholder
                    style={styles.shimmerTitle}
                    shimmerStyle={{ borderRadius: 5 }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.line} />
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  shimmerImage: {
    width: 100,
    height: 100,
    borderRadius: 14,
    marginRight: 14
  },
  shimmerText: {
    width: 90,
    height: 10,
    marginTop: 8
  },
  shimmerTitle: {
    marginTop: 4,
    width: 180,
    height: 14
  },
  titles: {
    marginTop: 8
  },
  row: {
    marginLeft: 20,
    flexDirection: 'row'
  },
  line: {
    backgroundColor: '#262626',
    height: 1,
    width: '100%',
    paddingHorizontal: 22,
    marginVertical: 16
  }
})

export default LoadingColumCard
