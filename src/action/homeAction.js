import { 
    HOME_TOP_DOCUMENT,
    HOME_TOP_POST,
 } from "../constant/home";

 export function fetchTopPost (posts) {
    return {
        type: HOME_TOP_POST,
        content: posts,
    }
 };

 export function fetchTopDocument (documents) {
    return {
        type: HOME_TOP_DOCUMENT,
        content: documents,
    }
 };