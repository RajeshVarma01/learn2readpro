const Dropdown = ({options, newcountry, country,setCountry}) => {
    const handledropChange = (e) => {
        setCountry(e.target.value)

    }
	return <select className="country-select-design" onChange={handledropChange} value={country || "+91"}>
	<option value="+91">+91</option>
		{
			options.map((option, index) => {
				return <option className="country-code" key={index} value={option.value}>{option.displayValue}</option>
			})
		}
	</select>
}

export default Dropdown;