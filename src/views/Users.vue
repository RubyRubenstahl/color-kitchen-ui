<template>
  <app-root-page>
    <v-sheet>
      <v-container class="pa-0">
        <v-layout row fill-height>
          <v-flex fill-height grow shrink hidden-xs-only class="user-profile">
            <user-profile :user="selectedUser"></user-profile>
          </v-flex>
          <v-flex fill-height shrink xs12>
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
  },
  methods: {
    openAddUserDialog: function() {
      this.$store.commit("setAddUserDialogOpen", true);
    }
  }
};
</script>
<style lang="stylus" scoped>
.user-list {
}

.user-profile {
  min-width: 400px;
}
</style>
