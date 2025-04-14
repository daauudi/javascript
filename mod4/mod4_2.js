'use strict';

const tvForm = document.querySelector('#tv');
tvForm.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const query = document.querySelector('input[name=q]').value;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const jsonData = await response.json();
    console.log(jsonData); // Log result to console
  } catch (error) {
    console.error('Error:', error.message);
  }
});
