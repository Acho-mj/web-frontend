// 프로필 편집
function imgClick(){
    var profile_url = prompt("이미지 url를 입력해 주세요!");
    document.getElementById("pro1").src = profile_url;
}

// 아이디 변경
function nameClick(){
    var newName = prompt("새로운 아이디를 입력하세요.");
    document.getElementById("name").innerHTML=newName;
}


// 소개글 변경
var nickname="";
var write="";
var url="";

function editClick(){
    document.getElementById("edit").innerHTML="프로필 편집 완료";
    document.getElementById("change").style.display='block';
    document.getElementById("intro").style.display='none';
    
    var fin = document.getElementById("edit");
    fin.onclick = finClick;
}

function finClick(){
    document.getElementById("edit").innerHTML="프로필 편집";

    document.getElementById("change").style.display='none';
    document.getElementById("intro").style.display='block';
    
    nickname = document.getElementById('n').value;
    write = document.getElementById('w').value;
    url = document.getElementById('u').value;


    document.getElementById('nickname').innerHTML = nickname;
    document.getElementById('write').innerHTML = write;
    document.getElementById('url').innerHTML = url;
}

//댓글 입력
function commentClick()  {
    var comment = document.getElementById('comment_in').value;
    console.log(comment);
    document.getElementById("post_comment").innerHTML = comment;

}