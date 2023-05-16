import enemies from './data/enemies.json' assert { type: 'json' };

const data = enemies[0];

document.querySelector('.card').style.backgroundImage = `url(${data.image})`;
document.querySelector('.title').textContent = data.title;
document.querySelector('.description').textContent = data.description;
document.querySelector('.flavor-text').textContent = data.flavor_text;
document.querySelector('.health').textContent = data.health;
