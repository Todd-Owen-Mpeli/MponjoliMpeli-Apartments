import DOMPurify from "isomorphic-dompurify";
import React, {FC} from "react";

interface ParagraphProps {
	content: string;
	tailwindStyling: string;
}

const Paragraph: FC<ParagraphProps> = ({content, tailwindStyling}) => {
	/* Sanitize paragraph content */

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div
			className={
				content ? `block ${tailwindStyling}` : `hidden ${tailwindStyling}`
			}
			dangerouslySetInnerHTML={createParagraphMarkup(content)}
		/>
	);
};

export default Paragraph;
