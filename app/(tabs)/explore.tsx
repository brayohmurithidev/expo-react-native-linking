import { FlatList, StyleSheet, Text, View } from 'react-native';


const workouts = [
  { id: 'w1', name: 'Full Body HIIT', duration: '20 min', intensity: 'High' },
  { id: 'w2', name: 'Upper Body Strength', duration: '35 min', intensity: 'Medium' },
  { id: 'w3', name: 'Mobility Flow', duration: '15 min', intensity: 'Low' },
  { id: 'w4', name: 'Leg Day Power', duration: '40 min', intensity: 'High' },
];

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Workouts</Text>
      <FlatList
        style={styles.list}
        data={workouts}
        keyExtractor={(w) => w.id}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardLeft}>
              <Text style={styles.cardName}>{item.name}</Text>
              <Text style={styles.cardMeta}>{item.duration} • {item.intensity}</Text>
            </View>
            <Text style={styles.cardCta}>Start</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 12,
  },
  list: {
    flexGrow: 0,
  },
  sep: {
    height: 8,
  },
  card: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#e2e8f0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLeft: {
  },
  cardName: {
    fontWeight: '700',
  },
  cardMeta: {
    color: '#64748b',
    marginTop: 2,
  },
  cardCta: {
    color: '#4f46e5',
    fontWeight: '700',
  },
});
