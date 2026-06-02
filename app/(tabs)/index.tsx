import { Image } from 'expo-image';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Premier Texte</Text>
    <Text style={styles.text}>Second Texte</Text>
    <Text style={styles.text}>Troisieme Texte</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        marginVertical: 8,
    },
});
