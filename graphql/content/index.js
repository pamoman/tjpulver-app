/*
 * Graphql - Content
 */

import article from './blocks/article';
import company from './blocks/company';
import gallery from './blocks/gallery';
import heading from './blocks/heading';
import image from './blocks/image';
import map from './blocks/map';
import pdf from './blocks/pdf';
import people from './blocks/people';
import slideshow from './blocks/slideshow';
import staff from './blocks/staff';
import stream from './blocks/stream';
import video from './blocks/video';
import wysiwyg from './blocks/wysiwyg';

const blocks = `
    ${company}
    ${gallery}
    ${heading}
    ${image}
    ${map}
    ${pdf}
    ${people}
    ${slideshow}
    ${staff}
    ${stream}
    ${video}
    ${wysiwyg}
`;

export default `
    content {
        ${blocks}
        ${article(blocks)}
    }
`;
