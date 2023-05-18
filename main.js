function createCardElement(cardData) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${cardData.image})`;

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = cardData.title;

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    const healthContainer = document.createElement("div");
    healthContainer.classList.add("health-container");

    const health = document.createElement("div");
    health.classList.add("health");
    health.textContent = cardData.health;

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = `
    <strong>Effect:</strong> ${cardData.description.effect}<br>
    <strong>Backlash:</strong> ${cardData.description.backlash}
    `;
    
    const flavorText = document.createElement("span");
    flavorText.classList.add("flavor-text");
    flavorText.textContent = cardData.flavor_text;

    // healthContainer.appendChild(health);
    // descriptionContainer.appendChild(healthContainer);
    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(flavorText);

    card.appendChild(title);
    card.appendChild(descriptionContainer);

    return card;
}


async function loadCardData() {
    const response = await fetch("./data/enemies.json");
    const cardDataList = await response.json();
    const cardElements = cardDataList.slice(0, 9).map(createCardElement);

    for (let i = 0; i < 9; i++) {
        const cardElement = cardElements[i];
        const cardContainer = document.getElementById(`card${i + 1}`);
        cardContainer.innerHTML = "";
        cardContainer.appendChild(cardElement);
    }
}

loadCardData();
