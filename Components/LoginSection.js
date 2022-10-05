import { Formik } from "formik";
import InputFiled from "./InputField";
import Button from "./Button";
import * as yup from "yup";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required")
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "Password must have at least 8 character, one number and one special character"
    ),
});

function LoginSection() {
  return (
    <SafeAreaView style={{ marginVertical: StatusBar.currentHeight }}>
      <View style={styles.loginContainer}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 20 }}>Login Screen</Text>
        </View>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <>
              <InputFiled
                name="email"
                placeholder="gamilfathi@gmail.com"
                style={styles.textInput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <InputFiled
                name="password"
                placeholder="***********"
                style={styles.textInput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <View style={styles.btn}>
                <Button
                  onPress={handleSubmit}
                  title="Login"
                  disabled={!isValid}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

export default LoginSection;

const styles = StyleSheet.create({
  loginContainer: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 200,
  },
  errorText: {
    fontSize: 10,
    color: "red",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
  },
});
