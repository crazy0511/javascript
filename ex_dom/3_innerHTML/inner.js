var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java'];
function render(courses) {
    var liTag = '';
    for(var i of courses){
        liTag += `<li>${i}</li>`;
    }
    var ulTag = document.querySelector('.courses-list');
    return ulTag.innerHTML = liTag; 
}

render(courses)
