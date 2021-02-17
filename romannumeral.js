var express = require('express')
var router = express.Router()

// This route will convert roman number to equivalent integer number

router.post('/',(req,res)=>{
    // I, V, X, L, C, D, M   1,5,10,50,100,500,1000
    let total =0;
    const array = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
    const input_number = req.body.number;

    if(input_number == '')
    {
        let data = {
            success : false,
            responseCode: 400,
            error : "Please provide value ",
        }
        res.status(400).json(data);
    }

    let checkIfRoman = isRoman(input_number);
    if(!checkIfRoman)
    {
        let data = {
            success : false,
            responseCode: 400,
            errors : "Given number is not valid roman numeral",
        }
        res.status(400).json(data);
    }
    const split_number = input_number.split('');

    for(let i=0;i<split_number.length;i++)
    {  
        if(array[split_number[i]] >= array[split_number[i+1]])
        {
            total += array[split_number[i]]
        }
        else if(array[split_number[i]] < array[split_number[i+1]])
        {
            total -= array[split_number[i]]
        }
        else if(array[split_number[i]] &&  !array[split_number[i+1]])
        {
            total += array[split_number[i]]
        }
    }
    let data = {
        success : true,
        responseCode: 200,
        message : "Conversion successfull",
        roman_number : input_number,
        integer_value : total,
        errors:[]
    }
    res.status(200).json(data);

})

// this function will check if the given input is valid roman numerical or not return false if not 
const isRoman = (string) => {
    const pattern = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/
    return pattern.test(string);
};
module.exports =  router