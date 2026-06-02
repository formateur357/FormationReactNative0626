import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
      <View style={styles.screen}>
          <View style={styles.card}>
          <Image
            source={{ uri: 'https://picsum.photos/200' }}
            style={ styles.avatar }
          />

          <Text style={styles.name}>Alice Dupont</Text>
          <Text style={styles.role}>Développeuse React Native</Text>
          <Text style={styles.city}>Paris</Text>

          <Pressable
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
            ]}
            onPress={() => console.log('Contact Alice')}
          >
            <Text style={styles.buttonText}>Contacter</Text>
          </Pressable>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#eef2ff",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    card: {
        width: '100%',
        maxWidth: 340,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 24,
        alignItems: 'center',
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 55,
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: '800',
        color: '#111827',
    },
    span: {
        fontWeight: 'bold',
    },
    role: {
        fontSize: 16,
        color: '#4b5563',
        marginTop: 4,
    },
    city: {
        fontSize: 16,
        color: '#374151',
        marginTop: 12,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#374151',
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 999,
    },
    buttonPressed: {
        opacity: 0.75,
        transform: [{ scale: 0.98 }],
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '700',
    },
});
