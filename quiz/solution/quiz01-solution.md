# Quiz 1 Solution

### 1. ให้หาจำนวนพนักงานรวมของทุกบริษัทในอาร์เรย์ `companyList` แล้วเก็บผลลัพธ์ในตัวแปรชื่อ `totalEmployees`

- **วิธีที่ 1:** ใช้ `for` statement

    ```javascript
    let totalEmployees = 0;
    for (let i = 0; i < companyList.length; i++) {
      totalEmployees += companyList[i].numEmployees;
    }
    console.log(`Total employees: ${totalEmployees}`);
    ```

- **วิธีที่ 2:** ใช้ `for...of` statement

    ```javascript
    let totalEmployees = 0;
    for (const company of companyList) {
      totalEmployees += company.numEmployees;
    }
    console.log(`Total employees: ${totalEmployees}`);
    ```

- **วิธีที่ 3:** ใช้ array `forEach()` method

    ```javascript
    let totalEmployees = 0;
    companyList.forEach((company) => {
      totalEmployees += company.numEmployees;
    });
    console.log(`Total employees: ${totalEmployees}`);
    ```

### 2. ให้สร้างอาร์เรย์ใหม่ที่มีข้อมูล (สมาชิกของอาร์เรย์) เป็นชื่อบริษัทจากอาร์เรย์ `companyList` แล้วเก็บอาร์เรย์ผลลัพธ์นี้ในตัวแปรชื่อ `companyNames`

- **วิธีที่ 1:** ใช้ array `forEach()` method (หรือใช้ `for`, `for...of` ก็ได้)

    ```javascript
    const companyNames = [];
    companyList.forEach(company => {
      companyNames.push(company.name);
    });
    console.log('Company names:', companyNames);
    ```

- **วิธีที่ 2:** ใช้ array `map()` method

    ```javascript
    const companyNames = companyList.map(company => company.name);
    console.log('Company names:', companyNames);
    ```
  ![การทำงานของ array `map()` method](2023-06-28_232451.png)
