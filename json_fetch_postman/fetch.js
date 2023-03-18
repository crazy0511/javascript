var postAPI = 'https://jsonplaceholder.typicode.com/posts';

// stream
fetch(postAPI)
    .then(function(response){
        return response.json();
        //JSON.parse: JSON --> Javascript type
    })
    .then(function(posts){
        console.log(posts);
    })