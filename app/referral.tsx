import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ReferralScreen() {
  const { code } = useLocalSearchParams<{ code?: string }>();
  const router = useRouter();
  const [storedCode, setStoredCode] = useState<string | null>(null);

  useEffect(() => {
    // Check for stored referral code from web app
    const checkStoredCode = async () => {
      try {
        const stored = await AsyncStorage.getItem('fazilabs_referral_code');
        if (stored) {
          setStoredCode(stored);
          // Clear stored code after reading
          await AsyncStorage.removeItem('fazilabs_referral_code');
        }
      } catch (error) {
        console.log('Error reading stored referral code:', error);
      }
    };
    
    checkStoredCode();
    
    // In a real app, validate and store the referral code
    if (code) {
      // Store the referral code for later use
      AsyncStorage.setItem('referral_code', code);
    }
  }, [code]);

  const displayCode = code || storedCode || '—';
  const isFromWeb = storedCode && !code;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to FaziLabs Fitness</Text>
      {isFromWeb && (
        <Text style={styles.successText}>✓ Referral code applied from web!</Text>
      )}
      <Text style={styles.subtle}>Referral code</Text>
      <Text style={styles.code}>{displayCode}</Text>
      <Pressable 
        style={styles.cta} 
        onPress={() => {
          if (displayCode !== '—') {
            Alert.alert('Success!', `Referral code ${displayCode} has been applied to your account.`);
          }
          router.replace('/(tabs)');
        }}
      >
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
  successText: {
    color: '#059669',
    fontWeight: '600',
    marginBottom: 8,
  },
});


