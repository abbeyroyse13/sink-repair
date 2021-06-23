import { getRequests, deleteRequest } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests() // grab the local state of the requests data

    const requestToListElement = (request) => {
        return `
            <li class="request_desc">
        ${request.description}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
            </li>
                `
    }

    const mainContainer = document.querySelector("#container")

    mainContainer.addEventListener("click", click => {
        if (click.target.id.startsWith("request--")) {
            const [, requestId] = click.target.id.split("--")
            deleteRequest(parseInt(requestId))
        }
    })

    let html = `
        <ul>
            ${requests.map(requestToListElement)
        }
        </ul>
    `

    return html
}