
var q = 'India';
var apiKey = 'pub_25502edb140f9dfe2a82082cc0df2b4312fef'
//grab the news container
let newsAccordion = document.getElementById('newsAccordion');
  
//create an ajax getrequest
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${q}`,true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let results = json.results;
        console.log(results);
        let newsHtml = "";
        results.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['link']}" target="_blank" >Read more here</a></div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

