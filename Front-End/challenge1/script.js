var count = 0;

document.getElementById("increase").onclick = function(){
    count ++;
    document.getElementById("counter").textContent = count;
}
document.getElementById("decrease").onclick = function(){
    count --;
    document.getElementById("counter").textContent = count;
}