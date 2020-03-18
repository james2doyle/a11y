<template>
  <div class="py-6 px-2 bg-gray-300 shadow rounded mt-6">
    <div class="flex flex-wrap md:flex-no-wrap">
      <div class="rounded mx-3 mb-4 md:mb-0 w-full md:w-1/3 shadow border" :class="{ 'bg-red-100 border-red-300': !passesRatio }" v-if="!passesRatio">
        <div class="p-4">
          <h3 class="font-bold text-lg mb-3">Fails <span v-text="test"></span></h3>
          <p class="mb-3">Required contrast ratio: <span class="px-2 py-1 border bg-gray-200 border-gray-500 text-gray-700 rounded text-sm font-mono shadow-xs" v-text="complianceRatio"></span></p>
          <p class="mb-3">Your contrast ratio: <span class="px-2 py-1 border bg-gray-200 border-gray-500 text-gray-700 rounded text-sm font-mono shadow-xs" v-text="yourRatio"></span></p>
        </div>
        <div class="border-t" :class="{ 'border-red-300': true }">
          <div class="p-8">
            <p :class="weight">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
        </div>
      </div>
      <div class="rounded mx-3 mb-4 md:mb-0 w-full md:w-1/3 shadow border bg-green-100 border-green-300">
        <div class="p-4">
          <h3 class="font-bold text-lg mb-3">Passes <span v-text="test"></span></h3>
          <p class="mb-3">Change background color to <span class="px-2 py-1 border bg-gray-200 border-gray-500 text-gray-700 rounded text-sm font-mono shadow-xs" v-text="newBg"></span></p>
          <p class="mb-3">New contrast ratio: <span class="px-2 py-1 border bg-gray-200 border-gray-500 text-gray-700 rounded text-sm font-mono shadow-xs" v-text="newBgRatio"></span></p>
        </div>
        <div class="border-t" :class="{ 'border-green-300': true }">
          <div class="p-8">
            <p :class="weight">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
        </div>
      </div>
      <div class="rounded mx-3 mb-4 md:mb-0 w-full md:w-1/3 shadow border bg-green-100 border-green-300">
        <div class="p-4">
          <h3 class="font-bold text-lg mb-3">Passes <span v-text="test"></span></h3>
          <p class="mb-3">Change text color to <span class="px-2 py-1 border bg-gray-200 border-gray-500 text-gray-700 rounded text-sm font-mono shadow-xs" v-text="newText"></span></p>
          <p class="mb-3">New contrast ratio: <span class="px-2 py-1 border bg-gray-200 border-gray-500 text-gray-700 rounded text-sm font-mono shadow-xs" v-text="newTextRatio"></span></p>
        </div>
        <div class="border-t" :class="{ 'border-green-300': true }">
          <div class="p-8">
            <p :class="weight">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { default as color } from 'color';

const complianceOptions = {
  AA: '4.5',
  AAA: '7',
};

export default {
  name: 'Results',
  computed: {
    format() {
      return this.$route.query.format || 'hex';
    },
    text() {
      const textColor = this.$route.query.text || '#747474';

      return color(textColor)[this.format]();
    },
    bg() {
      const bgColor = this.$route.query.bg || '#eeeeee';

      return color(bgColor)[this.format]();
    },
    size() {
      return this.$route.query.size || 18;
    },
    weight() {
      return 'font-' + this.$route.query.weight || 'normal';
    },
    test() {
      return this.$route.query.test || 'AA';
    },
    complianceRatio() {
      return complianceOptions[this.test];
    },
    passesRatio() {
      const textColor = this.$route.query.text || '#747474';
      const bgColor = this.$route.query.bg || '#eeeeee';

      const test = color(textColor).level(color(bgColor));

      return test === this.test || test === 'AAA';
    },
    yourRatio() {
      const textColor = this.$route.query.text || '#747474';
      const bgColor = this.$route.query.bg || '#eeeeee';

      return color(textColor).contrast(color(bgColor)).toFixed(2);
    },
    newBg() {
      return '#010101';
    },
    newBgRatio() {
      return '#242424';
    },
    newText() {
      return '#606060';
    },
    newTextRatio() {
      return '#111111';
    },
  },
};
</script>
