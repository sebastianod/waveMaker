import "./App.css";
import Features from "./components/features/features.component";

function App() { 
  
  return (
    <div className="App">
     <Features />
    </div>
  );
}

export default App;

//  //------------Receiving------------//
//  const [data, setData] = useState({
//   name: "",
//   age: 0,
//   date: "",
//   programming: "",
// });

// useEffect(()=>{
//   fetch("http://localhost:5000/data") //continuing the proxy http://localhost:5000/ in package.json
//   .then(
//     (res)=>{res.json()
//       .then((data)=>{
//         const { Name, Age, Date, Programming} = data; //destructuring python data
//         setData({
//           name: Name, //exactly as the property is named in the python app
//           age: Age,
//           date: Date,
//           programming: Programming,
//         });
//       });
//     })
// }, []);

// const { name, age, date, programming } = data; //destructuring our own react data

// return (
//   <div className="App">
//     <header className="App-header">
//       <h1> React retrieving flask data </h1>
//       <p>{name}</p>
//       <p>{age}</p>
//       <p>{date}</p>
//       <p>{programming}</p>
//     </header>
//   </div>
// );