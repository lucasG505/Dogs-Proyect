export const validate=(data)=>{
    let errors={};

    if(!data.name){
        errors.name= "Enter a name for your breed";
    }
    if(!data.heightMax){
        errors.heightMax= "Enter the maximum height of your breed";
    }else{
        if(isNaN(data.heightMax)){
            errors.heightMax= "The heights can only be numbers";
        }
    }

    if(!data.heightMin){
        errors.heightMin= "Enter the minimun height of your breed";
    }else{
        if(isNaN(data.heightMin)){
            errors.heightMin= "The heights can only be numbers";
        }
    }

    if(!data.weightMax){
        errors.weightMax= "Enter the maximum weight of your breed";
    }else{
        if(isNaN(data.weightMax)){
            errors.weightMax= "The weights can only be numbers";
        }
    }

    if(!data.weightMin){
        errors.weightMin= "Enter the minimum weight of your breed";
    }else{
        if(isNaN(data.weightMin)){
            errors.weightMin= "The weights can only be numbers";
        }
    }

    if(!data.lifeSpan){
        errors.lifeSpan= "Enter the life span of your breed in years";
    }else{
        let regex =/\d\d - \d\d/i;
        if(!regex.test(data.lifeSpan)){
            errors.lifeSpan= "Please enter a valid life span (xx-xx)";
        }
    }

    if(data.temperaments.length===0){
        errors.temperaments= "Select at least one temperament";
    }else{
        if(data.temperaments.length>6){
            errors.temperaments= "The maximum ammount of temperaments is six";
        }
    }

    return errors;
}