const displayData =(content)=>{
    result.value+= content
}

const clearCalcScreen =(content)=>
{
    result.value = ""
}

const evaluateExp = ()=>
{
    try{
        result.value = eval(result.value)
    }
    catch{
        result.value="Invalid Expression"
    }
}
const removeLastItem = ()=>
{
    result.value=result.value.slice(0,-1)
}