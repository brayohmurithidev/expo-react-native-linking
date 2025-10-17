import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.subtle}>App linking</Text>
            <Text>Scheme: exporeferallinking://</Text>
            <Text>Referral path: /referral?code=...</Text>
            <Text style={styles.subtle}>Version</Text>
            <Text>{Constants.expoConfig?.version ?? '1.0.0'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 16,
        gap: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        marginBottom: 12,
    },
    subtle: {
        color: '#64748b',
        marginTop: 8,
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
