const VueButton = Vue.component('vue-button', {
  template: `
    <div class="btn btn-xl btn-primary" @click='click'>
      <slot></slot>
    </div>
  `,
  methods: {
    click() {
      this.$emit('click');
    },
  },
});

const vueApp = new Vue({
    el: '[data-vue-module="app"]',
    components: {
      VueButton,
    },
    props: {
      description: {
        type: String,
        default: 'Hello Vue App',
      },
    },
    template: `
      <div class="card">
        <div class="card-body">
          {{ description }} <br>
          <vue-button @click="click">Vue button as a reusable component</vue-button>
        </div>
      </div>
    `,
    methods: {
      click: function() {
        alert('Vue button clicked');
      },
    },
});
