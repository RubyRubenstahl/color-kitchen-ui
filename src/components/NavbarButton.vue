<template>
  <v-list-tile :to="to">
    <v-list-tile-action>
      <v-icon>{{icon}}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{name}}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

