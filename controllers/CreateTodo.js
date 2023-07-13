const Todo = require ("../models/Todo")

exports.CreateTodo = async(request, response) =>{
    
    try{ 
        const {title , description} = request.body;
        const response = await Todo.create({title, description});
        response.status(200).json(
            {
                success:true,
                data:response,
                message:'entry succesfully create'
            }
           
            
        );
    }
    catch (error){
        console.log(error);
        console.error(error);
        response.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message,
            }
            );

    }


}