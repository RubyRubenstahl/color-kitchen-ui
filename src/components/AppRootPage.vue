<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <div class="headline pb-3">{{title}}</div>
        <slot></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>
</v-content>
<script>
export default {
  computed: {
    title: function() {
      return this.$route.meta.title;
    }
  }
};
</script>

