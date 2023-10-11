// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {fadeIn, initialTwo} from "../../animations/animations";
import {IApartmentLocationMap} from "@/types/components/index";

const ApartmentLocationMap: FC<IApartmentLocationMap> = ({
	apartmentDisplayOptions,
}) => {
	return (
		<>
			<div className="my-2">
				<motion.div
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className={
						apartmentDisplayOptions === "Jangwani" ? "block" : "hidden"
					}
				>
					<iframe
						width="100%"
						height="650"
						loading="lazy"
						style={{border: "0"}}
						allowFullScreen={true}
						referrerPolicy="no-referrer-when-downgrade"
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d495.324023635533!2d39.215302132172766!3d-6.697324037021307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1694070985606!5m2!1sen!2suk"
					></iframe>
				</motion.div>

				<motion.div
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className={apartmentDisplayOptions === "Mbweni" ? "block" : "hidden"}
				>
					<iframe
						width="100%"
						height="650"
						loading="lazy"
						style={{border: "0"}}
						allowFullScreen={true}
						referrerPolicy="no-referrer-when-downgrade"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13330.861746662305!2d39.15959912580651!3d-6.610979517905736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c57f1cace0b5d%3A0xfee79b1189381de9!2sMbweni%20JKT!5e0!3m2!1sen!2suk!4v1694071322791!5m2!1sen!2suk"
					></iframe>
				</motion.div>
			</div>
		</>
	);
};

export default ApartmentLocationMap;
