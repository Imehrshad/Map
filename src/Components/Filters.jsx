import React, { useContext, useEffect } from 'react'
import "./Styles.scss"
import { FilterButton, FiltersList, Marksdata, filteredCloneData } from '../Context/MyContext';

export const Filters = () => {
  const [filterBox, setFilterBox] = useContext(FilterButton)
  const [FiltersStatus, setFiltersStatus] = useContext(FiltersList)
  const [filteredData, setFilteredData] = useContext(filteredCloneData)
  const [Marks, setMarks] = useContext(Marksdata)
  const filterHandler = (e) => {
    const value = e.target.value;
    if (value === "Parking") {
      setFiltersStatus((prev) => ({ ...prev, Parking: !prev.Parking }));

    }
    if (value === "FoodCourt") {
      setFiltersStatus((prev) => ({ ...prev, FoodCourt: !prev.FoodCourt }));

    }
    if (value === "Elevator") {
      setFiltersStatus((prev) => ({ ...prev, Elevator: !prev.Elevator }));

    }
  };
  useEffect(() => {
    let newData = Marks;
  
    if (FiltersStatus.Parking) {
      newData = newData.filter((item) => item.hasParking);
    }
    if (FiltersStatus.Elevator) {
      newData = newData.filter((item) => item.hasElevator);
    }
    if (FiltersStatus.FoodCourt) {
      newData = newData.filter((item) => item.hasFoodCourt);
    }
  
    setFilteredData(newData);
  }, [FiltersStatus]);
  


  return (
    <div className={`filterBox ${filterBox ? "height-10" : ""}`}>
      <button value="Parking" onClick={filterHandler} className={`${FiltersStatus.Parking ? "activeButton" : ""}`}>پارکینگ</button>
      <button value="FoodCourt" onClick={filterHandler} className={`${FiltersStatus.FoodCourt ? "activeButton" : ""}`} >فودکورت</button>
      <button value="Elevator" onClick={filterHandler} className={`${FiltersStatus.Elevator ? "activeButton" : ""}`}>آسانسور</button>
    </div>
  )
}
