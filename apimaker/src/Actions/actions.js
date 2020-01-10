import axios from "axios"

export const getApi = () => {
   return dispatch => {
       dispatch({type: "LOADING"});
       axios
       .get("https://rickandmortyapi.com/api/character")
       .then(res => {
           console.log(res.data.results)
          dispatch({type: "GET_API", payload: res.data.results})
       })
       .catch(err => {console.log("ERROR", err)})
   }
}