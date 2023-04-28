export const validate=(data)=>{
    let errors={};
    
    if(!data.name){
        errors.name= "Enter a name for your breed";
    }

    if(data.image){
        let check=/(http(s?):)([/|.|\w|\s|-])*/g;
        if(!check.test(data.image)){
            errors.image="Enter a valid URL";
        }
    }
    if(!data.heightMax){
        errors.heightMax= "Enter the max height";
    }else{
        if(isNaN(data.heightMax)){
            errors.heightMax= "Heights can only be numbers";
        }
    }

    if(!data.heightMin){
        errors.heightMin= "Enter the min height";
    }else{
        if(isNaN(data.heightMin)){
            errors.heightMin= "Heights can only be numbers";
        }else{
            if(data.heightMin<0){
                errors.heightMin="Has to be positive"
            }else{
                if(Number(data.heightMin)>=Number(data.heightMax)){
                    errors.heightMin= "Has to be lower than Max height";
                }
            }
        }
    }

    if(!data.weightMax){
        errors.weightMax= "Enter the max weight";
    }else{
        if(isNaN(data.weightMax)){
            errors.weightMax= "Weights can only be numbers";
        }
    }

    if(!data.weightMin){
        errors.weightMin= "Enter the min weight";
    }else{
        if(isNaN(data.weightMin)){
            errors.weightMin = "Weights can only be numbers";
        }else{
            if(Number(data.weightMin)>=Number(data.weightMax)){
                errors.weightMin= "Has to be lower than Max weight";
            }
        }
    }

    if(!data.lifeSpan){
        errors.lifeSpan= "Enter the life span";
    }else{
        let regex =/\d+-\d+/i;
        if(!regex.test(data.lifeSpan)){
            errors.lifeSpan= "Enter a valid life span (xx-xx)";
        }
    }

    if(data.temperaments.length===0){
        errors.temperaments= "Select at least one temperament";
    }else{
        if(data.temperaments.length>6){
            errors.temperaments= "The max ammount of temperaments is six";
        }
    }

    return errors;
}