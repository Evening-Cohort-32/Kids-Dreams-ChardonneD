import { Children } from "react";
import { getChildren } from "./database.js";
import { getCelebrities } from "./database.js";

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrity = null

    for (const celebrity of celebrityArray) {
        if (celebrity.id === kidObject.celebrityId) {
            celebrity = celebrity
            break
        }
    }

    return celebrity
};

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

