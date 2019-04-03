<template>
  <v-navigation-drawer clipped fixed hide-overlay app :mini-variant="true">
    <v-toolbar flat class="transparent">
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <navbar-button
          v-for="view in views"
          v-bind:key="view.path"
          :name="view.title"
          :to="view.path"
          :icon="view.icon"
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
    views: function() {
      return viewRoutes;
    }
  }
};
</script>

