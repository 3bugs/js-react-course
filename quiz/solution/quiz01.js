const companyList = [
  {
    id: 1,
    name: "บริษัท แวนเซลส์ แอพพลิเคชั่น จำกัด",
    numEmployees: 10,
  },
  {
    id: 2,
    name: "บริษัท เถ้าแก่น้อย ฟู๊ดแอนด์มาร์เก็ตติ้ง จํากัด (มหาชน)",
    numEmployees: 2500,
  },
  {
    id: 3,
    name: "บริษัท อําพลฟูดส์ โพรเซสซิ่ง จํากัด",
    numEmployees: 4000,
  },
  {
    id: 4,
    name: "บริษัท เอ็น.ซี.เอส.โกลด์เบรด จำกัด",
    numEmployees: 350,
  },
  {
    id: 5,
    name: "บริษัท สุนทรธัญทรัพย์ จํากัด",
    numEmployees: 200,
  },
];

// หาจำนวนพนักงานรวมทุกบริษัท วิธีที่ 1
let totalEmployees = 0;
for (let i = 0; i < companyList.length; i++) {
  totalEmployees += companyList[i].numEmployees;
}
console.log(`Method 1, Total employees: ${totalEmployees}`);

// หาจำนวนพนักงานรวมทุกบริษัท วิธีที่ 2
totalEmployees = 0;
for (const company of companyList) {
  totalEmployees += company.numEmployees;
}
console.log(`Method 2, Total employees: ${totalEmployees}`);

// หาจำนวนพนักงานรวมทุกบริษัท วิธีที่ 3
totalEmployees = 0;
companyList.forEach((company) => {
  totalEmployees += company.numEmployees;
});
console.log(`Method 3, Total employees: ${totalEmployees}`);

console.log('-------------------');

// สร้างอาร์เรย์เก็บชื่อบริษัท วิธีที่ 1
let companyNames = [];
companyList.forEach(company => {
  companyNames.push(company.name);
});
console.log('Method 1, Company names:', companyNames);

// สร้างอาร์เรย์เก็บชื่อบริษัท วิธีที่ 2
companyNames = companyList.map(company => company.name);
console.log('Method 2, Company names:', companyNames);
