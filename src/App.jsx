import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Buttons from "./components/Buttons";

const data = [
  {
    title: "Remove duplicates from array",
    solutions: [
      `const arr = [1,2,2,3];\nconst unique = [...new Set(arr)];`,
      `const arr = [1,2,2,3];\nconst unique = arr.filter((item, index) => arr.indexOf(item) === index);`,
    ],
  },
  {
    title: "Reverse string",
    solutions: [
      `const str = "hello";\nconst rev = str.split('').reverse().join('');`,
      `let str = "hello";\nlet rev = "";\nfor(let i=str.length-1;i>=0;i--){rev+=str[i];}`,
    ],
  },
  {
    title: "Even / Odd numbers",
    solutions: [
      `const arr=[1,2,3,4];\nconst even=arr.filter(n=>n%2===0);\nconst odd=arr.filter(n=>n%2!==0);`,
      `let even=[], odd=[];\nfor(let n of arr){\n if(n%2===0) even.push(n);\n else odd.push(n);\n}`,
    ],
  },
  {
    title: "Find largest number",
    solutions: [
      `const arr=[10,5,20];\nconst max=Math.max(...arr);`,
      `let max=arr[0];\nfor(let n of arr){ if(n>max) max=n; }`,
    ],
  },
  {
    title: "Count vowels",
    solutions: [
      `const str="javascript";\nconst count=str.match(/[aeiou]/gi)?.length || 0;`,
      `let count=0;\nfor(let c of str){ if('aeiou'.includes(c)) count++; }`,
    ],
  },
  {
    title: "Capitalize first letter",
    solutions: [
      `const str="hello";\nconst res=str.charAt(0).toUpperCase()+str.slice(1);`,
      `const res=str.replace(/^./, c=>c.toUpperCase());`,
    ],
  },
  {
    title: "Remove falsy values",
    solutions: [
      `const arr=[0,1,false,2];\nconst clean=arr.filter(Boolean);`,
      `const clean=arr.filter(item=>item);`,
    ],
  },
  {
    title: "Array sum",
    solutions: [
      `const arr=[1,2,3];\nconst sum=arr.reduce((a,b)=>a+b,0);`,
      `let sum=0;\nfor(let n of arr){ sum+=n; }`,
    ],
  },
  {
    title: "Find missing numbers",
    solutions: [
      `const arr=[1,2,4,6];\nconst missing=[];\nfor(let i=1;i<=6;i++){ if(!arr.includes(i)) missing.push(i); }`,
      `const full=[1,2,3,4,5,6];\nconst missing=full.filter(n=>!arr.includes(n));`,
    ],
  },
];

const App = () => {
  const [current, setCurrent] = useState(0);

  const [direction, setDirection] = useState(1);

  const prev = () => { setDirection(-1); setCurrent((c) => (c === 0 ? data.length - 1 : c - 1)); };
  const next = () => { setDirection(1); setCurrent((c) => (c === data.length - 1 ? 0 : c + 1)); };

  const item = data[current];

  return (
    <div className="gradient-bg min-h-screen flex flex-col">
      <Header />


      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10 gap-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            9 JavaScript Questions to Boost Your Skills
          </h1>
          <p className="text-muted-foreground text-sm">
            Practice real JavaScript interview questions
          </p>
        </div>
        {/* Card */}
        <Card direction={direction} current={current} item={item} data={data} />
        {/* Buttons */}
        <Buttons prev={prev} next={next} />
      </main>
    </div>
  );
};

export default App;