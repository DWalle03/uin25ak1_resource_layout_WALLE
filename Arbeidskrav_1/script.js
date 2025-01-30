// Lager en array for alle knappene som skiller hvilken tekst som skal vises
const categories = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Sanity and headless CMS",
];
let activeButton = "HTML";

// Lage funksjon for "Sanity and headless CMS" slik at det ikke blir rød error i HTML
function getCategoryId(category) {
  // Hvis category er lik "Sanity and headless CMS" så returneres de 6 første bokstavene, altså "Sanity"
  return category === "Sanity and headless CMS"
    ? category.substring(0, 6): category;
}

// Legger til .map for å mappe ut kategoriene og event listeners for knappene
categories.map((category) => {
  // Kaller på getCategoryId funksjonen
  document .getElementById(getCategoryId(category)).addEventListener("click", () => {
      // Funksjonen viser hvilken kategori som vises og endrer til den du trykker på
      displayCategories(category);
    });
});

// Lager en funksjon som skal skrive ut innholdet på hver tittel
function displayCategories(category) {
  // Bruker .filter() for å filtrere gjennom resources for at kategoriene skal være lik som den som har blitt trykket på
  const resource = resources.filter((res) => res.category === category)[0];
  // Lager en template litterate for å kunne legge inn informasjonen og skriver ut i HTML via textBox
  document.getElementById("textBox").innerHTML = `    
    <article>
      <h3>${resource.category}</h3>
      <p>${resource.text}</p>
      <ul>
        ${resource.sources
          // Bruker .map for å kunne skille mellom URL-en og tittelen til kildene.
          .map(
            (source) => `<li><a href="${source.url}">${source.title}</a></li>`
          )
          // .join("") for å fjerne komma
          .join("")}
      </ul>
    </article>`;

  // Update active button
  document.getElementById(getCategoryId(activeButton)).classList.remove("active");
  document.getElementById(getCategoryId(category)).classList.add("active");
  activeButton = category;
}

// Kaller på displayCategories og peker spesifikt på HTML for at HTML skal være tilstedet ved oppstart av side
displayCategories("HTML");
