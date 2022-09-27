import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';


export default function SelectCountry() {
    const [ value, setValue ] = React.useState(null);
    return (
        <div>
            <CountrySelect
                value={value}
                onChange={setValue}
                matchNameFromStart={false}
                matchAbbreviations
                required
            />
        </div>
    )
}
