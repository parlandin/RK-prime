export default function removeItemCart(id){
    if (typeof window !== "undefined") {
        const file = localStorage.getItem("shopCart")

        if(file){
            const files = JSON.parse(file)
            const newArray = files.filter(product => product.id != id)
            localStorage.setItem('shopCart',JSON.stringify(newArray))
            return
        }
    }
} 