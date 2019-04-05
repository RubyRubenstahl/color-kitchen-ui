<template>
  <v-dialog :value="isOpen" max-width="450">
    <v-card class="mx-auto" dark>
      <v-sheet color="primary">
        <v-card-title class="justify-center">
          <v-icon large left>person_add</v-icon>
          <span class="title font-weight-light">Add new user</span>
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

              <v-text-field
                v-model="user.password"
                password
                solo
                type="password"
                :rules="passwordRules"
                label="Password"
                prepend-inner-icon="lock"
                required
                @keydown.enter="login"
                class="mb-2"
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
                @keydown.enter="login"
                @blur="validate"
              ></v-text-field>

              <!--   </div>-->
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
        <v-btn @click="closeForm">Cancel</v-btn>
        <v-btn color="primary" @click="saveUser">
          <v-icon>person_add</v-icon>Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {},
  data: function() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        roles: [],
        password: ""
      },
      confirmPassword: "",
      valid: true,
      nameRules: [v => !!v || "Full name is required"],
      passwordRules: [
        v => !!v || "Password is required",
        v => v === this.confirmPassword || "Passwords must match"
      ],
      confirmPasswordRules: [
        v => !!v || "Password confirmation",
        v => v === this.user.password || "Passwords must match"
      ],

      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  mounted: function() {},
  methods: {
    saveUser: function() {
      const user = this.user;
      debugger;
      this.$store
        .dispatch("users/create", user)
        .then(() => this.closeForm())
        .catch(err => console.log("OH NOES!"));
    },
    validate: function() {
      this.$refs.form.validate();
    },
    closeForm() {
      this.$refs.initialFocus.focus();
      this.$store.commit("setAddUserDialogOpen", false);
      this.$refs.form.reset();
    }
  },
  computed: {
    isOpen: function() {
      return this.$store.state.addUserDialogOpen;
    },
    isAdmin: {
      get: function() {
        return this.user.roles.includes("admin");
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
