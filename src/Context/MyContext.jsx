import React, { createContext, useState } from 'react'
export const PositionsData = createContext()
export const Marksdata = createContext()
export const FilterButton = createContext()
export const FiltersList = createContext()
export const inputData = createContext()
export const slideClickedData = createContext()
export const filteredCloneData = createContext()
export const secondFilteredCloneData = createContext()
import image from "../assets/First-image.jpg"


export const MyContext = (props) => {
    const [inputValue, setinputValue] = useState("")
    const [slideClicked, setSlideClicked] = useState(false)
    const [filterBox, setFilterBox] = useState(false)
    const [position, setPosition] = useState({
        currentPosition: [35.689198, 51.388973],
        zoom: 12
    })
    const [FiltersStatus, setFiltersStatus] = useState({
        Parking: false,
        Elevator: false,
        FoodCourt: false
    })
    const [Marks, setMarks] = useState([
        { id: 1, name: "سینما کوروش", hasFoodCourt: false, hasParking: true, hasElevator: true, address: [35.700343, 51.412644], picture: image },
        { id: 2, name: "سینما پردیس ملت", hasFoodCourt: true, hasParking: true, hasElevator: false, address: [35.696440, 51.357355], picture: image },
        { id: 3, name: "سینما آزادی", hasFoodCourt: true, hasParking: true, hasElevator: true, address: [35.644023, 51.307710], picture: image },
        { id: 4, name: "سینما بهمن", hasFoodCourt: true, hasParking: false, hasElevator: true, address: [35.650998, 51.467089], picture: image },
    ])
    const [filteredData, setFilteredData] = useState(Marks)
    const [secondFilteredData, setSecondFilteredData] = useState(filteredData)
    return (
        <PositionsData.Provider value={[position, setPosition]}>
            <Marksdata.Provider value={[Marks, setMarks]}>
                <FilterButton.Provider value={[filterBox, setFilterBox]}>
                    <FiltersList.Provider value={[FiltersStatus, setFiltersStatus]}>
                        <inputData.Provider value={[inputValue, setinputValue]}>
                            <slideClickedData.Provider value={[slideClicked, setSlideClicked]}>
                                <filteredCloneData.Provider value={[filteredData, setFilteredData]}>
                                    <secondFilteredCloneData.Provider value={[secondFilteredData, setSecondFilteredData]}>
                                        {props.children}
                                    </secondFilteredCloneData.Provider>
                                </filteredCloneData.Provider>
                            </slideClickedData.Provider>
                        </inputData.Provider>
                    </FiltersList.Provider>
                </FilterButton.Provider>
            </Marksdata.Provider>
        </PositionsData.Provider>
    )
}
