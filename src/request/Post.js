import axios from "axios";
import swal from "sweetalert";

class PostRequest {
  constructor(path, data) {
    axios({
      method: "post",
      url: `http://localhost:9000/${path}`,
      data,
    })
      .then(function (response) {
        console.log("added", response);
        swal("Good job!", "Added!", "success");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default PostRequest;
