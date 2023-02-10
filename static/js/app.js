// Randomly select an episode number for Star Wars
let text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 9) + 1);

// Select the counter h3 element
let counter = d3.select('.counter');

// Select the buttons and use D3 `.on` to attach a click handler
d3.selectAll('button').on('click', function(){

  // Create a variable for the button selected
  button = d3.select(this);

  // Create a varaible to hold the increment or decrement
  val = parseInt(button.attr('value'));

  // Create a variable to hold the current counter value
  let currentCounter = parseInt(counter.text())

  // Update the counter value
  currentCounter += val;

  // Set the counter h3 text to the new count
  counter.text(currentCounter);
})