import axios from "axios"
// const data = require("google-play-scraper")


export function allItem(){

    return {
        type : "ALL_ITEM",
        payload : axios.get(`http://192.168.43.54:8000/items`)
    }
}

export function singleAccount(id){
    // data simulation

    return {
        type: 'GET_ACCOUNT',
        payload: axios.get(`http://192.168.43.54:8000/users/${id}`)
    }
}
