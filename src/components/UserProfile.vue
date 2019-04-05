<template>
  <v-card class="mx-auto" elevation="0">
    <v-sheet color="primary darken-1">
      <v-card-title class="justify-center">
        <v-icon x-large left>account_circle</v-icon>
      </v-card-title>
    </v-sheet>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-layout column>
          <v-flex>
            <v-container ma-0 pa-0 align-content-space-between>
              <v-layout>
                <v-flex>
                  <v-text-field
                    ref="initialFocus"
                    autofocus
                    solo
                    v-model="user.firstName"
                    label="First Name"
                    :rules="nameRules"
                    prepend-inner-icon="person"
                    required
                  ></v-text-field>
                  <v-spacer></v-spacer>
                </v-flex>
                <v-flex>
                  <v-text-field
                    solo
                    :rules="nameRules"
                    v-model="user.lastName"
                    label="Last Name"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex>
            <v-text-field
              secondary
              solo
              v-model="user.email"
              :rules="emailRules"
              label="Email"
              prepend-inner-icon="email"
              class="mt-2 mb-5"
              required
            ></v-text-field>
          </v-flex>
          <v-flex align-self-end>
            <v-spacer/>
            <v-switch
              class="pb-2 pt-1"
              v-model="isAdmin"
              label="Administrator"
              color="primary"
              hide-details
            ></v-switch>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="saveUser">
        <v-icon>person</v-icon>Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    user: Object
  },
  data: function() {
    return {
      valid: true,
      passwordRules: [v => !!v || "Password is required"],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      nameRules: [v => !!v || "Full name is required"],
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  methods: {
    saveUser: function() {
      const user = this.$store.state.users.copy;
      this.$store.dispatch("users/patch", [user._id, user]);
    }
  },
  computed: {
    isAdmin: {
      get: function() {
        return this.user.roles && this.user.roles.includes("admin");
      },
      set: function(newValue) {
        if (newValue === true) {
          this.user.roles = ["admin"];
        } else {
          this.user.roles = [];
        }
      }
    }
  }
};
</script>
<style>
</style>
