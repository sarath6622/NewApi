  // variable binded with dom element for form tag
  const searchForm = document.getElementById('search');
  // variable binded with dom element for form input
  const inputValue = document.getElementById('input');


  // calling the function when the form submit occurs
  searchForm.addEventListener("submit", function (event) {
    console.log("Button clicked");
    // Instantiate an new XHR Object
    const xhr = new XMLHttpRequest();

    // create a user account in the newsapi website to generate an api key and paste the value here
    const apiKey = '63e0ff07074b40bab73b0828c94fff45';

    // url for fetching the news
    const url = `https://newsapi.org/v2/everything?q=${inputValue.value}&apiKey=${apiKey}`
    console.log(url);

    // Open an obejct (GET/POST, url of the api call
    xhr.open("GET", url, true);
    // When ready
    xhr.onload = function () {
      if (this.status === 200) {

        // converting the string to json 
        obj = JSON.parse(this.responseText);

        // looping for 10 values
        for (var i = 0; i < 10; i++) {

          // I am creating a div with the body of the div as below
          // <div id="news-articles" class="container border-box mt-5 p-3">
          // <div class="row">
          //     <div class="col-8">
          //       <h3>Heading</h3>
          //       <small><b>Author</b> </small>
          //       <small>Time</small>
          //       <p>Description</p>
          //       <a href="">Read More</a>
          //     </div>
          //     <div class="col-4">
          //       <img src="./1.jpg" alt="">
          //     </div>
          //   </div>
          // </div>

          // for creating the container div
          var divContainer = document.createElement('div');
          divContainer.id = 'news-articles';
          divContainer.className = 'container border-box mt-5 p-3';
          document.body.appendChild(divContainer);

          // creating the row div
          var divChild = document.createElement('div');
          divChild.className = 'row';
          divContainer.appendChild(divChild);

          // for creating the first inner div of row div
          var divChildcol1 = document.createElement('div');
          divChildcol1.className = 'col-8';
          divChild.appendChild(divChildcol1);

          // creating the h3 element
          var title = document.createElement('h3');
          title.innerHTML=`${obj.articles[i].title}`;
          divChildcol1.appendChild(title);

          // for creating the element for author details
          var autor = document.createElement('small');
          autor.innerHTML=`<b>${obj.articles[i].author}</b>`;
          divChildcol1.appendChild(autor);

          // for creating a element to hold timestamp
          var time = document.createElement('small');
          time.innerHTML=`${obj.articles[i].publishedAt}`;
          divChildcol1.appendChild(time);

          // for the news 
          var news = document.createElement('p');
          news.innerHTML=`${obj.articles[i].description}`;
          divChildcol1.appendChild(news);

          // for the link
          var link = document.createElement('a');
          link.href=`${obj.articles[i].url}`;
          divChildcol1.appendChild(link);

          // for creating the second inner div of row div
          var divChildcol2 = document.createElement('div');
          divChildcol2.className = 'col-4';
          divChild.appendChild(divChildcol2);

          // for the image
          var image = document.createElement('img');
          image.src=`${obj.articles[i].urlToImage}`;
          divChildcol2.appendChild(image);

        }


      } else {
        console.log("File not found");
      }
    }
    xhr.send();
  });