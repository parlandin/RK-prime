export default function addItemCart(obj){
    const  item = JSON.parse(localStorage.getItem("shopCart"))

    if(item){
        localStorage.setItem("shopCart", JSON.stringify([...item, obj]))
        return
    }
    localStorage.setItem('shopCart',JSON.stringify([obj]))
}