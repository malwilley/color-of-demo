<template>
  <div>
    <label for="apiKey">api key</label><br />
    <input type="text" name="apiKey" v-model="bing.apiKey" /><br />
    <button v-on:click="save()">save</button>
    <p>{{response}}</p>
  </div>
</template>

<script>
import { validateSubscriptionKey } from '../common/bing';

export default {
  name: 'menu-api',
  mounted() {
    this.bing.apiKey = this.apiKey;
  },
  data: () => ({
    bing: {
      apiKey: this.apiKey,
    },
    response: '',
  }),
  computed: {
    apiKey() {
      return this.$store.state.api.providers.bing.apiKey;
    },
  },
  methods: {
    async save() {
      // start spinner (this.saveState = Fetching)
      const valid = await validateSubscriptionKey(this.bing.apiKey);
      // this.saveState = valid ? Valid : Invalid
      this.response = valid ? 'success' : 'failure';

      if (valid) {
        this.$store.commit('updateBingApiKey', this.bing.apiKey);
      }
    },
  },
};
</script>

<style scoped>

</style>