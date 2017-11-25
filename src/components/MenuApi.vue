<template>
  <div class="flex justify-center items-center p1">
    <div class="flex flex-column api-container">
      <div class="flex mb2 self-center">
        <button 
          @click="setSelectedProvider('bing')" 
          class="switch switch-left text"
          :class="{ 'active': isSelected('bing') }">
          bing
        </button>
        <button
          @click="setSelectedProvider('google')"
          class="switch switch-right text"
          :class="{ 'active': isSelected('google') }" >
          google
        </button>
      </div>
      <div class="flex flex-column self-stretch" v-if="selectedProvider === 'bing'">
        <label for="bingApiKey" class="text">API Key</label>
        <input type="text" name="apiKey" class="text mb2" v-model="bing.apiKey"/>
      </div>
      <div class="flex flex-column self-stretch" v-else-if="selectedProvider === 'google'">
        <label for="googleCseId" class="text">Custom Search Engine ID</label>
        <input type="text" name="googleCseId" class="text mb2" v-model="google.cseId" />
        <label for="googleApiKey" class="text">API Key</label>
        <input type="text" name="googleApiKey" class="text mb2" v-model="google.apiKey"/>
      </div>
      <button class="btn self-end" @click="save()">save</button>
      <p>{{response}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { validateSubscriptionKey } from '@/common/bing';

export default {
  name: 'menu-api',
  mounted() {
    this.bing.apiKey = this.bingApiKey;
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
.api-container {
  width: 100%;
  max-width: 800px;
}

.switch {
  cursor: pointer;
  padding: 6px 8px;
  color: var(--active);
  border: 4px solid var(--active);
  background-color: var(--none);
}

.switch-right {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.switch-left {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.active {
  background-color: var(--active);
  color: var(--none);
}

</style>