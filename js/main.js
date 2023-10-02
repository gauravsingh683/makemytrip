const changeMode = () =>{
    let mybody = document.body;
    mybody.classList.toggle("mmydarkmode");
}

function onloadPage(){
    document.getElementById('mycoupon').style.visibility = 'visible';
    document.getElementById('topbanner').style.opacity = "0.1";

}
function closeCoupon(){
    document.getElementById('mycoupon').style.visibility = 'hidden';
    document.getElementById('topbanner').style.opacity = "1";
}

