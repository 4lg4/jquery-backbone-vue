const app = $('[data-jquery-module="app"]');

app.find('[data-jquery-template-container="my-description"]').text('Hello Jquery App');

const button = app.find('[data-jquery-template-container="my-button"]');
button.click(function() {
  alert('Jquery button clicked');
});
