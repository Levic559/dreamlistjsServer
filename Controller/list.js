const whiteList = require('../config/whiteList')
const List = require('../Models/list')


const getList = (req, res) => {
    List.find({}, (err, data) => {
        if (err) return err
        res.json(data)
    })
}

const findList = async (req, res) => {
    let title = ''
    if (!req?.params?.title) return res.status(400).json({ "message": "Title required" })
    title = req.params.username
    const list = await List.findOne({ title }).exec()
    if (!list) {
        res.json({ "message": `Username ${req.params.title} not found` })
    } else {
        res.json({
            "list": list
        })
    }
}
const updateList = async (req, res) => {
    const wishlist = req.body
    // res.status(201).json(wishlist.length)
    try {
        const getList = await List.findOne()

        var newWishlist = []
        for (var i = 0; i < wishlist.length; i++) {
            newWishlist.push({ wishlist: wishlist[i] })
        }

        await newWishlist.save()

        res.status(201).json({ "message": `wishlist updated!` })

    } catch (err) {
        res.status(500).json({ "message": err.message })
    }

}


const deleteList = async (req, res) => {

    // console.log("_id",_id)
    // console.log
    // await List.deleteMany(
    //     {
    //         _id: {$in:donelist},
    //     },
    //   (err, result)=> {
    //         if (err) {
    //             res.status(500).json(err);
    //         } else {
    //             res.status(200).json(result);
    //         }
    //     }
    // );
   
    if (!req?.params?.id) return res.status(400).json({ "message": "id required" })
    let donelist = req.params.id
   console.log(donelist)
   arrlist = donelist.split(",")
    console.log("arrlist",arrlist)
    console.log("length",arrlist.length)

    for (let i = 0;i< arrlist.length ; i++) {
        const list = await List.findByIdAndDelete(arrlist[i])
        
        if (!list) {
            res.json({ message: `id ${req.params.id} not found` })
        } else {
            res.json({
                message: `The user ${arrlist[i]} deleted Successfully`
            })
        }

    }

}
const createList = (req, res) => {
    const body = req.body
    const list = new List()
    list.title = body.title
    list.time = body.time
    list.complete = body.complete
    list.save((err, data) => {
        if (err) return res.status(400).send("not created")
        res.status(201).send(data)
    })
    //  res.send()
}



module.exports = { createList, getList, findList, deleteList, updateList }
