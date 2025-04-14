'use strict';

const results = document.querySelector('#results');
const tvForm = document.querySelector('#tv');

tvForm.addEventListener('submit', async function (evt) {
  evt.preventDefault();
  const query = document.querySelector('input[name=q]').value.trim();
  if (!query) {
    results.innerHTML = '<p>Please enter a TV show name.</p>';
    return;
  }

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    const jsonData = await response.json();
    results.innerHTML = '';

    for (const tvShow of jsonData) {
      const show = tvShow.show;

      const h2 = document.createElement('h2');
      h2.innerText = show.name;

      const img = document.createElement('img');
      if (show.image?.medium) {
        img.src = show.image.medium;
        img.alt = show.name;
      }

      const a = document.createElement('a');
      a.href = show.url;
      a.innerText = 'View Details';
      a.target = '_blank';

      const summary = document.createElement('div');
      summary.innerHTML = show.summary || 'no summary available.';

      const article = document.createElement('article');
      article.append(h2);
      if (show.image?.medium) article.append(img);
      article.append(a, summary);
      results.appendChild(article);
    }

    if (jsonData.length === 0) {
      results.innerHTML = '<p>No results found.</p>';
    }
  } catch (error) {
    console.error('Fetch error:', error.message);
    results.innerHTML = '<p>Something went wrong. Please try again later.</p>';
  }
});
