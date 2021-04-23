import axios from "axios";

export default API; {
    returnEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=10")
    }
}