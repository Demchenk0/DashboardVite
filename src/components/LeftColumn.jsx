import AreaCharchComponent from './AreaCharchComponent';
import CardItem from './CardItem';
import TableComponent from './TableComponent';


const LeftColumn = () => {
	return (
		<div className="w-full flex flex-col justify-between p-2">
			<div className="flex flex-col lg:flex-row gap-2 w-full">
				<CardItem />
				<CardItem />
				<CardItem />
			</div>
			<div className="flex-auto w-full">
				<AreaCharchComponent />
                <TableComponent/>
			</div>
		</div>
	);
};

export default LeftColumn;
