# Quiz 2

ให้เขียนฟังก์ชั่นที่ทำหน้าที่เป็น reducer ในโจทย์ต่อไปนี้

> **Note:** Reducer (รีดิวเซอร์) ก็คือฟังก์ชั่น (callback function) ที่เราส่งเป็น parameter ให้กับ array `reduce()` method

1. ให้หาค่าสูงสุด (max) ใน integer array:

```javascript
const numbers = [10, 5, 20, 8, 15];
const max = numbers.reduce(/* reducer */);
console.log(max); // Output: 20
```

2. ให้ทำการ flatten อาร์เรย์ `nestedArray` ต่อไปนี้:

```javascript
const nestedArray = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];
const flattenedArray = nestedArray.reduce(/* reducer */);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
```

> **Note:** การ flatten หรือทำให้อาร์เรย์ "แบน" ก็คือ การแปลงอาร์เรย์หลายมิติ หรืออาร์เรย์ซ้อนอาร์เรย์ ให้กลายเป็นอาร์เรย์ 1 มิติ

3. ให้จัดกลุ่มนักเรียน โดยแยกตามเกรดที่ได้:

```javascript
const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" },
];
const groupedByGrade = students.reduce(/* reducer */);
console.log(groupedByGrade);
// Output:
// {
//   'A': [{ name: 'Alice', grade: 'A' }, { name: 'Charlie', grade: 'A' }],
//   'B': [{ name: 'Bob', grade: 'B' }],
//   'C': [{ name: 'David', grade: 'C' }]
// }
```
