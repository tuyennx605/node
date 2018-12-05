const express = require('express');
const router = express.Router();

const Tasks1 = require("../modes/Task");
const mySocket = require('../mySocket').io;
const clients = require('../mySocket').clients;




//inseart
router.post('/', async (req, res)=>{
    // console.log(req);

    let {todoid, name, isfinished} = req.body;
    try {
        let newTasks = await Tasks1.create({
            todoid,
             name, 
             isfinished},
             {
                 fields:['todoid', 'name', 'isfinished' ]
             }
            );
        if(newTasks){
            res.json({
                result: 'ok',
                data: newTasks
            });
        }else
        {
            res.json({
                result: 'false',
                data: {}
            });
        }
    } catch (error) {
        res.json({
            result: 'false',
            data: {},
            message: error
        });
    }
});

router.delete('/:id', async (req, res)=>{
    let {id} = req.params;
    try {
        let numberOfDeleteRow = await Tasks1.destroy({
            where: {
                id
            }
        });
        res.json({
            result: 'ok',
            message: 'Delete ok!!',
            count: numberOfDeleteRow
        });
    } catch (error) {
        res.json({
            result: 'failed',
            message: 'Delete failed!!',
        });
    }
});
//get all
router.get('/', async (req, res)=>{
    try {
        let tasks = await Tasks1.findAll({
            attributes: ['id', 'todoid', 'name', 'isfinished'],
            order: [
                ['name', 'ASC']   //sap xep name theo abc
            ]
        });
        // clients.forEach(client => {
            clients[0].emit("eventA", {data: "from AA"});
        // });
        

        res.json({
            result: 'ok',
            data: tasks,
            message: 'query ok'
        });
    } catch (error) {
        res.json({
            result: 'failed',
            data: [],
            message: 'query that bai'
        });
    }
});

//tim theo id
router.get('/:id', async (req, res)=>{
    let {id} = req.params;
    try {
        let task = await Tasks1.findAll({
            attributes: ['id', 'todoid', 'name', 'isfinished'],
            where: {
                id
            }
        });

        res.json({
            result: 'ok',
            data: task,
            message: 'query thanh cong'
        });
    } catch (error) {
        res.json({
            result: 'failded',
            data: {},
            message: 'query that bai'
        });
    }
});

//tim theo todoid
router.get('/todoid/:todoid', async (req, res)=>{
    let {todoid} = req.params

    try {
        let gettaskBytodoid = await Tasks1.findAll({
            attributes:['id', 'todoid', 'name', 'isfinished'],
            where:{
                todoid
            }
        });
        res.json({
            result: 'ok',
            data: gettaskBytodoid,
            message: 'get thanh cong'
        });
    } catch (error) {
        res.json({
            result: 'failed',
            data: {},
            message: 'get that bai'
        });
    }
});

module.exports = router;