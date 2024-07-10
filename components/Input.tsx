import { StyleSheet, View, TextInput } from "react-native";

interface InputProps {
  value: string;
  setValue: (query: string) => void;
  placeholder?: string;
}

export function Input({ value, setValue, placeholder }: InputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
      placeholderTextColor={"#111827"}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 14,
    width: "100%",
    borderColor: "#D1D5DA",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
