import hyRequest from "@/services/request";

export function getCityAll(){
    return hyRequest.get({
        url: "/city/all"
    })
}