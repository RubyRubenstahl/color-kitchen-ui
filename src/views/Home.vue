<template>
  <app-root-page>
    <v-sheet lg8 sm4 elevation="4" height="400">
      <div
        class="grey--text text--darken-2 display-2 text-xs-center pa-5"
      >This is where the main app content will go</div>
    </v-sheet>
  </app-root-page>
</template>

<script>
// @ is an alias to /src
import AppRootPage from "../components/AppRootPage";
export default {
  name: "home",
  components: { AppRootPage }
};
</script>
