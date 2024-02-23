
const pjson = require('./package.json');
const csva = require('csv-alidator');
const csvq = require('csv-queryable');

itWorks = function() {
    
    const start = Date.now();

    try {
        
        return JSON.stringify({"itWorks": "Yes, it works!"
        , "package": pjson.name
        , "version": pjson.version
        });

    } catch (error) {
        
        const end = Date.now();

        throw new csv_suite_Error(
            'itWorks'
            , `${(end - start)}ms.`
            , error.message);

    }

}

booleanValidation = function(filePath) {

    const start = Date.now();

    try {
        
        return csva.booleanValidation(filePath);

    } catch (error) {
        
        const end = Date.now();

        throw new csv_suite_Error(
            'booleanValidation'
            , `${(end - start)}ms.`
            , error.message);

    }

}

jsonValidation = function(filePath) {
    
    const start = Date.now();

    try {

        return csva.jsonValidation(filePath);

    } catch (error) {
        
        const end = Date.now();

        throw new csv_suite_Error(
            'jsonValidation'
            , `${(end - start)}ms.`
            , error.message);

    }

}

memorize = function(filePath) {

    const start = Date.now();

    try {

        return csvq.memorize(filePath);

    } catch (error) {
        
        const end = Date.now();

        throw new csv_suite_Error(
            'memorize'
            , `${(end - start)}ms.`
            , error.message);

    }

}

select = function(csvArray, header, columns = header, where, limit) {

    const start = Date.now();

    try {

        return csvq.select(csvArray, header, columns, where, limit);

    } catch (error) {
        
        const end = Date.now();

        throw new csv_suite_Error(
            'select'
            , `${(end - start)}ms.`
            , error.message);

    }

}

setLimit = function(limit) {

    const start = Date.now();

    try {

        csvq.setLimit(limit);

    } catch (error) {
        
        const end = Date.now();

        throw new csv_suite_Error(
            'setLimit'
            , `${(end - start)}ms.`
            , error.message);

    }

}

getLimit = function() {

    const start = Date.now();

    try {

        return csvq.getLimit();

    } catch (error) {
        
        const end = Date.now();

        throw new csv_suite_Error(
            'getLimit'
            , `${(end - start)}ms.`
            , error.message);

    }

}
csv_suite_Error = function(routine = "", executiontime = "", message = "") { 
    
    this.routine = routine;
    this.executiontime = executiontime; 
    this.message = message; 
    this.name = "csv_suite_Error";

} 
csv_suite_Error.prototype = Error.prototype;

module.exports = { itWorks, booleanValidation, jsonValidation, memorize, select, setLimit, getLimit };