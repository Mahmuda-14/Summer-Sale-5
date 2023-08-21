let total = 0;


function cart(target)
{
const selectedItems=document.getElementById("items");

const prodName=target.childNodes[3].childNodes[3].innerText;

const li=document.createElement('li');
li.innerText=prodName;
selectedItems.appendChild(li);
const price= target.childNodes[3].childNodes[5].innerText.split(" ")[0];

total=parseInt(total)+parseInt(price);
document.getElementById("total").innerText=total;


var couponBtn = document.getElementById("coupon");

if (total > 200) {
  couponBtn.disabled = false;
  couponBtn.style.backgroundColor = '';
} else {
  couponBtn.disabled = true;
  couponBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';



}
}



























{/* <button id="coupon-btn" disabled style="background-color:rgba(0,0,0,0.4" >Apply</button>
if(conditon){
var couponBtn = document.getElementById('coupon-btn);
couponBtn.disabled = false;
couponBtn.style.backgroundColor = 'rgba(0,0,0,1)';
} */}

