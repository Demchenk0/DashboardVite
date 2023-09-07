import { AiFillHome, AiOutlineArrowUp } from 'react-icons/ai';
import {
	BsBoxArrowUpRight,
	BsFillBarChartFill,
	BsFillBellFill,
	BsFillCreditCard2FrontFill,
} from 'react-icons/bs';
import { HiDocumentSearch, HiMail } from 'react-icons/hi';

const Sidebar = () => {
	return (
		<div className="bg-slate-800 flex-none w-14 sm:w-20 h-screen">
			<div className="h-20 items-center flex">
				<AiFillHome
					fontSize={40}
					className="text-gray-300 left-3 sm:left-6 fixed"
				/>
			</div>
			<div className="fixed left-3 sm:left-6 top-[100px]">
				<BsFillBarChartFill
					fontSize={40}
					className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
				/>
				<HiDocumentSearch
					fontSize={40}
					className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
				/>
				<HiMail
					fontSize={40}
					className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
				/>
				<BsFillCreditCard2FrontFill
					fontSize={40}
					className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
				/>
				<BsFillBellFill
					fontSize={40}
					className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
				/>
			</div>
			<div>
				<div className="fixed bottom-4 left-3 sm:left-6">
					<a href="#top">
						<AiOutlineArrowUp
							fontSize={40}
							className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
						/>
					</a>
					<BsBoxArrowUpRight
						fontSize={40}
						className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
					/>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
