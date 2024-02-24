import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectFavoriteCars } from "redux/selectors";

import ErrorDisplay from "components/ErrorDisplay";
import CarsGrid from "components/CarsGrid";

const FavoritesPage = () => {
  const navigate = useNavigate();
 
  const cars = useSelector(selectFavoriteCars);
  const messageError = "No saved items found. Start exploring now!";
  const btnErrorLabel = "Go to Catalog";
  const onClickBtnError = () => navigate('/catalog');  
   
  return (
    <>
      {cars.length === 0
        ? <ErrorDisplay messageError={messageError} onButtonClick={onClickBtnError} buttonLabel={btnErrorLabel} showButton={true} />
        : <>
          <CarsGrid cars={cars} />
        </>
      }
    </>
  );
};

export default FavoritesPage;

