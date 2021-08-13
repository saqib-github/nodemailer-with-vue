<template>
  <v-app-bar app flat color="primary">
    <v-app-bar-nav-icon
      ><v-icon color="white">{{ mdiEmailOutline }}</v-icon></v-app-bar-nav-icon
    >
    <v-app-bar-title><h3 class="white--text">Email Sender</h3></v-app-bar-title>
  </v-app-bar>
</template>

<script>
import { mdiEmailOutline } from "@mdi/js";
export default {
  name: "app-bar",
  data() {
    return {
      mdiEmailOutline: mdiEmailOutline,
    };
  },
};
</script>

<style lang="scss" scoped></style>
