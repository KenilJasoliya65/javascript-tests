var data = [10, 20, 30, 40, 50, 60, 70];

function addRecords(newRecords) {
    newRecords.forEach(function(record) {
        data.push(record);
    });
}

var newRecords = [80, 90, 100];
addRecords(newRecords);

data.forEach(function(record) {
    console.log(record);
});
