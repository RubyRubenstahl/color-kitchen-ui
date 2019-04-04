<template>
  <v-sheet>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container v-if="user">
        <v-layout column>
          <v-flex>
            <v-containter>
              <v-layout>
                <v-flex>
                  <v-text-field
                    autofocus
                    v-model="user.firstName"
                    label="First Name"
                    prepend-inner-icon="person"
                    style="margin-bottom: 24px"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field
                    autofocus
                    v-model="user.lastName"
                    label="Last Name"
                    style="margin-bottom: 24px"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-containter>

            <v-text-field
              secondary
              autofocus
              v-model="user.email"
              :rules="emailRules"
              label="Email"
              prepend-inner-icon="email"
              style="margin-bottom: 24px"
              required
            ></v-text-field>
            <!-- <v-sheet
            transition="scale-transition"
            v-show="loginError"
            class="error--text body-2 font-weight-light login-error mt10"
            >Invalid login</v-sheet>-->
            <!-- <div class="progress-button">
            <v-progress-linear v-show="loginPending" :indeterminate="true" height="2" class="ma-0"></v-progress-linear>
            -->
            <v-spacer/>
            <v-btn
              :disabled="!valid"
              @click="saveUser"
              @keydown.enter="saveUser"
              block
              class="mt-0"
            >
              <v-icon color="error" transition="scale-transition" v-if="loginError">report_problem</v-icon>&nbsp;&nbsp;
              <span>Save</span>
            </v-btn>
            <!--   </div>-->
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  props: {
    user: Object
  },
  data: () => ({
    valid: true
  }),
  methods: {
    saveUser: function() {
      const user = this.$store.state.users.copy;
      this.$store.dispatch("users/patch", [user._id, user]);
    }
  }
};
</script>
<style>
</style>
