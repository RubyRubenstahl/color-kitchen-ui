<template>
  <v-dialog :value="isOpen" v-if="user" persistent max-width="450">
    <v-card class="mx-auto" dark>
      <v-sheet color="warning darken-3">
        <v-card-title class="justify-center">
          <v-icon large left>rotate_right</v-icon>
          <span class="title font-weight-light">Reset User Password</span>
        </v-card-title>
      </v-sheet>

      <v-form ref="form" v-model="valid" lazy-validation @submit="saveUser">
        <v-container>
          <v-layout column>
            <v-flex justify-content-center align-center>
              <v-sheet color="tertiary" class="pa-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon>account_circle</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{user.firstName}} {{user.lastName}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{user.email}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-sheet>
            </v-flex>

            <v-flex>
              <v-text-field
                v-model="newPassword"
                password
                solo
                type="password"
                :rules="passwordRules"
                label="New Password"
                prepend-inner-icon="lock"
                required
                class="mb-2"
                @keyup="validate"
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                password
                solo
                type="password"
                :rules="confirmPasswordRules"
                label="Confirm Password"
                prepend-inner-icon="lock"
                required
                @blur="validate"
                @keyup="validate"
              ></v-text-field>
              <div>{{saveError}}</div>
              <!--   </div>-->
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="closeForm">Cancel</v-btn>

        <div class="progress-button ml-2">
          <v-progress-linear
            color="warning"
            v-show="savePending"
            :indeterminate="true"
            height="2"
            class="ma-0"
          ></v-progress-linear>
          <v-btn color="warning darken-3" @click="saveUser" :disabled="!valid">
            <v-icon>save</v-icon>&nbsp;Save
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {},
  data: function() {
    return {
      newPassword: "",
      confirmPassword: "",
      saveError: null,

      valid: false,
      nameRules: [v => !!v || "Full name is required"],
      passwordRules: [
        v => !!v || "Password is required",
        v => v === this.confirmPassword || "Passwords must match"
      ],
      confirmPasswordRules: [
        v => !!v || "Password confirmation",
        v => v === this.newPassword || "Passwords must match"
      ],

      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  mounted: function() {},
  methods: {
    isAdmin: function(user) {
      return user.roles && user.roles.includes("admin");
    },
    saveUser: function() {
      const user = this.user;
      this.$store
        .dispatch("users/patch", [user._id, { password: this.newPassword }])
        .then(() => {
          this.closeForm();
        })
        .catch(err => err);
    },
    validate: function() {
      this.$refs.form.validate();
    },
    closeForm() {
      this.$store.commit("setPasswordResetDialogOpen", false);
      this.newPassword = "";
      this.confirmPassword = "";
      this.$refs.form.reset();
      this.valid = false;
    }
  },
  computed: {
    user: function() {
      return this.$store.state.passwordResetDialogUser;
    },
    isOpen: function() {
      return this.$store.state.passwordResetDialogOpen;
    },
    savePending: function() {
      return this.$store.state.users.isPatchPending;
    }
  }
};
</script>
<style>
</style>
