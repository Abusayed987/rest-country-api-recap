const loadcountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = (countries) => {

    const countriesHTML = countries.map(country => getCountryHTML(country));

    const container = document.getElementById('countries');

    container.innerHTML = countriesHTML.join(' ');
}
const getCountryHTML = country => {
    return `
    <div>
        <h3> ${country.name} </h3>
        <img src="${country.flags.png}"></img>
    </div>
    `
}



loadcountries();