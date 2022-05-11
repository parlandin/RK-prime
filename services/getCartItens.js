export default function getCartItens(){
    const file = localStorage.getItem("shopCart")

    if(file){
        const files = JSON.parse(file)
        return files
    }
    else {
        return []
    }
} 