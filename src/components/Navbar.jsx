import { TextInput } from "@tremor/react";
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
	return (
		<div id="top"
        className="relative w-full sm:flex justify-between items-center p-2">
			<h1 className="font-bold text-gray-300">Dashboard</h1>
			<div className="py-2">
				<TextInput icon={AiOutlineSearch} placeholder="Search..." />
			</div>
		</div>
	);
};

export default Navbar;
