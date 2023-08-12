import { MenuItem, Select } from '@mui/material'
import React, { useState, useMemo } from 'react'
import countryList from 'react-select-country-list'

function CountrySelector() {
    const options = useMemo(() => countryList().getData(), [])

    return <Select
        className="w-60 h-[34px] self-center font-OpenSans text-[12px] uppercase"
        placeholder="Filter by investment"
        value={0}
    >
        {[{label:'Select Country'},...options].map((item, index) => <MenuItem key={index} value={index}>{item.label}</MenuItem>)}
    </Select>
}

export default CountrySelector