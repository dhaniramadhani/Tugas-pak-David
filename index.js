//Memanggil Library Yang telah diinstal
const express= require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const app=express()
const moment=require("moment")
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// endpoint &quot;/test&quot; dengan method GET
app.get("/test;", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point
    // membuat objek yang berisi data yang akan dijadikan response
    let response={
        message:"Ini end-poin pertama ku",
        method:req.method,
        code: res.statusCode
    }
    // memberikan response dengan format JSON yang berisi objek di atas
        res.json(response)
        })
        app.get("/mulai",(req,res)=>{
            let response={
                message:"Nyoba bro",
                method:req.method,
                code:res.statusCode
            }
            res.json(response)
        })
        app.get("/Udah",(req,res)=>{
            let response={
                message:"Sip isoo",
                method:req.method,
                code:res.statusCode
            }
            res.json(response)
        })
        app.get("/Ending",(req,res)=>{
            let response={
                message:"Yaudah lahhh",
                method:req.method,
                code:res.statusCode
            }
            res.json(response)
        })
        // menjalankan server pada port 8000
        app.listen(8000, () => {
            console.log("Server run on port 8000")
        })
 
    