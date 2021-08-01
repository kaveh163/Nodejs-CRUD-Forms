$(function() {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/home',
        success: function(data) {
            console.log(data);
            $('#list').empty();
            let myHTML = "";
            data.articles.forEach((value, index)=> {
                myHTML += `<li class="list-group-item"><a href= '/show/article/${value.count}'>${value.title}</a></li>`
            })
            $('#list').append(myHTML);
        },
        error: function(err) {
            console.log(err);
        }
    })
})