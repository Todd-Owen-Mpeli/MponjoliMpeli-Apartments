import {FC} from "react";
import {IParagraph} from "../types";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, initialTwo} from "../../animations/animations";

const Paragraph: FC<IParagraph> = ({content, tailwindStyling}) => {
	/* Sanitize paragraph content */
	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<motion.div
			initial={initialTwo}
			whileInView={fadeIn}
			viewport={{once: true}}
			className={content ? `block ${tailwindStyling}` : `hidden`}
			dangerouslySetInnerHTML={createParagraphMarkup(content)}
		/>
	);
};

export default Paragraph;
