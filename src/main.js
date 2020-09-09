import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#gif').submit(function(event) {
    event.preventDefault();
    const keyWord = $('#keyword').val();
    //console.log(process.env.API_KEY);

    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/search?q=${keyWord}&api_key=${process.env.API_KEY}&limit=5`;
    console.log(keyWord);
    console.log(process.env.API_KEY);
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }  
    };

    request.open("GET", url, true);
    request.send();
  function getElements(response) {
    $('#gif1.src').text(response.data[0].source_post_url);
  }
  });
});