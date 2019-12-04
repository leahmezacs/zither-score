export function filterScoreName(value, old) {
    if (value == "All") {
        delete old["scoreName"];
    } else {
        old["scoreName"] = { "contains": value };
    }
    return old;
};

export function filterAuthor(value, old) {
    if (value == "All") {
        delete old["author"];
    } else {
        old["author"] = { "contains": value };
    }
    return old;
}


export function filterDateGen(value, old) {
    var moment = require('moment');
    let diff = value * 24 * 60 * 60 * 1000; //convert to milliseconds
    let current = new Date();
    let setTime = current - diff;
    let setDate = moment(setTime).format('YYYY-MM-DD');
    old["modifyDate"] = { "ge": setDate };
    return old;
}


export function searchByNameGen(value, searchType, old) {

    if (value == "") {
        delete old["scoreName"];
        delete old["author"];
    } else if (searchType == "Name") {
        old["searchFieldName"] = { "contains": value.toLowerCase() };
    } 
    return old;
}

