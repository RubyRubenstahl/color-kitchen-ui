<template>
  <app-root-page>
    <v-sheet height="450" max-width="900">
      <v-container class="pa-0 ma-0">
        <v-layout row fill-height>
          <v-flex fill-height grow shrink hidden-xs-only class="user-profile">
            <user-profile v-if="selectedUser" :user="selectedUser"></user-profile>
          </v-flex>
          <v-flex
            fill-height
            shrink
            xs12
            pa-0
            ma-0
            class="tertiary scroll-y"
            style="height:450px;overflow-y:scroll"
          >
            <v-btn
              fab
              small
              color="primary"
              class="mr-3"
              @click="openAddUserDialog"
              top
              right
              absolute
            >
              <v-icon>person_add</v-icon>
            </v-btn>
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
  components: { AppRootPage, UserList, UserProfile },
  name: "home",
  data: function() {
    return {};
  },
  mounted: function() {},
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

.tertiary {
  background-color: red;
}

.user-profile {
  min-width: 400px;
  border-right: 1px solid #3a3a3a;
}
</style>
