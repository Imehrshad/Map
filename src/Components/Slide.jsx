import React, { useContext, useEffect, useState } from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi';
import "./Styles.scss"
import { FilterButton, slideClickedData } from '../Context/MyContext';
import { Filters } from './Filters';
import { SearchResult } from './SearchResult';
import { Search } from './Search';

export const Slide = () => {
    const [slideClicked, setSlideClicked] = useContext(slideClickedData)
    return (
        <div className={`slide ${slideClicked ? `slideOpen` : ``}`}  >
            <span onClick={() => setSlideClicked(!slideClicked)}><BiLeftArrowAlt /></span>
            <Search />
            <Filters />
            <SearchResult />
        </div>
    )
}
