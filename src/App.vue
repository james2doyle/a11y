<template>
  <div id="app" class="antialiased text-gray-900 flex flex-col min-h-screen bg-gray-200">
    <Nav></Nav>
    <div class="w-full max-w-6xl mx-auto px-4">
      <Form></Form>
      <Results></Results>
    </div>
    <div class="flex-shrink-0 py-12 text-center">
      <div class="mt-2">
        <a href="https://github.com/james2doyle/vue-tailwind-starter" class="text-sm font-semibold text-gray-500 hover:underline">
          Source on GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from 'Components/Nav.vue';
import Form from 'Components/Form.vue';
import Results from 'Components/Results.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Form,
    Results,
  },
};
</script>

<style>
  @import './styles/style.css';
</style>
