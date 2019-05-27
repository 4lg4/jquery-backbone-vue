const BackboneButton = Backbone.View.extend({
    events: {
      'click .btn': '_click',
    },
    template: _.template(`<div class="btn btn-xl btn-primary"><%= description %></div>`),
    description: '',
    initialize: function({description, click}) {
      this.description = description;
      this.click = click;
      this.render();
    },
    render: function() {
      this.$el.html(this.template({description: this.description}));
      return this;
    },
    _click: function() {      
      if (typeof this.click === 'function') {
        return this.click();
      }
    },
});

const BackboneApp = Backbone.View.extend({
    el: document.querySelector('[data-backbone-module="app"]'),
    template: _.template(`
      <div class="card">
        <div class="card-body">
          <%= description %>
          <div data-backbone-template-container="my-button"></div>
        </div>
      </div>
    `),
    description: '',
    initialize: function(description) {
      this.description = description;
    },
    render: function() {
      this.$el.html(this.template({description: this.description}));

      const button = new BackboneButton({
        description:'Backbone button as a reusable component', 
        click: function() {
          alert('Backbone button clicked');
        }
      });

      this.$el.find('[data-backbone-template-container="my-button"]').html(button.$el);
      return this;
    }
});

const backboneApp = new BackboneApp('Hello Backbone App');
backboneApp.render();
