import { StyleSheet, Text } from "react-native";

function MyText(props) {
  return (
    <Text style={[styles.customText, props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  customText: {
    fontFamily: 'OpenSans_700Regular'
  }
})

export default MyText;
