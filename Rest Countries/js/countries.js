 const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => dispalyCountries(data));
 }
const dispalyCountries = countries =>{
    console.log(countries[0])
    const countriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join('');
}
//original step

// const getCountryHTML = country =>{
    
//     return `
//         <div class = "country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}" >
//         </div>
//     `
// }

//option 2

// const getCountryHTML = country =>{
//     const {name, flags} = country;
//     return `
//         <div class = "country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}" >
//         </div>
//     `
// }
//option 3
const getCountryHTML = ({name, flags,area,region}) =>{
    return `
        <div class = "country">
            <h2>${name.common}</h2>
            <p>${area}</p>
            <p>${region}</p>
            <img src="${flags.png}" >
        </div>
    `
}
 loadCountries();