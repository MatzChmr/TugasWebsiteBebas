const bundles = [
    {
        name: "Elderflame Collection",
        price: "9,900 VP",
        description: "Skins in Bundle Including : <br> <br> Elderflame Vandal <br> Elderflame Operator <br> Elderflame Frenzy <br> Elderflame Judge <br> Elderflame Dagger",
        image: "https://static.wikia.nocookie.net/valorant/images/f/fa/Bundle_Elderflame.png/revision/latest/scale-to-width-down/1200?cb=20200710132118"
    },
    {
        name: "Sovereign Collection",
        price: "7,100 VP",
        description: "Skins in Bundle Including : <br> <br> Sovereign Ghost <br> Sovereign Stinger <br> Sovereign Guardian <br> Sovereign Marshall <br> Sovereign Sword",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFBSengjURsEReI47sl6AmCW2HSQ1R7cABw&s"
    },
    {
        name: "Glitchpop Collection",
        price: "8,700 VP",
        description: "Skins in Bundle Including : <br> <br> Glitchpop Odin <br> Glitchpop Bulldog <br> Glitchpop Frenzy <br> Glitchpop Judge <br> Glitchpop Dagger",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-apXlgWK_drwx9mJC28MATryw_KRQ3naHkQ&s"
    },
    {
        name: "Prime Collection",
        price: "7,100 VP",
        description: "Skins in Bundle Including : <br> <br> Prime Vandal <br> Prime Guardian <br> Prime Spectre <br> Prime Classic <br> Prime Axe",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UW0Ai7yUylM1DETymddRkdKTZM--HmEISQ&s"
    },
    {
        name: "RGX 11z Pro Collection",
        price: "8,700 VP",
        description: "Skins in Bundle Including : <br> <br> RGX 11z Pro Vandal <br> RGX 11z Pro Guardian <br> RGX 11z Pro Stinger <br> RGX 11z Pro Frenzy <br> RGX 11z Pro Blade",
        image: "https://static.wikia.nocookie.net/valorant/images/3/31/Bundle_RGX_11z_Pro.png/revision/latest/scale-to-width/360?cb=20211006211538"
    },
    {
        name: "Prelude to Chaos Collection",
        price: "8,700 VP",
        description: "Skins in Bundle Including : <br> <br> Prelude to Chaos Vandal <br> Prelude to Chaos Operator <br> Prelude to Chaos Stinger <br> Prelude to Chaos Shorty <br> Blade of Chaos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RXwE9jRUg0Scz6yFIhyZUIHU3lZu0qz6rA&s"
    },
    {
        name: "Gaia's Vengeance Collection",
        price: "7,100 VP",
        description: "Skins in Bundle Including : <br> <br> Gaia's Vengeance Vandal <br> Gaia's Vengeance Marshall <br> Gaia's Vengeance Ghost <br> Gaia's Vengeance Guardian <br> Gaia's Wrath",
        image: "https://static.wikia.nocookie.net/valorant/images/3/3f/Bundle_Gaia%27s_Vengeance.png/revision/latest/scale-to-width-down/1000?cb=20220412130814"
    },
    {
        name: "Kuronami Collection",
        price: "9,500 VP",
        description: "Skins in Bundle Including : <br> <br> Kuronami Vandal <br> Kuronami Marshall <br> Kuronami Sheriff <br> Kuronami Spectre <br> Kuronami no Yaiba",
        image: "https://esports.id/img/article/129420240111184832.jpg"
    },
    {
        name: "Magepunk Collection",
        price: "7,100 VP",
        description: "Skins in Bundle Including : <br> <br> Magepunk Marshall <br> Magepunk Bucky <br> Magepunk Ghost <br> Magepunk Spectre <br> Magepunk Electroblade",
        image: "https://static.wikia.nocookie.net/valorant/images/7/7d/Bundle_Magepunk.png/revision/latest/scale-to-width-down/1000?cb=20210331003907"
    },
    {
        name: "Recon Collection",
        price: "7,100 VP",
        description: "Skins in Bundle Including : <br> <br> Recon Phantom <br> Recon Spectre <br> Recon Ghost <br> Recon Guardian <br> Recon Balisong",
        image: "https://static.wikia.nocookie.net/valorant/images/2/21/Bundle_Recon.png/revision/latest/scale-to-width-down/1000?cb=20210824174403"
    },
    {
        name: "Oni Collection",
        price: "7,100 VP",
        description: "Skins in Bundle Including : <br> <br> Oni Phantom <br> Oni Guardian <br> Oni Bucky <br> Oni Shorty <br> Oni Claw",
        image: "https://static.wikia.nocookie.net/valorant/images/2/24/Bundle_Oni.png/revision/latest/scale-to-width-down/1000?cb=20210715125829"
    },
    {
        name: "Ion Collection",
        price: "7,100 VP",
        description: "Skins in Bundle Including : <br> <br> Ion Phantom <br> Ion Operator <br> Ion Sheriff <br> Ion Bucky <br> Ion Energy Sword",
        image: "https://static.wikia.nocookie.net/valorant/images/2/20/Bundle_Ion.png/revision/latest/scale-to-width-down/1000?cb=20210715135413"
    },
    {
        name: "Origin Collection",
        price: "7,100 VP",
        description: "Skins in Bundle Including : <br> <br> Origin Vandal <br> Origin Operator <br> Origin Frenzy <br> Origin Bucky <br> Origin Crescent Blade",
        image: "https://static.wikia.nocookie.net/valorant/images/4/4c/Bundle_Origin.png/revision/latest/scale-to-width-down/1000?cb=20210613213259"
    },
    {
        name: "ChronoVoid Collection",
        price: "8,700 VP",
        description: "Skins in Bundle Including : <br> <br> ChronoVoid Vandal <br> ChronoVoid Phantom <br> ChronoVoid Sheriff <br> ChronoVoid Judge <br> Terminus A Quo",
        image: "https://static.wikia.nocookie.net/valorant/images/4/46/Bundle_ChronoVoid.png/revision/latest/scale-to-width-down/1000?cb=20220920142825"
    },
    {
        name: "Neo Frontier Collection",
        price: "8,700 VP",
        description: "Skins in Bundle Including : <br> <br> Neo Frontier Phantom <br> Neo Frontier Marshall <br> Neo Frontier Odin <br> Neo Frontier Sheriff <br> Neo Frontier Axe",
        image: "https://static.wikia.nocookie.net/valorant/images/5/54/Bundle_Neo_Frontier.png/revision/latest/scale-to-width-down/1000?cb=20230626185651"
    }
];

