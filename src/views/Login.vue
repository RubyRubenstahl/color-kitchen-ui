<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 md4 li6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <v-layout column>
              <v-flex>
                <login-form></login-form>
              </v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import LoginForm from "../components/LoginForm";
export default {
  name: "LoginCard",
  components: {
    LoginForm
  }
};
</script>
