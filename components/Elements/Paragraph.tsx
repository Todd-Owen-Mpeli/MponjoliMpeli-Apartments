import React, {FC} from "react";
import DOMPurify from "isomorphic-dompurify";

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
			className={content ? `block ${tailwindStyling}` : `hidden`}
			dangerouslySetInnerHTML={createParagraphMarkup(content)}
		/>
	);
};

export default Paragraph;
