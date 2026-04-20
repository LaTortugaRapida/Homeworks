class OddValidator  {
    static [Symbol.hasInstance](instance) {
        if(typeof instance !== "number") return false;
        if(instance  % 2 === 1) return true;
        return false;
    }
};


console.log(5 instanceof OddValidator); //instanceof checks prototype chain  
                                        //but we overrided it and it does validation
                                       
