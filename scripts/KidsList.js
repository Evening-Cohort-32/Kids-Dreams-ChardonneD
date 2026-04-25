import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const kid of children) {
        html += `<li data-id="${kid.id}" data-type="child" data-name="${kid.name}" data-wish="${kid.wish}">${kid.name}</li>`
    }

    html += "</ol>"
    return html
}

