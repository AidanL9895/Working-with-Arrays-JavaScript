document.addEventListener("DOMContentLoaded", () => {
    const eternals = [
        { name: "Ikaris", skills: ["flight", "strength", "laser vision"], imageUrl: "ikaris.jpg" },
        { name: "Sersi", skills: ["matter manipulation", "immortality", "languages"], imageUrl: "sersi.jpg" },
        { name: "Thena", skills: ["sword", "combat", "speed"], imageUrl: "thena.jpg" },
        { name: "Kingo", skills: ["energy projection", "agility", "sword"], imageUrl: "kingo.jpg" },
        { name: "Makkari", skills: ["speed", "perception", "languages"], imageUrl: "makkari.jpg" }
    ];
    
    const body = document.body;
    
    const title = document.createElement("h1");
    title.textContent = "Eternals Characters";
    body.appendChild(title);
    
    const characterSection = document.createElement("h2");
    characterSection.textContent = "Character List";
    body.appendChild(characterSection);
    
    const listContainer = document.createElement("ul");
    body.appendChild(listContainer);
    
    const powerSection = document.createElement("h2");
    powerSection.textContent = "All Powers";
    body.appendChild(powerSection);
    
    const powerListContainer = document.createElement("ul");
    body.appendChild(powerListContainer);
    
    const searchSection = document.createElement("h2");
    searchSection.textContent = "Search for a Character by Skill";
    body.appendChild(searchSection);
    
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Enter a skill (e.g., speed)");
    body.appendChild(searchInput);
    
    const searchButton = document.createElement("button");
    searchButton.textContent = "Search";
    body.appendChild(searchButton);
    
    const searchResultsTitle = document.createElement("h3");
    searchResultsTitle.textContent = "Search Results";
    body.appendChild(searchResultsTitle);
    
    const searchResults = document.createElement("ul");
    body.appendChild(searchResults);
    
    function displayCharacters() {
        eternals.forEach(eternal => {
            const li = document.createElement("li");
            li.textContent = eternal.name;
            listContainer.appendChild(li);
        });
    }
    
    function displayPowers() {
        let allPowers = new Set();
        eternals.forEach(eternal => eternal.skills.forEach(skill => allPowers.add(skill)));
        allPowers.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            powerListContainer.appendChild(li);
        });
    }
    
    function searchCharacter() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";
        
        const foundCharacters = eternals.filter(eternal => eternal.skills.includes(query));
        
        if (foundCharacters.length > 0) {
            foundCharacters.forEach(eternal => {
                const li = document.createElement("li");
                li.textContent = eternal.name;
                
                const img = document.createElement("img");
                img.setAttribute("src", eternal.imageUrl);
                img.setAttribute("alt", eternal.name);
                img.style.width = "100px"; 
                
                const resultItem = document.createElement("div");
                resultItem.appendChild(li);
                resultItem.appendChild(img);
                
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.textContent = "No characters found with that skill.";
        }
    }
    
    searchButton.addEventListener("click", searchCharacter);
    
    displayCharacters();
    displayPowers();
});
