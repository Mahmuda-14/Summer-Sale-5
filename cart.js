let total = 0;
let discount = 0;
let newTotal = 0;

// 1st-part adding and disabled

function cart(target) {
    const selectedItems = document.getElementById("items");

    const prodName = target.childNodes[3].childNodes[3].innerText;

    const li = document.createElement('li');
    li.innerText = prodName;
    selectedItems.appendChild(li);
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];

    total = parseInt(total) + parseInt(price);
    document.getElementById("total").innerText = total.toFixed(2);

    var newTotal = total;
    document.getElementById("total").innerText = newTotal.toFixed(2);


    var couponBtn = document.getElementById("coupon");
    if (total < 200) {
        couponBtn.disabled = true;
        couponBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    } else {
        couponBtn.disabled = false;
        couponBtn.style.backgroundColor = '';
    }


    var purchaseBtn = document.getElementById("purchase-btn");
    if (total < 0) {
        purchaseBtn.disabled = true;
        purchaseBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    } else {
        purchaseBtn.disabled = false;
        purchaseBtn.style.backgroundColor = '';
    }

    newTotal = total;
    document.getElementById("new-total").innerText = newTotal.toFixed(2);

}

let inputCoupon = document.getElementById("coupon-code");
let applyButton = document.getElementById("coupon");

function validCoupon() 
{

    const couponCode = inputCoupon.value;
    if (couponCode === "SELL200") {
        applyButton.disabled = false;

        if (total > 200) {
            discount = parseInt(total) * 0.2;
            document.getElementById("discount").innerText = discount.toFixed(2);

             newTotal = total - discount;
            document.getElementById("new-total").innerText = newTotal.toFixed(2);
        } 
        
    } else {
        applyButton.disabled = true;
    }
}

inputCoupon.addEventListener("click", validCoupon);

function home() {
    window.location.href = "index.html";
    total = 0;
    discount = 0;
    newTotal = 0;
}

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", home);








