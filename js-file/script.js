// Memory part start
function memoryCostUpdate(isIncrease) {
    const memoryCost = document.getElementById('memory-cost');
    if (isIncrease == true) {
        memoryCost.innerText = '0';
    }
    else {
        memoryCost.innerText = '180';
    }
    getTotalPrice()
}
document.getElementById('8gb-memory').addEventListener('click', function () {
    memoryCostUpdate(true);
})

document.getElementById('16gb-memory').addEventListener('click', function () {
    memoryCostUpdate(false);
})

//Stroge part start

function updateStoragePrice(isUpdate) {
    const storageCost = document.getElementById('storage-cost');
    if (isUpdate == true) {
        storageCost.innerText = '0';
    }
    else if (isUpdate == 100) {
        storageCost.innerText = '100'
    }
    else {
        storageCost.innerText = '180'
    }
    getTotalPrice()
}

document.getElementById('256gb-storage').addEventListener('click', function () {
    updateStoragePrice(true);

})

document.getElementById('512gb-storage').addEventListener('click', function () {
    updateStoragePrice(100);
})
document.getElementById('1tb-storage').addEventListener('click', function () {
    updateStoragePrice(false);
})

//Delivery option startet

function deliveryCharge(isCharge) {
    const deliveryCharge = document.getElementById('delivery-charge');
    if (isCharge == true) {
        deliveryCharge.innerText = '0';
    }
    else {
        deliveryCharge.innerText = '20';
    }
    getTotalPrice()
}

function getTotalPrice() {
    const bestPrice = document.getElementById('best-price');
    const bestPriceValue = parseInt(bestPrice.innerText);
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostValue = parseInt(memoryCost.innerText);
    const storageCost = document.getElementById('storage-cost');
    const storageCostValu = parseInt(storageCost.innerText);
    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryChargeValue = parseInt(deliveryCharge.innerText);
    let totalPrice = bestPriceValue + memoryCostValue + storageCostValu + deliveryChargeValue;
    document.getElementById('total-price').innerText = totalPrice;

    // Update Total
    if (document.getElementById('total-price').innerText == totalPrice) {
        document.getElementById('total-amount').innerText = totalPrice;
    }

}
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryCharge(true);
})

document.getElementById('delivery-with-charge').addEventListener('click', function () {
    deliveryCharge(false);
})

// Start Apply Button Part 

function getPomoCode() {
    let inputFlid = document.getElementById('input-flid').value;
    if (inputFlid == 'stevekaku') {
        let totalAmount = document.getElementById('total-amount').innerText;
        const discountPrice = (totalAmount * 20) / 100;
        let afterDiscountPrice = totalAmount - discountPrice;
        document.getElementById('total-amount').innerText = afterDiscountPrice;
        //Input fild clear
        document.getElementById('input-flid').value = '';

    }

}




document.getElementById('apply-button').addEventListener('click', function () {
    getPomoCode()
})