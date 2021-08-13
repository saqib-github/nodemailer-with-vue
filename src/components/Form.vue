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
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      full_name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      console.log("full_name", this.full_name);
      console.log("email: " + this.email);
      console.log("subject: " + this.subject);
      console.log("message: " + this.message);
    },
  },
};
</script>

<style lang="scss" scoped></style>
