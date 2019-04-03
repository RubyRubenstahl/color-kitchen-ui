<template>
  <v-app dark>
    <nav-drawer/>
    <app-toolbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavDrawer from "./views/NavDrawer";
import AppToolbar from "./components/AppToolbar";
export default {
  name: "App",
  components: { NavDrawer, AppToolbar },
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

