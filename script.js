

function cartProduct(target){

    let parantNode = target.childNodes[3]
    let productName = parantNode.childNodes[3].innerText

    let productTk = parantNode.childNodes[5].innerText
    let preProductTk = parseFloat(productTk)
    
    


    // total price 
    let totalPrice = document.getElementById("totalPrice")
    let totalPriceValue = parseFloat(totalPrice.innerText)
    totalPrice.innerText = totalPriceValue + preProductTk


    

    // discount 
     let discount = document.getElementById("discount")
     let discountValue = parseFloat(discount.innerText)
    

    //  total 
    let total = document.getElementById("total")
     
     let totalamount = totalPriceValue + preProductTk
     let cuponApply = document.getElementById("cuponApply")

     cuponApply.addEventListener("click",function(){
         let cuponInputValue = cuponInput.value 
         if(cuponInputValue === "SELL200" ){
             let discounts = totalamount * (20/100)
             let total = document.getElementById("total")
             let finalAmount = totalamount - discounts
             discount.innerText = discounts.toFixed(2) 
             total.innerText = finalAmount
         }
     })


     //   cupon disable inable 
    if(totalamount >= 200){
        cuponApply.disabled = false
    } 

    // make precherch disable enable 
    let makePurched = document.getElementById("makePurched")
    if(totalamount > 0){
        makePurched.disabled = false
    }
   




    // create list item 
    const list_ol = document.getElementById("list-ol")
    let li = document.createElement("li")
    li.style.fontSize="22px"
    li.style.fontWeight = "600"
    li.innerText = productName
    list_ol.appendChild(li)


    // clear all total amount data by cles go to home  
    let backHome = document.getElementById("backHome")
    backHome.addEventListener("click", function(){
        totalPrice.innerText = "00"
        discount.innerText = "00"
        discount.innerText = "00"
        total.innerText = "00"
        cuponInput.value  = ""
        list_ol.remove(li)
        makePurched.disabled = true
        cuponApply.disabled = true
    })
}





