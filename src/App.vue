<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <img src="/images/krohtech-logo.png" height="32" class="logo">
        <span class="font-weight-light">KROHTOOLS</span>
        <span class="tool-name">Sentry</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="user">
        <v-menu close-on-click bottom offset-y transition="scale-transition">
          <template v-slot:activator="{ on }">
            <v-btn class="user-button" flat v-on="on">
              <div>{{user.email}}</div>&nbsp;&nbsp;
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
      </div>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    this.$store.dispatch("auth/authenticate").catch(error => {
      if (!error.message.includes("Could not find stored JWT")) {
        console.error(error);
      }
    });

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "auth/setUser") {
        this.$router.push("/");
      }

      if (mutation.type === "auth/logout") {
        this.$router.push("/login");
      }
    });
    console.log(!this.user && !this.$route.name === "login");
    if (!this.user && this.$route.name !== "login") {
      console.log("Redirecting to login page");
      this.$router.push("/login");
    }
  },
  data() {
    return {
      //
    };
  },
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
.user-button {
  text-transform: none;
}
</style>

