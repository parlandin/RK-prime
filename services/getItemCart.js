

export default function getCartLength(){
    if (typeof window !== "undefined") {
        const file = localStorage.getItem("shopCart")

        if(file){
            const files = JSON.parse(file)
            return files.length -1
        }
        else {
            return 0
        }
    }
} 