<template>
  <div>
    <div class="flex">
      <button @click="selectProvider('bing')" :class="{ selected: isSelected('bing') }">bing</button>
      <button @click="selectProvider('google')" :class="{ selected: isSelected('google') }" >google</button>
    </div>
    <div class="flex flex-column" v-if="selectedProvider === 'bing'">
      <label for="bingApiKey">API Key</label>
      <input type="text" name="apiKey" v-model="bing.apiKey" />
    </div>
    <div class="flex flex-column" v-else-if="selectedProvider === 'google'">
      <label for="googleCseId">Custom Search Engine ID</label>
      <input type="text" name="googleCseId" v-model="google.cseId" />
      <label for="googleApiKey">API Key</label>
      <input type="text" name="googleApiKey" v-model="google.apiKey" />
    </div>
    <button @click="save()">save</button>
    <p>{{response}}</p>
  </div>
</template>

<script>
import { validateSubscriptionKey } from '@/common/bing';

export default {
  name: 'menu-api',
  mounted() {
    this.bing.apiKey = this.apiKey;
  },
  data: () => ({
    bing: {
      apiKey: this.bingApiKey,
    },
    google: {
      cseId: this.googleCseId,
      apiKey: this.googleApiKey,
    },
    response: '',
  }),
  computed: {
    bingApiKey() {
      return this.$store.state.api.providers.bing.apiKey;
    },
    googleCseId() {
      return this.$store.state.api.providers.google.cseId;
    },
    googleApiKey() {
      return this.$store.state.api.providers.google.apiKey;
    },
    selectedProvider() {
      return this.$store.state.api.selectedProvider;
    },
  },
  methods: {
    selectProvider(provider) {
      this.$store.commit('setSelectedProvider', provider);
    },
    isSelected(provider) {
      return this.selectedProvider === provider;
    },
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
.selected {
  background-color: red;
}
</style>