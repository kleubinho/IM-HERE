import {
    Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../components/Participant";
import { styles } from "./styles";

export default function Home() {
  const participants = [
    "Kleber",
    "Terryzada",
    "Fe narino",
    "Senhor entrada",
    "Dog",
    "COgada",
    "Julião",
    "Almeida",
    "Ruffles",
    "Luva de pedrada",
    "Mayke",
  ];

  function handleParticipantAdd() {
    if(participants.includes('Kleber')){
        Alert.alert("Participante existe", "já exisre um participante na lista com esse nome")
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
        {
            text: 'Sim',
            onPress: () => Alert.alert('Deletado!')
        },
        {
            text: 'Não',
            style: 'cancel',
        },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 20 de janeiro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                </Text>
            )}
      />
    </View>
  );
}
