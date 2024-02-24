import { useDispatch, useSelector } from "react-redux";
import { selectFilteredCars } from "redux/selectors";
import { resetFilter } from "redux/filtersSlice";
import { useEffect } from "react";

import FilterSection from "components/FilterSection";
import CarsGrid from "components/CarsGrid";

import ErrorDispay from "components/ErrorDisplay";    


const CatalogPage = () => {  
  const filteredCars = useSelector(selectFilteredCars);

  const messageError = "No results. Clear filters and try again.";
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
  }, [dispatch])
  
  return (
    <>
      <FilterSection />
      {filteredCars.length === 0
        ? <ErrorDispay messageError={messageError} />
        : <CarsGrid cars={filteredCars} />
      }
    </>
     
  );
};

export default CatalogPage;