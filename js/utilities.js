function getInnerText (id){
    return document.getElementById(id).innerText;
}
function getValue(id){
    const valueofId = document.getElementById(id).value;
    return valueofId;
}
function convertFloat(id){
    return parseFloat(id);
}
function getId(id){
 return document.getElementById(id);
}

function showSection(id){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function blog(){
    window.location.href = './index.html';
}
function home(){
    window.location.href = './blog.html';
}