<template>
  <v-container>
    <v-row>
      <h1>Contact Us</h1>
      <v-col cols="12">
        <v-form @submit.prevent="sendMessage">
          <v-text-field
            dense
            v-model.trim="full_name"
            outlined
            label="Full Name"
          >
          </v-text-field>
          <v-text-field dense v-model.trim="email" outlined label="Email">
          </v-text-field>
          <v-text-field dense v-model.trim="subject" outlined label="Subject">
          </v-text-field>
          <v-textarea
            v-model="message"
            outlined
            label="Your Message"
          ></v-textarea>
          <v-btn type="submit" outlined width="130" height="45">Send</v-btn>
        </v-form>
      </v-col>
      <loader
        v-if="loader"
        object="#ff9633"
        color1="#ffffff"
        color2="#17fd3d"
        size="5"
        speed="2"
        bg="#343a40"
        objectbg="#999793"
        opacity="80"
        name="circular"
      ></loader>
    </v-row>
  </v-container>
</template>

<script>
import Helpers from "../helpers/Helper.js";
import JavaScriptHelpers from "../helpers/JavascriptHelpers.js";
import Swal from "sweetalert2";
export default {
  // components: {
  //   loader: loader,
  // },
  data() {
    return {
      full_name: "",
      email: "",
      subject: "",
      message: "",
      // ..................
      loader: false,
    };
  },
  methods: {
    sendMessage() {
      console.log("full_name", this.full_name);
      console.log("email: " + this.email);
      console.log("subject: " + this.subject);
      console.log("message: " + this.message);
      if (this.full_name && this.email && this.subject && this.message) {
        const valid_email = JavaScriptHelpers.validateEmail(this.email);
        if (valid_email) {
          this.loader = true;
          let url = "http://localhost:5001";
          Helpers.Post(url, {
            full_name: this.full_name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          })
            .then((response) => {
              console.log("response", response);
              Swal.fire("Thank you", response.data.message, "success");
              this.loader = false;
              this.full_name = "";
              this.email = "";
              this.subject = "";
              this.message = "";
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
        if (!valid_email) {
          Swal.fire("Sorry", "Your email is invalid", "error");
        }
      }
      if (!this.full_name || !this.email || !this.subject || !this.message) {
        Swal.fire("Sorry", "Please Enter all the data", "error");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
