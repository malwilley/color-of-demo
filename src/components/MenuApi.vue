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
import { mapActions } from 'vuex';
import { validateSubscriptionKey } from '@/common/bing';

export default {
  name: 'menu-api',
  mounted() {
    this.bing.apiKey = this.apiKey;
    this.google.cseId = this.googleCseId;
    this.google.apiKey = this.googleApiKey;
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
    ...mapActions([
      'setBingCredentials',
      'setGoogleCredentials',
      'setSelectedProvider',
    ]),
    isSelected(provider) {
      return this.selectedProvider === provider;
    },
    async save() {
      // start spinner (this.saveState = Fetching)
      const valid = await this.isSelected('bing') ?
        validateSubscriptionKey(this.bing.apiKey) :
        true;
      // this.saveState = valid ? Valid : Invalid
      this.response = valid ? 'success' : 'failure';

      if (valid) {
        switch (this.selectedProvider) {
          case 'bing':
            this.setBingApiKey({ apiKey: this.bing.apiKey });
            break;
          case 'google':
            this.setGoogleCredentials({ apiKey: this.google.apiKey, cseId: this.google.cseId });
            break;
          default:
            throw new Error('Selected provider must be google or bing');
        }
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