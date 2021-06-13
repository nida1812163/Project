

const Family = require('../models/Family.model');


exports.read = async(req, res)=>{
    const age = req.body.age;
    console.log(age)

    Family.find({age: req.body.age, spouseAge: req.body.spouseAge, hospitalization: req.body.hospitalization}, (err, result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result);
        }
    })
}

// exports.loginchk= async(req,res)=>{

//     const {userName, password}=req.body;

//     try{
//           await User.find({userName:userName, password:password},(err, user)=>{
//             if(user===null){
//                 res.send(null);
//             }
//             else if(user.userName===userName && user.password===password){
//             req.session.userName=userName;
//                 console.log("\nfound\n")
//                 res.redirect("/AfterLogin");
//                 // res.render('dashboard',{page:'Dashboard',menuID:'dashboard', session:req.session})                
//             }
//             else{
                
//             console.log("\n\nerror\n\n")

//                 res.end(user);
                
//             }
//         })
//     }
//     catch(err){
//         res.send(err)
//     }
// }
