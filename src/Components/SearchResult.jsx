import React, { useContext, useState } from 'react'
import { FiltersList, Marksdata, PositionsData, filteredCloneData } from '../Context/MyContext'
import "./Styles.scss"

export const SearchResult = () => {
    const [Marks, setMarks] = useContext(Marksdata)
    const [filteredData, setFilteredData] = useContext(filteredCloneData)
    const [position, setPosition] = useContext(PositionsData)
    const [FiltersStatus, setFiltersStatus] = useContext(FiltersList)
    const newPositionHandler = (item) => {
        setPosition((prev) => ({ ...prev, currentPosition: item.address, zoom: 16 }))

    }

    return (
        <div className='resultBox'>
            {
                filteredData.map((item) => {
                    return <a className='results' key={item.id} onClick={() => newPositionHandler(item)}>
                        <img src={item.picture} alt={item.name} />
                        <p>{item.name}</p>
                    </a>
                })
            }
        </div>
    )
}
