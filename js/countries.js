const loadcountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data = displayCountries(data));
}

const displayCountries = (countries) => {
    console.log(data);
}
loadcountries();