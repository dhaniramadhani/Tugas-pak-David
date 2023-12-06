const express= require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const mysql=require("mysql")


//implemen
const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//koneksi mysql
const db=  mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"pelanggaran_siswa"
})
db.connect(error =>{
    if(error){
        console.log(Error.message)
    }else {
        console.log("MySql Connected")
    }
})

//end point data siswa
app.get("/siswa",(req,res)=>{
//Buat Sql Query
    let sql="select * from siswa"
    db.query(sql,(error,result)=>{
        let response=null
        if(error){
            response={message:error.message}
        }else{
            response={
                count:result.length,
                siswa:result
            }
        }
        res.json(response)
    })
})

    
//end point mengakses data siswa melalui id_siswa

    app.get ("/siswa/:id",(req,res)=>{
        let data ={
            id_siswa:req.params.id
        }
        let sql="select * from siswa where ?"
        db.query(sql,data,(error,result)=>{
            let response=null
            if(error){
                response={
                    message:error.message
                }
            }else{
                response={
                    count:result.length,
                    siswa:result
                }
            }
            res.json(response)
        })
        })

        app.post("/siswa", (req,res) => {
            let data={
                nis:req.body.nis,
                nama_siswa:req.body.nama_siswa,
                kelas:req.body.kelas,
                poin:req.body.poin
                }

            let sql = "insert into siswa set ?"
            db.query(sql, data, (error, result) => {
            let response = null
                if (error) {
                    response = {
                        message: error.message
                    }
                } else {
                    response = {
                        message: result.affectedRows + " data inserted"
                    }
                }
                res.json(response)
            })
        })
        app.put("/siswa", (req,res) => {
            let data = [
                    {
                    nis: req.body.nis,
                    nama_siswa: req.body.nama_siswa,
                    kelas: req.body.kelas,
                    poin: req.body.poin
                },
                {
                    id_siswa: req.body.id_siswa
                }
            ]
            let sql = "update siswa set ? where ?"
            db.query(sql, data, (error, result) => {
                let response = null
                if (error) {
                    response = {
                    message: error.message
                    }
                } else {
                    response = {
                        message: result.affectedRows + " data updated"
                    }
                }
                res.json(response)
            })
        })

        
    app.delete("/siswa/:id",(req,res)=>{
        let data={
            id_siswa:req.params.id
        }
        let sql="delete from siswa where ?"
        db.query(sql,data,(error,result)=>{
            let response=null
            if(error){
                message:error.message
            }else{
                response={
                    message:result.affectedRows+"data delected"
                }
            }
            res.json(response)
        })
    })
    app.listen(8000,()=>{
        console.log("Run On Port 8000")
    })
