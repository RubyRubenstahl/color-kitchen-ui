<template>
  <feathers-vuex-find service="users" :query="{}" watch="query">
    <v-list slot-scope="{ items: users }" two-line class="ma-0 pa-0">
      <div v-for="user in users" v-bind:key="user.id">
        <v-list-tile @click="selectUser(user)" :class="{selected: isSelected(user)}">
          <v-list-tile-action>
            <v-icon v-if="isAdmin(user)">vpn_key</v-icon>
            <v-icon v-else>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{user.firstName}} {{user.lastName}}</v-list-tile-title>
            <v-list-tile-sub-title>{{user.email}}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-menu close-on-content-click close-on-click offset-y>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-tile @click="resetPassword(user)">
                  <v-list-tile-action>
                    <v-icon>rotate_right</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>Reset Password</v-list-tile-title>
                </v-list-tile>
                <delete-user-action :user="user" v-if="!isSelf(user)"></delete-user-action>
              </v-list>
            </v-menu>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider/>
      </div>
    </v-list>
  </feathers-vuex-find>
</template>
<script>
import DeleteUserAction from "./DeleteUserAction";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {
    DeleteUserAction
  },
  methods: {
    selectUser: function(user) {
      this.getUser(user._id);
    },
    resetPassword: function(user) {
      this.$store.commit("setPasswordResetDialogUser", user);
      this.$store.commit("setPasswordResetDialogOpen", true);
    },
    isAdmin: function(user) {
      return user.roles && user.roles.includes("admin");
    },
    isSelf: function(user) {
      return user._id === this.$store.state.auth.user._id;
    },

    deleteUser: function(user) {},
    ...mapActions("users", {
      getUser: "get"
    }),
    isSelected: function(user) {
      return (
        this.$store.state.users.copy &&
        this.$store.state.users.copy._id === user._id
      );
    }
  }
};
</script>
<style lang="stylus" scoped>
.selected {
  background-color: #6e6e6e;
}
</style>
