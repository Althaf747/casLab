import {prismaClient} from "../web/database.js";
import {ResponseError} from "../error/response-error.js"

const create = async (req) =>{
    return prismaClient.tP.create({
        data : {
            judul : req.body.judul,
            subJudul : req.body.subJudul,
            kategori : req.body.kategori,
            TanggalPost : req.body.TanggalPost,
            DeadlineTP : req.body.DeadlineTP,
            DeskripsiTP : req.body.DeskripsiTP
        }
    })
}

const getTp = async (req) => {
    const tp = await prismaClient.tP.findUnique({
        where :{
            judul : req.params.judul
        },select: {
            judul :true,
            subJudul :true,
            kategori :true,
            DeskripsiTP :true
        }
    })
    return tp
}

const updateTp = async (req) =>{
    const tp = await prismaClient.tP.findUnique({
        where : {
            judul : req.params.judul
        }

    })

    if (!tp) {
        throw new ResponseError(404,"tp not found")
    }

    return prismaClient.tP.update({
        where : {
            judul : req.params.judul
        },data : {
            judul : req.body.judul,
            subJudul : req.body.subJudul,
            kategori : req.body.kategori,
            TanggalPost : req.body.TanggalPost,
            DeadlineTP : req.body.DeadlineTP,
            DeskripsiTP : req.body.DeskripsiTP
        }
    })
}

const deleteTp = async (req) => {
    const tp = await prismaClient.tP.findUnique({
        where : {
            judul : req.params.judul
        }
    })

    if (!tp) {
        throw new ResponseError(404,"tp not foung")
    }

    await prismaClient.tP.delete({
        where : {
            judul : req.params.judul
        }
    })
}

export default {
    create, getTp, updateTp, deleteTp
}