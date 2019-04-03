<template>
  <v-navigation-drawer clipped fixed hide-overlay app :mini-variant="true" :value="true">
    <v-toolbar flat class="transparent">
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <navbar-button
          v-for="route in routes"
          v-bind:key="route.path"
          :name="route.meta.title"
          :to="route.path"
          :icon="route.meta.icon"
        />
      </v-list>
    </v-toolbar>
  </v-navigation-drawer>
</template>
<script>
import NavbarButton from "../components/NavbarButton";
import { viewRoutes } from "../router";
export default {
  components: {
    NavbarButton
  },
  data() {
    return {
      mini: true
    };
  },
  computed: {
    routes: function() {
      const routes = this.$router.options.routes.filter(
        route => !!route.meta && route.meta.icon
      );
      return routes;
    }
  }
};
</script>

