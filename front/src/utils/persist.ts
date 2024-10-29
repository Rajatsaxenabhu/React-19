export const setval=(key:string,value:string)=>{
    try{
        localStorage.setItem(key,value);
    }catch(err){
        console.log(err);
    }
}

export const getval=(key:string)=>{
    try{
        return localStorage.getItem(key);
    }catch(err){
        console.log(err);
    }
}