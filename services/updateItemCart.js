export default function updateItemCart(array){
        return  localStorage.setItem('shopCart',JSON.stringify(array))
    }
   