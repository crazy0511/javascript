var courseApi = 'http://localhost:3000/courses';

function start(){
    getCourses(renderCourses);

    handleCreateForm();

}

start();

// Functions 
function getCourses(callback){
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function createCourses(data, callback){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(function(response){
            response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id){
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(courseApi + '/' + id, options)
        .then(function(response){
            response.json();
        })
        .then(function(){
            var courseItem = document.querySelector('.course-item-' + id);
            if(courseItem){
                courseItem.remove();
            }
        });
}

function renderCourses(courses){
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course){
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <h4>${course.description}</h4>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm(){
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        // console.log(name);
        // console.log(description);
        var formData = {
            name: name,
            description: description
        };
        createCourses(formData, function(){
            getCourses(renderCourses);
        });
    }   
}