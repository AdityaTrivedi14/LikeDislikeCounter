var likeCount = document.querySelector('#likeCount');
var dislikeCount = document.querySelector('#dislikeCount');

function count(){
  likeCount.value = parseInt(likeCount.value) + 1;
}

function count1(){
  dislikeCount.value = parseInt(dislikeCount.value) + 1;
}
