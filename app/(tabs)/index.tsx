import {useRouter} from 'expo-router';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useAuth} from '../../contexts/AuthContext';

export default function HomeScreen() {
    const router = useRouter();
    const {user, logout} = useAuth();

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 17) return 'Good Afternoon';
        return 'Good Evening';
    };

    const handleLogout = async () => {
        await logout();
    };

    if (!user) return null;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileSection}>
                    <Image
                        source={{
                            uri: user.avatar
                                ? `${process.env.EXPO_PUBLIC_API_BASE_URL || 'https://aara-api.fazilabs.com/api'}/users/avatar/${user.avatar}`
                                : 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.name) + '&background=4f46e5&color=fff'
                        }}
                        style={styles.avatar}
                    />
                    <View style={styles.greetingContainer}>
                        <Text style={styles.greeting}>{getGreeting()},</Text>
                        <Text style={styles.name}>{user.name}</Text>
                    </View>
                </View>
                <Pressable style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </Pressable>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Ready to train?</Text>
                <Text style={styles.subtitle}>Let's get moving today</Text>

                <View style={styles.row}>
                    <Pressable style={styles.cta} onPress={() => router.push('/referral?code=FAZI123')}>
                        <Text style={styles.ctaText}>Test Referral</Text>
                    </Pressable>
                    <Pressable style={[styles.cta, styles.ctaSecondary]} onPress={() => router.push('/explore')}>
                        <Text style={[styles.ctaText, styles.ctaTextSecondary]}>Explore Workouts</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingTop: 60,
        backgroundColor: '#f8fafc',
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    greetingContainer: {
        gap: 2,
    },
    greeting: {
        fontSize: 16,
        color: '#64748b',
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1e293b',
    },
    logoutButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#fee2e2',
        borderRadius: 8,
    },
    logoutText: {
        color: '#dc2626',
        fontSize: 14,
        fontWeight: '600',
    },
    content: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'center',
    },
    subtitle: {
        marginTop: 6,
        color: '#64748b',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 24,
    },
    cta: {
        backgroundColor: '#4f46e5',
        paddingVertical: 12,
        paddingHorizontal: 16,
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
