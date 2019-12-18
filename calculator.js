function enter(x){
    document.form.textview.value = document.form.textview.value+x
}
function equal(){
    let m = document.form.textview.value;
    if (m){
        document.form.textview.value = eval(m)
    }
    document.form.textview.value = eval(document.form.textview.value)
}
function C(){
    document.form.textview.value = "";
}
function backspace(){
    let n = document.form.textview.value;
    document.form.textview.value= n.substring(0,n.length-1);
}