import {FC} from "react";

interface IProps {
	bulletpoint: string;
}

const ApartSingleCardTwo: FC<IProps> = ({bulletpoint}) => {
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
