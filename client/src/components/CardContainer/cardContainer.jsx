import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/card";
import style from "./cardContainer.module.css"

import Pagination from "../Pagination/paginationTry";
import { setPage } from "../../redux/actions";



const CardContainer = () => {
	const dispatch=useDispatch();
	const filtered = useSelector(state => state.filtered);
	const dogs = useSelector(state => state.dogs);
	const filterDogsDB = useSelector(state => state.filterDogsDb);
	const filterDogsTemp = useSelector(state => state.filterDogsTemp);
	const page=useSelector(state => state.page);
	
	let firstId = (page - 1) * 8;
	let lastId = firstId + 8;
	let filterDogs;
	if ((filtered.length === 0 && filterDogsDB.length === 0) && filterDogsTemp.length === 0) {
		filterDogs = dogs;
	} else {
		filterDogs = dogs.filter(dog => {
			return filtered.some(obj => JSON.stringify(obj) === JSON.stringify(dog));
		});
	}
	let dogsPerPage = filterDogs.slice(firstId, lastId);
	const handlePageChange = (page) => {
		dispatch(setPage(page));
	}

	return (
		<>
			<Pagination totalRecords={filterDogs.length} onPageChanged={handlePageChange} currentPage={page} pageLimit={8} />
			<div className={style.cardsContainer}>
				{dogsPerPage.map(dog => {
					return <Card key={dog.id} {...dog} />
				})}
			</div>
		</>
	)
};

export default CardContainer;