function displayBundles(filteredBundles) {
    const container = document.getElementById('bundleContainer');
    container.innerHTML = '';
    filteredBundles.forEach(bundle => {
        const bundleElement = document.createElement('div');
        bundleElement.className = 'bundle';

        bundleElement.innerHTML = `
            <img src="${bundle.image}" alt="${bundle.name}">
            <h3>${bundle.name}</h3>
            <h5>${bundle.description}</h5>
            <p>${bundle.price}</p>
        `;

        bundleElement.addEventListener('click', () => {
            bundleElement.classList.add('clicked');
            openModal(bundle);
        });

        container.appendChild(bundleElement);
    });
}

function filterBundles() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredBundles = bundles.filter(bundle => 
        bundle.name.toLowerCase().includes(searchInput) ||
        bundle.description.toLowerCase().includes(searchInput)
    );
    displayBundles(filteredBundles);
}

function openModal(bundle) {
    document.getElementById('modalTitle').innerText = bundle.name;
    document.getElementById('modalImage').src = bundle.image;
    document.getElementById('modalDescription').innerHTML = bundle.description;
    document.getElementById('modalPrice').innerText = bundle.price;
    document.getElementById('myModal').style.display = "block";
}

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('myModal').style.display = "none";
});

window.onclick = function(event) {
    if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
}

document.getElementById('searchInput').addEventListener('input', filterBundles);

window.onload = () => {
    displayBundles(bundles);
};