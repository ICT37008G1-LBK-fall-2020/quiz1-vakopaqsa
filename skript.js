/* 
    3. დაწერეთ ფუნქცია რომელიც ღებულობს სტუდენტების 2 მასივს 
    (თითო სტუდენტი წარმოდგენილია ობიექტით შემდეგი ველებით 
    {id: number, name: string, gpa: number})
    და დააბრუნებს უდიდესი gpa-ს მქონე 5 სტუდენტს მასივის სახით.
    თუ რამდენიმე სტუდენტი არის ერთნაირი gpa-თი და შედის ტოპ 5 gpa-ებში უნდა დააბრუნოს
    ყველა ასეთი სტუდენტი (მაგალითად თუ სტუდენტებს შემდეგი gpa აქვთ: [2, 2, 3.5, 3.5 4, 4, 4, 4]
    ფუნქციამ უნდა დააბრუნოს შემდეგი gpa-ს მქონე სტუდენტი: [3.5, 3.5 4, 4, 4, 4]
    მიუხედავად იმსია რომ 5-ზე მეტი იქნება)
function getTopStudents(studentsArray1, studentsArray2){
}
*/
let student1 = [
    {iD: 0, name:"ალექსანდრე" , gpa:2.3},
    {iD: 1, name:"მალხაზი" , gpa:2.7},
    {iD: 2, name:"ნინო" , gpa:1.6},
    {iD: 3, name:"მარი" , gpa:3.2},
    {iD: 4, name:"ელენე" , gpa:3.5},
    {iD: 5, name:"გიორგი" , gpa: 3.9},
    {iD: 6, name:"რევაზი" , gpa:3.4},
    {iD: 7, name:"დავითი" , gpa:3.3},
    {iD: 8, name:"ალეკო" , gpa:3.3}
];

let student = [
    {iD: 9, name:"მირიანი" , gpa:2.7},
    {iD: 10, name:"მიხო" , gpa:3.7},
    {iD: 11, name:"ნინუცა" , gpa:2.6},
    {iD: 12, name:"მილენა" , gpa:2.2},
    {iD: 13, name:"გიო" , gpa:3.6},
    {iD: 14, name:"რიტა" , gpa: 4.0},
    {iD: 15, name:"ნიკა" , gpa:3.6},
    {iD: 16, name:"დათო" , gpa:3.2},
    {iD: 17, name:"სანდრო" , gpa:3.4}
];

function higherGpa (firstBase , secondBase){

    let result = [];

    for(let i=0 ; i<firstBase.length;i++){
        result.push(firstBase[i].gpa);
    }
    for(let i=0 ; i<secondBase.length;i++){
        result.push(secondBase[i].gpa);
    }
    result.sort();
    let j = result.length-1;

    let highGPA = [];
    for(let i = 0;i<5;i++){
        highGPA.push(result[j]);
        j--;
    }
    alert(highGPA);
}

higherGpa(student,student1);