import {FC} from "react";
import {IApartSingleCardTwo} from "../types";

const ApartSingleCardTwo: FC<IApartSingleCardTwo> = ({bulletpoint}) => {
	return (
		<div className="w-auto p-2">
			<div className="flex flex-wrap px-3 py-2 rounded-full bg-green-flat">
				<div className="flex-1">
					<p className="tracking-wider text-white text-tiny">{bulletpoint}</p>
				</div>
			</div>
		</div>
	);
};

export default ApartSingleCardTwo;
