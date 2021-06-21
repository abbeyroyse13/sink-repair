import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests() // grab the local state of the requests data

    const requestToListElement = (request) => {
        return `
            <li class="request_desc">
                ${request.description}
            </li>
                `
    }

    let html = `
        <ul>
            ${
                requests.map(requestToListElement)
            }
        </ul>
    `

    return html
}