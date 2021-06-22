import { fetchRequests, sendRequest } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    fetchRequests().then(
        () => {
            render()
        }
    )
)

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()