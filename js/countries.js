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
const getCountryHTML = ({ name, flags, area }) => {
    return `
    <div class="country">
        <h3> ${name} </h3>
        <p> ${area} <p/>
        <img src="${flags.png}"></img>
    </div>
    `
}



loadcountries();