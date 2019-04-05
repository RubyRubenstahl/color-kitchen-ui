<template>
  <v-app dark>
    <nav-drawer v-if="user"/>
    <app-toolbar/>
    <v-content>
      <add-user-dialog></add-user-dialog>
      <password-reset-dialog></password-reset-dialog>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import NavDrawer from "./views/NavDrawer";
import AppToolbar from "./components/AppToolbar";
import AddUserDialog from "./components/AddUserDialog";
import PasswordResetDialog from "./components/PasswordResetDialog";

export default {
  name: "App",
  components: { NavDrawer, AppToolbar, AddUserDialog, PasswordResetDialog },
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

