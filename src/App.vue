<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <img src="/images/krohtech-logo.png" height="32" class="logo">
        <span class="font-weight-light">KROHTOOLS</span>
        <span class="tool-name">Sentry</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>settings</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>person</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <login-card/>
    </v-content>
  </v-app>
</template>

<script>
import LoginCard from "./components/LoginCard";

export default {
  name: "App",
  components: {
    LoginCard
  },
  mounted() {
    this.$store.dispatch("auth/authenticate").catch(error => {
      if (!error.message.includes("Could not find stored JWT")) {
        console.error(error);
      }
    });
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style>
.logo {
  margin-bottom: 6px;
  margin-right: 6px;
  vertical-align: middle;
}
.tool-name {
  color: #f24f4f;
  padding-left: 4px;
}
.headline {
  text-shadow: 1px 1px 6px #ffffff3b;
}
</style>

