
import Images from "./imageList"

 export function AllFruits(){

    const dataOfFruits=[{

        fruitName:"mango",
        image:"https://www.freepngimg.com/thumb/apple/2-red-apple-png-image.png"
    },
    {

        fruitName:"apple",
        image:"https://t4.ftcdn.net/jpg/00/80/96/17/240_F_80961739_hep1UZaQRsy5WQOYU3jkOr5CB7A6xc3U.jpg"
    },

    {

        fruitName:"waterMelone",
        image:"https://t3.ftcdn.net/jpg/01/47/51/60/240_F_147516063_hCXI8VUIdBYud0B0hhS3Yo5CFTT1a4g8.jpg"
    }]

    return (

        <>

{
    dataOfFruits.map((fruity)=>{


        return(
           <Images data={fruity.image} />
        )

    })


}
</>

    )


}