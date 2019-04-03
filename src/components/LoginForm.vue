<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      autofocus
      v-model="email"
      value="ruby"
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
    <v-container>
      <v-layout row>
        <v-flex justify-center>
          <v-btn
            :disabled="!valid"
            @click="login"
            @keydown.enter="login"
            class="justify-right"
            block
          >Log In</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- 
    <v-btn color="error" @click="reset">Reset Form</v-btn>

    <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>-->
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 8) || "Password must be at least 8 characters"
    ],
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
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    login: function(e) {
      console.log(this.password);
      this.$store.dispatch("auth/authenticate", {
        strategy: "local",
        email: this.email,
        password: this.password
      });

      e.preventDefault();
    }
  }
};
</script>