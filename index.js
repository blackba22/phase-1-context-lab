
function createEmployeeRecord(employeeArray) {
  const employeeRecord = {}
    employeeRecord.firstName = employeeArray[0]
    employeeRecord.familyName = employeeArray[1]
    employeeRecord.title = employeeArray[2]
    employeeRecord.payPerHour = employeeArray[3]
    employeeRecord.timeInEvents = []
    employeeRecord.timeOutEvents = []
    return employeeRecord;
}
function createEmployeeRecords(proArray) {
    const newEmployees = []
    proArray.forEach(employee => newEmployees.push(createEmployeeRecord(employee)))
    return newEmployees;
}
function createTimeInEvent(notesDate) {
    const [date, hour] = notesDate.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });
   return this
}    

function createTimeOutEvent(notesDate) {
    const [date, hour] = notesDate.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });
   return this
}    
function hoursWorkedOnDate(date) {
const timeIn = this.timeInEvents.find(event => event.date ===date);
const timeOut = this.timeOutEvents.find(event => event.date === date);
return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
    return (hoursWorkedOnDate.call(this,date) * this.payPerHour);
}


function calculatePayroll(empRecords) {
    const totalForEachEmployee = empRecords.map(record => allWagesFor.call(record))
    return totalForEachEmployee.reduce((total, empTotal) => total + empTotal)
}
function findEmployeeByFirstName(src, name) {
    return src.find(record => record.firstName === name);
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

