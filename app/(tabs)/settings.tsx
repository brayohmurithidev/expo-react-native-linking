import Constants from 'expo-constants';
import { StyleSheet, Text, View, Pressable, Alert, ActivityIndicator } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { useReferralLink, useGenerateReferralLink, useShareReferralLink } from '../../api/hooks';
import * as Clipboard from 'expo-clipboard';
import * as Sharing from 'expo-sharing';

export default function SettingsScreen() {
    const { user, logout } = useAuth();
    const { data: referralLink, isLoading } = useReferralLink();
    const generateMutation = useGenerateReferralLink();
    const shareMutation = useShareReferralLink();

    const handleGenerateLink = async () => {
        try {
            console.log('User info before generating link:', user);
            console.log('Auth token available:', !!user);
            await generateMutation.mutateAsync();
            Alert.alert('Success', 'New referral link generated!');
        } catch (error) {
            console.error('Generate link error:', error);
            Alert.alert('Error', 'Failed to generate referral link');
        }
    };

    const handleCopyLink = async () => {
        if (referralLink?.url && referralLink?.code) {
            await Clipboard.setStringAsync(referralLink.url);
            Alert.alert('Copied!', 'Referral link copied to clipboard');
        } else {
            Alert.alert('Error', 'No referral link available. Please generate one first.');
        }
    };

    const handleShareLink = async () => {
        if (referralLink?.url && referralLink?.code) {
            try {
                await shareMutation.mutateAsync(referralLink.code);
                await Sharing.shareAsync(referralLink.url, {
                    dialogTitle: 'Share your referral link',
                });
            } catch (error) {
                Alert.alert('Error', 'Failed to share referral link');
            }
        } else {
            Alert.alert('Error', 'No referral link available. Please generate one first.');
        }
    };

    const handleLogout = async () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Logout', style: 'destructive', onPress: logout },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            
            {/* User Info */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Profile</Text>
                <Text style={styles.userInfo}>{user?.name}</Text>
                <Text style={styles.userEmail}>{user?.email}</Text>
            </View>

            {/* Referral Link */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Referral Link</Text>
                {isLoading ? (
                    <ActivityIndicator size="small" color="#4f46e5" />
                ) : (
                    <>
                        <View style={styles.linkContainer}>
                            <Text style={styles.linkText} numberOfLines={2}>
                                {referralLink?.url || 'No referral link'}
                            </Text>
                        </View>
                        <View style={styles.buttonRow}>
                            <Pressable 
                                style={[styles.button, styles.primaryButton]} 
                                onPress={handleGenerateLink}
                                disabled={generateMutation.isPending}
                            >
                                <Text style={styles.buttonText}>
                                    {generateMutation.isPending ? 'Generating...' : 'Generate New'}
                                </Text>
                            </Pressable>
                            <Pressable 
                                style={[styles.button, styles.secondaryButton]} 
                                onPress={handleCopyLink}
                            >
                                <Text style={styles.secondaryButtonText}>Copy</Text>
                            </Pressable>
                            <Pressable 
                                style={[styles.button, styles.shareButton]} 
                                onPress={handleShareLink}
                                disabled={shareMutation.isPending}
                            >
                                <Text style={styles.buttonText}>Share</Text>
                            </Pressable>
                        </View>
                    </>
                )}
            </View>

            {/* App Info */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>App Info</Text>
                <Text style={styles.infoText}>Scheme: exporeferallinking://</Text>
                <Text style={styles.infoText}>Referral path: /referral?code=...</Text>
                <Text style={styles.infoText}>Version: {Constants.expoConfig?.version ?? '1.0.0'}</Text>
            </View>

            {/* Logout */}
            <Pressable style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Logout</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        marginBottom: 24,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 12,
        color: '#1e293b',
    },
    userInfo: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e293b',
    },
    userEmail: {
        fontSize: 14,
        color: '#64748b',
        marginTop: 2,
    },
    linkContainer: {
        backgroundColor: '#f8fafc',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    },
    linkText: {
        fontSize: 14,
        color: '#4f46e5',
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 8,
        flexWrap: 'wrap',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        minWidth: 80,
        alignItems: 'center',
    },
    primaryButton: {
        backgroundColor: '#4f46e5',
    },
    secondaryButton: {
        backgroundColor: '#f1f5f9',
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    shareButton: {
        backgroundColor: '#059669',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    secondaryButtonText: {
        color: '#4f46e5',
        fontSize: 14,
        fontWeight: '600',
    },
    infoText: {
        fontSize: 14,
        color: '#64748b',
        marginBottom: 4,
    },
    logoutButton: {
        backgroundColor: '#fee2e2',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 20,
    },
    logoutText: {
        color: '#dc2626',
        fontSize: 16,
        fontWeight: '600',
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
