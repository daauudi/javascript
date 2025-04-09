'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById('target');

for (let i = 0; i < 3; i++) {
  target.innerHTML += '<li>' + names[i] + '</li>';
}