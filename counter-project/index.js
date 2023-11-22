let num = 0;

const value = document.querySelector(".value");
const btn = document.querySelectorAll(".btn");

btn.forEach((btn)=>{
btn.addEventListener("click",(even)=>{
const styles = event.currentTarget.classList
if(styles.contains("btn-danger")){
    num--;
}else if(styles.contains("btn-success")){
    num++;
}else if(styles.contains("btn-secondary")){
    num=0;
}
value.textContent = num;
if(num > 0){
    value.style.color = "green"
}else if(num < 0){
    value.style.color = "red"
}else{
    value.style.color = "black"
}
})
})