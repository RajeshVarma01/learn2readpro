import React from 'react'
import { Country } from 'country-state-city';
console.log(Country.getAllCountries())

const CountryComp = () => {
    const data = Country.getAllCountries().map(country => ({
        value: country.name,
        displayValue: `${country.name} - ${country.phonecode}`
    }))
    return <select option={data}></select>
}

export default CountryComp
