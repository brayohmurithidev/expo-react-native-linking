import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
      <View style={styles.container}>
        <Text style={styles.title}>FaziLabs Fitness</Text>
        <Text style={styles.subtitle}>Train smarter. Track better.</Text>
        <View style={styles.row}>
          <Pressable style={styles.cta} onPress={() => router.push('/referral?code=FAZI123')}>
            <Text style={styles.ctaText}>Test Referral</Text>
          </Pressable>
          <Pressable style={[styles.cta, styles.ctaSecondary]} onPress={() => router.push('/explore')}>
            <Text style={[styles.ctaText, styles.ctaTextSecondary]}>Explore Workouts</Text>
          </Pressable>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 6,
    color: '#64748b',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  cta: {
    backgroundColor: '#4f46e5',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  ctaText: {
    color: '#fff',
    fontWeight: '600',
  },
  ctaSecondary: {
    backgroundColor: '#eef2ff',
  },
  ctaTextSecondary: {
    color: '#3730a3',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
