import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
    width: Dimensions.get("window").width * 0.90,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    height: 40,
  },

  button: {
    backgroundColor: "#c6d8f0",
    padding: 10,
    borderRadius: 50,
    width: Dimensions.get("window").width * 0.90,
  },

  buttonText: {
    color: "black",
    textAlign: "center",
  },

  forgetPassword: { 
    textAlign: "right",
    color: "black",
    paddingBottom: 5, 
  },

  iconsInput: {
    marginRight: 10
  },

  container: {
    flex: 1,
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },

  orText: {
    marginHorizontal: 10,
    fontSize: 16,
  },

  socialLoginOptions: {
    margin: 10
  },
  
  loginOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1, 
    borderColor: "black", 
    borderRadius: 50, 
    padding: 10,
    backgroundColor: "transparent",
    width: Dimensions.get("window").width * 0.90,
  },

  iconSocialLoginOptions: {
    color: "black",
    marginRight: 10,
  },

  socialLoginText: {
    color: "black", 
    fontWeight: "bold",
    fontSize: 16,
  },
});
