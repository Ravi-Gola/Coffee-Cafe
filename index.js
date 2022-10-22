console.log("welcome to CoffeeCafe")
class Customer{
    static CustomerList=[]
    constructor(n,m){
        this.name=n
        this.mob=m
        this.item=[]
        this.total=0;
    }
    static items=[]
    static Total=0;
    profile() {
        return `Name of customer ${this.name} and Mobile number is ${this.mob}`;
    }
    
    
}
let Name=document.getElementById('name')
let mob=document.getElementById('mob')
let purchase=document.getElementById('item')
let Amount=document.getElementById('total')
let prof=document.getElementById('profile')
let alert=document.getElementById('alert')
let addUp=document.getElementsByClassName('Up')
let addDown=document.getElementsByClassName('down')
alert.style.display='none';
function order() {
    alert.style.display='block';
    setTimeout(()=>{
        alert.style.display='none';
    },3000)
    let customer=new Customer(Name.value,mob.value);
    customer.item=Customer.items
    customer.total=Customer.Total
    purchase.innerHTML=``
    for(let i=0;i<customer.item.length;i++){
        let html=`<ul class="list-group list-group-horizontal ">
        <li class="list-group-item border-0 w-100">${customer.item[i].value}</li>
        <li class="list-group-item border-bottom border-0 border-dark w-25" >${customer.item[i].parentElement.value}</li>
        </ul>`
        purchase.innerHTML +=html
    }
    Amount.innerText=`${customer.total}Rs`
    prof.innerHTML=` <li class="list-group-item border-bottom border-0 border-dark w-50">Customer Name: ${customer.name}</li>
    <li class="list-group-item border-bottom border-0 border-dark w-50" >Mobile :${customer.mob} </li>`
}

for (let index = 0; index < addUp.length; index++) {
        addUp[index].addEventListener("click",(e)=>{
            let variable;
            variable=e.target
            Customer.items.push(variable)
            Customer.Total += variable.parentElement.value;
            
                let html=`<ul class="list-group list-group-horizontal ">
                <li class="list-group-item border-0 w-100">${variable.value}</li>
                <li class="list-group-item border-bottom border-0 border-dark w-25" >${variable.parentElement.value}</li>
                </ul>`
                purchase.innerHTML +=html
                Amount.innerText=`${Customer.Total}Rs`

        })
        addDown[index].addEventListener("click",(e)=>{
            let variable;
            variable=e.target
            let index;
            for(let i=0;i<Customer.items.length;i++){
                if(Customer.items[i].value==variable.value){
                        index=i;
                }
            }
            if (index > -1) {
                Customer.items.splice(index, 1);
            }
            Customer.Total -= variable.parentElement.value;
            purchase.innerHTML=``
            for(let i=0;i<Customer.items.length;i++){
                let html=`<ul class="list-group list-group-horizontal ">
                <li class="list-group-item border-0 w-100">${Customer.items[i].value}</li>
                <li class="list-group-item border-bottom border-0 border-dark w-25" >${Customer.items[i].parentElement.value}</li>
                </ul>`
                purchase.innerHTML +=html
            }
            Amount.innerText=`${Customer.Total}Rs`
            
        })
    
}
