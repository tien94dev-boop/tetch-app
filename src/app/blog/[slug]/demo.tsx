
const companyName: string = "An";
let age: number = 18;
let isStudent: boolean = true;

const scores: number[] = [8, 9, 10];
const labels: string[] = ["Phone Number", "Description"];

interface User {
    name: string;
    age: number;
}

const student: User = {
    name: "Bình",
    age: 15
};

let id: number | string
id = 123
id="123"

let info: any
info = "Thoong tin"
info = 5
info = ["2", 3, { key: "Type", value: "Script"}]



function sum(a:number, b:number): string{
    return `Tổng 2 số là: ${a + b}`
}
sum(5,2)


type UserProps = {
    name: string
  }
  
export default function UserCard({ name }: { name: string }) {
    return <h2>{name}</h2>
}
  