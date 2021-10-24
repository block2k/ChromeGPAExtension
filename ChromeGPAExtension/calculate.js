const UNCALCULATE = [
	'OJS201'
];
console.log('hahahahahaha');

let allSubjectRows = document.querySelectorAll('#ctl00_mainContent_divGrade table.table.table-hover tbody tr');

(function calculateGrade() {
    let totalPoint = 0;
    let totalCredit = 0;

    for (let  i = 0; i < allSubjectRows.length; i++ ) {
        let element = allSubjectRows[i];
        let subCode = $(element).find('td:nth-child(4)');
        let isPass = $(element).find('td:nth-child(10)');
        let credit = $(element).find('td:nth-child(8)');
        let grade = $(element).find('td:nth-child(9)');
        if (!checkUngrade($(subCode).text()) 
        || $(isPass).text() !== 'Passed' 
        || +$(credit).text() == 0
        || +$(grade).text() == 0)
            continue;

        totalCredit += +$(credit).text();
        totalPoint += +$(credit).text() * +$(grade).text();
    }
    console.log(totalPoint);
    console.log(totalCredit);
    $('#ctl00_mainContent_lblRollNumber').append(` - <span class="label label-info">${totalPoint/totalCredit}</span>`);
})();

function checkUngrade(subCode) {
    for (let i = 0; i < UNCALCULATE.length; i++) {
        if (subCode.includes(UNCALCULATE[i]))
            return false;
    }
    return true;
}

