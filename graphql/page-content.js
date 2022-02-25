/*
 * Graphql - Page Content
 */

import { gql } from '@apollo/client';
import page from './page';
import content from './content';

export const START = gql`
    query Start {
        start {
            data {
                attributes {
                    ${page}
                    ${content}
                }
            }
        }
    }
`;

export const ABOUT = gql`
    query About {
        about {
            data {
                attributes {
                    ${page}
                    ${content}
                }
            }
        }
    }
`;

export const PAGES = gql`
    query Pages {
        pages {
            data {
                attributes {
                    path
                }
            }
        }
    }
`;

export const PAGE = gql`
    query Page($path: String!) {
        pages(filters: { path: { eq: $path } }) {
            data {
                attributes {
                    title
                    path
                    ${page}
                    ${content}
                }
            }
        }
    }
`;