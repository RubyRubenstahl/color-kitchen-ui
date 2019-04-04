<template>
  <v-sheet color="tertiary">
    <feathers-vuex-find service="users" :query="{}" watch="query">
      <v-list slot-scope="{ items: users }" two-line class="transparent">
        <div v-for="user in users" v-bind:key="user.id">
          <v-list-tile @click="selectUser(user)">
            <v-list-tile-action>
              <v-icon>{{"account_circle"}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{user.firstName}} {{user.lastName}}</v-list-tile-title>
              <v-list-tile-sub-title>{{user.email}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider/>
        </div>
      </v-list>
    </feathers-vuex-find>
  </v-sheet>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  methods: {
    selectUser: function(user) {
      this.getUser(user._id);
    },
    ...mapActions("users", {
      getUser: "get"
    })
  }
};
</script>
