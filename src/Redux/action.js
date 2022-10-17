export const ADD = 'ADD';
export const SUB = 'SUB';
export const MUL = 'MUL';
export const DIV = 'DIV';
export const CLR = 'CLR';
export const add_num = (num1,num2) =>{
    console.log(num1, num2);
    return{
        type: ADD,
        payload:{
            num1:num1,
            num2:num2
        }
    }
}
// action for substract
export const sun_num = (num1,num2) =>{
    return{
        type:SUB,
        payload:{
            num1:num1,
            num2:num2
        }
    }
}
// action for multiply
export const multiply = (num1,num2) =>{
    return{
        type:MUL,
        payload:{
            num1:num1,
            num2:num2
        }
    }
}
// action for divide
export const divide = (num1,num2) =>{
    return{
        type:DIV,
        payload:{
            num1:num1,
            num2:num2
        }
    }
}
// clear 
export const clear = () =>{
    return{
        type:CLR
    }
}