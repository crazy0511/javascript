// Promise example
var users = [
    {
        id: 1,
        name: 'Phạm Quang Tú'
    },
    {
        id: 2,
        name: 'Phạm Quang Tiếp'
    },
    {
        id: 3,
        name: 'Phạm Quang Tuấn'
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Chào bạn, tôi là Tú.',
    },
    {
        id: 2,
        user_id: 2,
        content: 'Tôi là Tiếp. Bạn bao nhiêu tuổi ?',
    },
    {
        id: 3,
        user_id: 1,
        content: 'Tôi 22 tuổi.',
    },
]

// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// Từ user_id lấy ra user tương ứng

// Fake API

//Tạo hàm đưa ra comment
function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    });
};

//Tạo hàm lấy ra user từ user_id
function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        });

        setTimeout(function () {
            resolve(result);
        }, 1000);
    })
}

getComments()
    .then(function(comments) {
        // Nếu là resolve thì then() thực hiện
        console.log('Hàm đưa ra comments: ');
        console.log(comments);
        console.log('-----------------------');

        // Lấy ra user_id của comments
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        });
        console.log('Lấy user_id từ các comments');
        console.log(userIds);
        console.log('-----------------------');


        return getUsersByIds(userIds)
            .then(function (users) {
                console.log('Lấy users từ các user_id');
                console.log(users);
                console.log('-----------------------');

                return {
                    users: users,
                    comments: comments,
                }
            });
    })
    .then(function(data){
        console.log(data);

        var commentBlock = document.getElementById('comment-block');
        var html = '';

        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user){
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    });