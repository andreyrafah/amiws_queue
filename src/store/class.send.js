import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8001/automation/movidesk'

export default {
  SendData (data) {
    axios.get('', {
      params: data
    }).then(function (response) {
      console.log(response)
    })
      .catch(function (error) {
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }
}
