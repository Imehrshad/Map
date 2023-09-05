import React, { useContext, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import "./Styles.scss";
import { FilterButton, Marksdata, filteredCloneData, inputData } from '../Context/MyContext';

export const Search = () => {
    const [inputValue, setinputValue] = useContext(inputData);
    const [filterBox, setFilterBox] = useContext(FilterButton);
    const [filteredData, setFilteredData] = useContext(filteredCloneData);
    const [Marks, setMarks] = useContext(Marksdata)

    const searchHandler = (e) => {
        const value = e.target.value;
        setinputValue(value);

    };
    useEffect(() => {
        let filteredItems = Marks.filter((item) => {
            return item.name.toLowerCase().trim().includes(inputValue.toLowerCase().trim());
        });
        setFilteredData(filteredItems);
    }, [inputValue, Marks])


    return (
        <div className='searchBox'>
            <input type="text" value={inputValue} onChange={searchHandler} />
            <BiSearch />
            <button onClick={() => setFilterBox(!filterBox)}>فیلترها</button>
        </div>
    );
};
