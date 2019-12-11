const { filterScoreName, filterDateGen, searchByNameGen, filterAuthor } = require('./DiscoveryUtil');

test('should give object for filter by score name', () => {
    const obj = filterScoreName('Score Name', { clickedCounts: { ge: 0 } });
    expect(obj["scoreName"]).toEqual({ "contains": 'full time' });
});

test('should remove scoreName in the oject if All is select for the score name filter', () => {
    const obj = filterScoreName('All', { clickedCounts: { ge: 0 }, scoreName: { "contains": 'Score Name' } });
    expect(obj).toEqual({ clickedCounts: { ge: 0 } });
})

test('should give an object contain the search field by category', () => {
    const obj = filterAuthor('name', { clickedCounts: { ge: 0 } });
    expect(obj["author"]).toEqual({ "contains": 'name' });
})

test('should remove author in the oject if All is select for the job category filter', () => {
    const obj = filterAuthor('All', { clickedCounts: { ge: 0 }, jobCategory: { "contains": 'name' } });
    expect(obj).toEqual({ clickedCounts: { ge: 0 } });
})



test('should give the correct value of date', () => {
    const obj = filterDateGen(10, { clickedCounts: { ge: 0 } });
    let diff = 10 * 24 * 60 * 60 * 1000; //convert to milliseconds
    let current = new Date();
    let setTime = current - diff;
    let contorl = new Date(setTime);
    let check = new Date(obj["datePosted"]["ge"]);
    expect(check.getDate() + 1).toEqual(contorl.getDate())
})

test('should give the correct value of month', () => {
    const obj = filterDateGen(10, { clickedCounts: { ge: 0 } });
    let diff = 10 * 24 * 60 * 60 * 1000; //convert to milliseconds
    let current = new Date();
    let setTime = current - diff;
    let contorl = new Date();
    let check = new Date(obj["datePosted"]["ge"]);
    expect(check.getMonth()).toEqual(contorl.getMonth())
})

test('should give the correct value of year', () => {
    const obj = filterDateGen(10, { clickedCounts: { ge: 0 } });
    let diff = 10 * 24 * 60 * 60 * 1000; //convert to milliseconds
    let current = new Date();
    let setTime = current - diff;
    let contorl = new Date();
    let check = new Date(obj["datePosted"]["ge"]);
    expect(check.getFullYear()).toEqual(contorl.getFullYear())
})

test('should give an object contain the search field by name', () => {
    const obj = searchByNameGen('computer', 'Name', { clickedCounts: { ge: 0 } });
    expect(obj["searchFieldName"]).toEqual({ "contains": 'computer' });
})


