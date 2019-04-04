<template>
  <app-root-page>
    <v-sheet>
      <v-container class="pa-0">
        <v-layout row fill-height>
          <v-flex fill-height>
            <user-profile :user="selectedUser"></user-profile>
          </v-flex>
          <v-flex fill-height>
            <user-list class="user-list"></user-list>
          </v-flex>
        </v-layout>
      </v-container>
    </v-sheet>
  </app-root-page>
</template>

<script>
// @ is an alias to /src
import AppRootPage from "../components/AppRootPage";
import UserList from "../components/UserList";
import UserProfile from "../components/UserProfile";
export default {
  name: "home",
  components: { AppRootPage, UserList, UserProfile },
  computed: {
    selectedUser: function() {
      return this.$store.state.users.copy;
    }
  }
};
</script>
<style lang="stylus" scoped>
.user-list {
  max-width: 350px;
}
</style>
