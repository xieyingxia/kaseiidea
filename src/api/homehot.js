import base from "./base"
import {getData} from "./../utlis/http"

const homehot = {
    homehotData(){
        return getData(base.homeList.homedata)
    }
}
export default homehot