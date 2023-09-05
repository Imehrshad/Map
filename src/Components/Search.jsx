import React, { useContext, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import "./Styles.scss";
import { FilterButton, Marksdata, filteredCloneData, inputData, secondFilteredCloneData } from '../Context/MyContext';

export const Search = () => {
    const [inputValue, setinputValue] = useContext(inputData);
    const [filterBox, setFilterBox] = useContext(FilterButton);
    const [filteredData, setFilteredData] = useContext(filteredCloneData);
    const [secondFilteredData, setSecondFilteredData] = useContext(secondFilteredCloneData)
    const searchHandler = (e) => {
        const value = e.target.value;
        setinputValue(value);

    };
    useEffect(() => {
        let filteredItems = filteredData.filter((item) => {
            return item.name.toLowerCase().trim().includes(inputValue.toLowerCase().trim());
        });
        setSecondFilteredData(filteredItems);
    }, [inputValue, filteredData])


    return (
        <div className='searchBox'>
            <input type="text" value={inputValue} onChange={searchHandler} />
            <BiSearch />
            <button onClick={() => setFilterBox(!filterBox)}>فیلترها</button>
        </div>
    );
};
