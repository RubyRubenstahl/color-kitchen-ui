<template>
  <v-navigation-drawer
    clipped
    fixed
    hide-overlay
    app
    :mini-variant="true"
    :value="true"
    :v-show="visible"
    permanent
  >
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
  methods: {
    isAdmin: function() {
      return (
        this.$store.state.auth.user.roles &&
        this.$store.state.auth.user.roles.includes("admin")
      );
    }
  },
  computed: {
    routes: function() {
      const routes = this.$router.options.routes
        .filter(route => !!route.meta && route.meta.icon)
        .filter(route => {
          let show = false;
          if (route.meta && route.meta.restrictToAdmin) {
            show = this.isAdmin();
          } else {
            show = true;
          }
          return show;
        });
      return routes;
    },
    visible: function() {
      return this.routes.length > 1;
    }
  }
};
</script>

