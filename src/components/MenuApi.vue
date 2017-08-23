<template>
  <div>
    <label for="apiKey">api key</label><br />
    <input type="text" name="apiKey" v-model="apiKey" /><br />
    <button v-on:click="save()">save</button>
    <p>{{response}}</p>
  </div>
</template>

<script>
import { validateSubscriptionKey } from '../common/bing';

export default {
  name: 'menu-api',
  data: () => ({
    response: '',
  }),
  computed: {
    apiKey() {
      return this.$store.state.api.bing.apiKey;
    },
  },
  methods: {
    async save() {
      // start spinner (this.saveState = Fetching)
      const valid = await validateSubscriptionKey(this.apiKey);
      // this.saveState = valid ? Valid : Invalid
      this.response = valid ? 'success' : 'failure';
    },
  },
};
</script>

<style scoped>

</style>