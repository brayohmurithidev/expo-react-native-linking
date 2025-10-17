import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ReferralScreen() {
  const { code } = useLocalSearchParams<{ code?: string }>();
  const router = useRouter();

  useEffect(() => {
    // In a real app, validate and store the referral code, then maybe navigate.
  }, [code]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to FaziLabs Fitness</Text>
      <Text style={styles.subtle}>Referral code</Text>
      <Text style={styles.code}>{code ?? '—'}</Text>
      <Pressable style={styles.cta} onPress={() => router.replace('/(tabs)') }>
        <Text style={styles.ctaText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtle: {
    color: '#64748b',
  },
  code: {
    fontSize: 18,
    fontWeight: '600',
  },
  cta: {
    marginTop: 16,
    backgroundColor: '#4f46e5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  ctaText: {
    color: '#fff',
    fontWeight: '600',
  },
});


