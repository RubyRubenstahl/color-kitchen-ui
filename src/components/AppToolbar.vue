<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-title class="headline text-uppercase">
      <img src="/images/krohtech-logo.png" height="32" class="logo">
      <span class="font-weight-light hidden-xs-only">KROHTOOLS</span>
      <span class="font-weight-light hidden-sm-and-up">KT</span>
      <span class="tool-name">Sentry</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu v-if="user" close-on-click bottom offset-y transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn class="user-button ma-0" flat v-on="on">
          <div class="hidden-xs-only">{{user.firstName}} {{user.lastName}}&nbsp;&nbsp;</div>
          <v-icon>person</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile @click="logout">
          <v-list-tile-avatar>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    logout: function() {
      this.$store.dispatch("auth/logout");
    }
  },
  computed: {
    user: function() {
      return this.$store.state.auth.user;
    }
  }
};
</script>

