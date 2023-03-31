
  function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
    
    
        
        if (year%4===0){
            if (year%100===0){
                if (year%400===0 && year%100===0){
                    return "Leap year";
                }
                if (year%400!==0 && year%100===0){
                    return"Not Leap year";
                }
            }else{
                return" leap year";
            }
        }else{
            return("Not leap year");
        }
        
    
    
    /**************Don't change the code below****************/    
    }    
