
export default function getCartLength(){
        const file = localStorage.getItem("shopCart")
        if(file){
            const files = JSON.parse(file)
            return files.length 
        }
        else {
            return 0
        }
}