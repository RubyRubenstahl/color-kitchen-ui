import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathersClient from './feathers-client'
console.log(feathersClient)
const { service, auth, FeathersVuex } = feathersVuex(feathersClient, { idField: '_id' })

Vue.use(Vuex)
Vue.use(FeathersVuex)



export default new Vuex.Store({
  plugins: [
    service('users'),
    auth({ userService: 'users' })
  ],
  state: {
    addUserDialogOpen: false,
    passwordResetDialogUser: null,
    passwordResetDialogOpen: true,

  },
  mutations: {
    setAddUserDialogOpen: function (state, open) {
      state.addUserDialogOpen = open;
    },
    setPasswordResetDialogUser: function (state, user) {
      state.passwordResetDialogUser = user;
    },
    setPasswordResetDialogOpen: function (state, open) {
      state.passwordResetDialogOpen = open;
    },

  },
  actions: {

  }
})
