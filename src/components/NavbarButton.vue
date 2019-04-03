<template>
  <v-list-tile :to="to">
    <v-list-tile-action>
      <v-tooltip right open-delay="200" nudge-right="30">
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">{{icon}}</v-icon>
        </template>
        <span>{{name}}</span>
      </v-tooltip>
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

