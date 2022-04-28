export default function addItemCart(array){
        return  localStorage.setItem('shopCart',JSON.stringify(array))
    }
   