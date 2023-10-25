
document.getElementById('profile-avatar').addEventListener('click', function () {
    document.getElementById('fileInput').click();
});

function newAvatarFile(prevImage, input, color){
    var reader = new FileReader();  
    reader.onload = function(e) {
       color.style.backgroundColor = '#ffffff';
       $(prevImage).attr('src', e.target.result);
       }

        reader.readAsDataURL(input.files[0])

}

function readURL(input) {

    let color = document.getElementById('profile-avatar');
    if (input.files && input.files[0]) {
        let prevImage = document.getElementById('prevImage-2');
    newAvatarFile(prevImage, input, color)  
    }

}

    $("#fileInput").change(function() {
        readURL(this);
    });

$('#button-user-img').click(function(e) {

    let input = document.getElementById('fileInput'),
    prevImage = document.getElementById('avatar'),
    color = document.getElementById('profile-avatar-2');
    newAvatarFile(prevImage, input ,color)
    readURL(avatar)
   
});