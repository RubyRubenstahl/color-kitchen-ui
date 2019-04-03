<template>
  <v-navigation-drawer clipped fixed hide-overlay app :mini-variant="true">
    <v-toolbar flat class="transparent">
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <navbar-button name="Home" to="/" icon="home"/>
        <navbar-button name="Manage Users" to="/users" icon="group"/>
      </v-list>
    </v-toolbar>
  </v-navigation-drawer>
</template>
<script>
import NavbarButton from "../components/NavbarButton";

export default {
  components: {
    NavbarButton
  },
  data() {
    return {
      mini: true
    };
  }
};
</script>

