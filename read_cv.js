const fs = require('fs');
const pdf = require('pdf-parse');

async function read() {
    try {
        const d1 = await pdf(fs.readFileSync('../AdityaKumarNewResume.pdf'));
        console.log('---CV1 Education:\n', d1.text.split(/education/i)[1]?.substring(0, 500));
        const d2 = await pdf(fs.readFileSync('../AdityaLPU_NewCV.pdf'));
        console.log('\n---CV2 Education:\n', d2.text.split(/education/i)[1]?.substring(0, 500));
    } catch (e) { console.error(e); }
}
read();
