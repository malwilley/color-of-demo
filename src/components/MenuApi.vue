<template>
  <div>
    <div class="flex">
      <button 
        @click="setSelectedProvider('bing')" 
        class="btn-api text"
        :class="{ 'selected': isSelected('bing') }">
        bing
      </button>
      <button
        @click="setSelectedProvider('google')"
        class="btn-api text"
        :class="{ 'selected': isSelected('google') }" >
        google
      </button>
    </div>
    <div class="flex flex-column" v-if="selectedProvider === 'bing'">
      <label for="bingApiKey" class="text">API Key</label>
      <input type="text" name="apiKey" class="text" v-model="bing.apiKey"/>
    </div>
    <div class="flex flex-column" v-else-if="selectedProvider === 'google'">
      <label for="googleCseId" class="text">Custom Search Engine ID</label>
      <input type="text" name="googleCseId" class="text" v-model="google.cseId" />
      <label for="googleApiKey" class="text">API Key</label>
      <input type="text" name="googleApiKey" class="text" v-model="google.apiKey"/>
    </div>
    <button class="btn-api selected text" @click="save()">save</button>
    <p>{{response}}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
    ...mapGetters([
      'currentTextColor',
      'currentBackgroundColor',
    ]),
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
.btn-api {
  padding: 0.5rem;
  border: none;
  border: 4px solid white;
  background-color: transparent;
  color: white;
}

.selected {
  background-color: white;
  color: black;
}

input {
  padding: 0.5rem;
  background: none;
  border: 4px solid;
}

</style>