fetch("familyguy.json")
  .then((response) => response.json())

  .then((familyguyCharacters) => {
    let html = "";
    familyguyCharacters.forEach((familyguy) => {
      html += `
        <ul>
        <li>${familyguy.name}</li>
        <li>Home: ${familyguy.home}</li>
        <li>Family-
        <li>Partner(s): ${familyguy.partners.join(", ")}</li>
        <li>Children: ${familyguy.children.join(", ")}</li>
        <li>First appeared on ${familyguy.firstEpisodeAppearance}.</li>
        </ul>
      `;
    });
  });

document.body.innerHTML = html;
