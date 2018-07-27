var express = require('express');
var router = express.Router();
//model
const Todo = require('../modes/Todo');
const Task = require('../modes/Task');

//insert
router.post('/', async(req, res)=> {
    // console.log(req.body);
    let {name, priority, description, duedate} = req.body;  //gan obj
    try {
        let newTodo = await Todo.create({
            // name:name, vi key va value giong nhau nen can viet 1 cai thoi
            name,
            priority: parseInt(priority),
            description,
            duedate
        },{
            fields: ["name", "priority", "description", "duedate"]  //cac truong mih muon hien
        });

        if(newTodo){    //neu co data -> la tao thanh cong day
            res.json({
                result:'ok',
                data: newTodo
            });
        }else{
            res.json({
                result:'failed',
                data: {},
                message: 'tao todo failed'
            });
        }
    } catch (error) {
        res.json({
            result:'failed',
            data: {},
            message: `tao todo failed , err= ${error}`
        });
    }


  
});

//update data 
//http://localhost:3000/todos/6
router.put('/:id', async (req, res)=>{
    const {id} = req.params;
    const{name, priority, description, duedate, keySecret} = req.body;
    // if(keySecret == '4fg4fgfgfghglhglhgj') {

    // }
    console.log(req.params);
    try {
        let todos = await Todo.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'duedate'],
            where:{
                id
            }
        });
        if(todos.length>0){ //co thang voi id la nhu vay
            todos.forEach( async (todo)=>{
                await todo.update({
                    name:name ? name: todo.name,        //gan neu name ma null thi no gai lai cai cu, de ko bi null
                    priority: priority ? priority: todo.priority,
                    description: description ?description: todo.description,
                    duedate: duedate? duedate: todo.duedate
                });
            } );
            res.json({
                result: 'ok',
                data: todos,
                message: "update todo thanh cong"
            });
        }else{
            res.json({
                result: 'failed',
                data: {},
                message: "update todo that bai"
            });
        }
    } catch (error) {
        res.json({
            result: 'failed',
            data: {},
            message: `update todo that bai err: ${error}`
        });
    }
});
//delete
router.delete('/:id', async(req, res)=>{
    const{id} = req.params;

    try {
        // vi quan he 1 nhieu (1 todo nhieu task) nen xoa todo thi xoa het o task co idtodo la id
        await Task.destroy({    // phai lam xong moi dc xoa cai todo
            where: {
                todoid: id
            }
        });
        let numberOfDeletedRows = await Todo.destroy({
            where:{
                id
            }
        });

        res.json({
            result:'ok',
            message:"xoa thanh cong",
            count: numberOfDeletedRows
        });
    } catch (error) {
        res.json({
            result:'failed',
            message:`xoa khong thanh cong. err: ${error}`,
            count: 0
        });
    }
});
//lay danh sach
router.get('/', async(req, res)=>{
    try {
        const todos = await Todo.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'duedate']
            
        });
        res.json({
            result: 'ok',
            length: todos.length,
            data: todos,
            message: 'query list thanh cong'
        });
    } catch (error) {
        res.json({
            result: 'failed',
            data: [],
            message: `query list kong thanh cong err = ${error}`
        });
    }
});

//lay danh sach theo id
router.get('/:id', async(req, res)=>{
    const {id} = req.params;
    try {
        const todos = await Todo.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'duedate'],
            where:{
                id:id
            },
            include: {  // giong kieu joj 2 bang voi nhau, no se hien theo hinh cay
                model: Task,
                as: 'tasks',
                required: false
            }
        });
        if(todos.length>0){
            res.json({
                result: 'ok',
                length: todos.length,
                data: todos[0],
                message: 'query list thanh cong'
            });
        } else {
            res.json({
                result: 'faled',
                length: todos.length,
                data: {},
                message: 'query list khong thanh cong!!'
            });
            
        }
        
    } catch (error) {
        res.json({
            result: 'failed',
            data: [],
            message: `query list kong thanh cong err = ${error}`
        });
    }
});

module.exports = router;
