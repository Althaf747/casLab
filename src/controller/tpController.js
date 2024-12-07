import tpService from "../service/tpService.js";

const create = async (req,res,next) => {
    try {
        const result = await tpService.create(req)
        res.status(200).json({
            data : result
        })

    }catch (e){
        next(e)
    }
}

const getTp = async (req,res,next)=>{
    try{
        const result = await tpService.getTp(req)
        res.status(200).json({
            data : result,
            message : "OK"
        })
    }catch (e) {
        next(e)
    }

}

const updateTp = async (req,res,next)=> {
    try{
        const result = await tpService.updateTp(req)
        res.status(200).json({
            data : result,
            message : "tp updated"
        })
    }catch (e){
        next(e)
    }
}

const deleteTp = async (req,res,next) => {
    try {
        await tpService.deleteTp(req)
        res.status(200).json({
            message : "TP deleted"
        })

    }catch (e){
        next(e)
    }
}

export default {
    create,getTp,updateTp, deleteTp
}