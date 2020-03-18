<template>
  <form accept-charset="utf-8" class="pt-2 pb-6 px-2 bg-white shadow rounded mt-6 flex items-center flex-wrap" @change="updateRoute">
    <div class="w-full flex justify-end relative">
      <select class="text-sm bg-transparent" id="format" name="format">
        <option :selected="format === 'hex'" value="hex">HEX</option>
        <option :selected="format === 'rgb'" value="rgb">RGB</option>
        <option :selected="format === 'hsl'" value="hsl">HSL</option>
      </select>
    </div>
    <div class="w-1/2 md:w-1/3 px-3 mb-4">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="text">Color</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="text-gray-500 sm:text-sm sm:leading-5">#</span>
        </div>
        <div class="relative">
          <p class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-text="text"></p>
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <div class="p-4 shadow rounded" :style="{ backgroundColor: text }"></div>
          </div>
          <input type="color" name="text" id="text" class="absolute inset-0 w-full h-full opacity-0" v-model="textColor">
        </div>
      </div>
    </div>
    <div class="w-1/2 md:w-1/3 px-3 mb-4">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="bg">Background</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="text-gray-500 sm:text-sm sm:leading-5">#</span>
        </div>
        <div class="relative">
          <p class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-text="bg"></p>
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <div class="p-4 shadow rounded" :style="{ backgroundColor: bg }"></div>
          </div>
          <input type="color" name="bg" id="bg" class="absolute inset-0 w-full h-full opacity-0" v-model="bgColor">
        </div>
      </div>
    </div>
    <div class="w-1/2 md:w-1/3 px-3 mb-4">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="size">Font Size</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input type="number" name="size" id="size" class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" :value="size">
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span class="text-gray-500 sm:text-sm sm:leading-5">px</span>
        </div>
      </div>
    </div>
    <div class="w-1/2 md:w-1/3 px-3 mb-4">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="weight">Font Weight</label>
      <div class="relative">
        <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="weight" name="weight">
          <option :selected="weight === 'light'" value="light">Light</option>
          <option :selected="weight === 'normal'" value="normal">Normal</option>
          <option :selected="weight === 'bold'" value="bold">Bold</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-1/2 md:w-1/3 px-3 mb-4">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="test">Compliance</label>
      <div class="relative">
        <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="test" name="test">
          <option :selected="test === 'AA'" value="AA">AA</option>
          <option :selected="test === 'AAA'" value="AAA">AAA</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-1/2 md:w-1/3 px-3 mb-4" v-if="cleanUrl.length > 0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="url">Share URL</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input type="text" class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-16 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 truncate" id="url" name="url" :value="cleanUrl" />
        <button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer" @click.prevent="copyUrl">
          <span class="text-gray-500 sm:text-sm sm:leading-5">copy</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { default as color } from 'color';

export default {
  name: 'Form',
  data() {
    return {
      textColor: color(this.$route.query.text || '#747474').hex(),
      bgColor: color(this.$route.query.bg || '#eeeeee').hex(),
    };
  },
  computed: {
    format() {
      return this.$route.query.format || 'hex';
    },
    text() {
      return color(this.textColor)[this.format]();
    },
    bg() {
      return color(this.bgColor)[this.format]();
    },
    size() {
      return this.$route.query.size || 18;
    },
    weight() {
      return this.$route.query.weight || 'normal';
    },
    test() {
      return this.$route.query.test || 'AA';
    },
    cleanUrl() {
      return this.$route.fullPath;
    },
    url() {
      return window.location.href;
    },
  },
  methods: {
    updateRoute({ target }) {
      const { name, value } = target;
      const query = this.$route.query;

      this.$router.replace({
        path: this.$route.path,
        query: {
          ...query,
          [name]: value,
        },
      });
    },
    copyUrl() {
      navigator.clipboard.writeText(this.url)
        .catch(err => {
          // This can happen if the user denies clipboard permissions:
          console.error('Could not copy text: ', err);
        });
    },
  },
};
</script>
