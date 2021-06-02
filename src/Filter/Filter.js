import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ search }) => {
  const [value, setValue] = useState('all')

  const handleChange = event => {
    setValue(event.target.value)
    search(event)
  }

  return (
    <>
      <label htmlFor='filter'> Filter by Section:</label>
      <select name='filter' value={value} onChange={event => handleChange(event)} id='filter' >
        <option value='all'>all</option>
        <option value='arts'>arts</option>
        <option value='automobiles'>automobiles</option>
        <option value='books'>books</option>
        <option value='business'>business</option>
        <option value='fashion'>fashion</option>
        <option value='food'>food</option>
        <option value='health'>health</option>
        <option value='home'>home</option>
        <option value='insider'>insider</option>
        <option value='magazine'>magazine</option>
        <option value='movies'>movies</option>
        <option value='nyregion'>nyregion</option>
        <option value='obituaries'>obituaries</option>
        <option value='opinion'>opinion</option>
        <option value='politics'>politics</option>
        <option value='realestate'>realestate</option>
        <option value='science'>science</option>
        <option value='sports'>sports</option>
        <option value='sundayreview'>sundayreview</option>
        <option value='technology'>technology</option>
        <option value='theater'>theater</option>
        <option value='t-magazine'>t-magazine</option>
        <option value='travel'>travel</option>
        <option value='upshot'>upshot</option>
        <option value='us'>us</option>
        <option value='world'>world</option>
      </select>
    </>
  )
}

export default Filter;