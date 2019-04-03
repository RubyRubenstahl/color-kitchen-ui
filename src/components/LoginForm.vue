<template>
  <v-form ref="form" v-model="valid" lazy-validation @input="clearError">
    <v-container>
      <v-layout column>
        <v-flex>
          <v-text-field
            autofocus
            v-model="email"
            :rules="emailRules"
            label="Email"
            prepend-inner-icon="person"
            style="margin-bottom: 24px"
            required
            solo
            box
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            password
            type="password"
            solo
            label="Password"
            prepend-inner-icon="lock"
            required
            box
            @keydown.enter="login"
          ></v-text-field>
          <v-sheet
            transition="scale-transition"
            v-show="loginError"
            class="error--text body-2 font-weight-light login-error mt10"
          >Invalid login</v-sheet>
          <div class="progress-button">
            <v-progress-linear v-show="loginPending" :indeterminate="true" height="2" class="ma-0"></v-progress-linear>
            <v-btn :disabled="!valid" @click="login" @keydown.enter="login" block class="mt-0">
              <v-icon color="error" transition="scale-transition" v-if="loginError">report_problem</v-icon>&nbsp;&nbsp;
              <span>Log In</span>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    errorCleared: true,
    valid: true,
    password: "",
    passwordRules: [v => !!v || "Password is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
      this.clearError();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    clearError() {
      this.errorCleared = true;
    },
    login: function(e) {
      console.log(this.password);
      this.errorCleared = false;
      this.$store.dispatch("auth/authenticate", {
        strategy: "local",
        email: this.email,
        password: this.password
      });

      e.preventDefault();
    }
  },
  computed: {
    loginError: function() {
      const error = this.$store.state.auth.errorOnAuthenticate;
      return !this.errorCleared && error ? error : null;
    },
    loginPending: function() {
      console.log(this.$store.state.auth.isAuthenticatePending);
      return this.$store.state.auth.isAuthenticatePending;
    }
  }
};
</script>
<style>
.login-error {
  width: 100%;
  text-align: center;
  background-color: #66000055 !important;
  margin-bottom: 8px;
  padding: 8px;
}
</style>
