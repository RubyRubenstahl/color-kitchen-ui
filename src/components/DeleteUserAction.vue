<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="300">
      <template v-slot:activator="{ on }">
        <v-list-tile v-on="on">
          <v-list-tile-action>
            <v-icon>delete_forever</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Delete User</v-list-tile-title>
        </v-list-tile>
      </template>

      <v-card>
        <v-sheet color="error darken-1">
          <v-card-title class="justify-center">
            <v-icon large left>delete_forever</v-icon>
            <span class="title font-weight-light">Delete User</span>
          </v-card-title>
        </v-sheet>

        <v-card-text class="text-xs-center">
          <div class="grey--text">You are about to delete user</div>
          <div>
            <div class="title ma-2">{{user.firstName}} {{user.lastName}}</div>
          </div>
          <div class="grey--text">This cannot be undone. Are you sure?</div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="cancel">Cancel</v-btn>
          <v-btn color="error" flat @click="deleteUser">DELETE User</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      default: {
        firstName: "John",
        lastName: "Doe"
      }
    }
  },
  data: function() {
    return {
      dialog: false
    };
  },
  methods: {
    cancel: function() {
      this.dialog = false;
    },
    deleteUser: function() {
      const user = this.user;
      console.log(
        `Deleting user "${user.firstName} ${user.lastName}" - ${user.email}`
      );
      this.$store.dispatch("users/remove", user._id);
      this.dialog = false;
    }
  }
};
</script>

