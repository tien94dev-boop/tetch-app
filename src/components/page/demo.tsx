import React,{ useReducer, useRef, useEffect } from "react";

export default function Home() {
   const element = React.createElement(
    "div",
    { className: "header" },
    React.createElement("p", {className: "title"}, "Hello"),
  );
  return element
}

// export default function Counter() {
//     const initialState = { name: "", phoneNumber: "", description: "" };

//     const inputRef = useRef<HTMLInputElement | null>(null);

//     function reducer(state: any, action: any) {
//         const newState = { ...state };
//         if ("name" in action) newState.name = action.name
//         if ("phoneNumber" in action) newState.phoneNumber = action.phoneNumber
//         return newState
//     }
//     const [state, dispatch] = useReducer(reducer, initialState);
//     useEffect(() => {
//         inputRef.current?.focus();
//     }, []);
//     return (
//         <div className="pb-20">
//             {JSON.stringify(state)}
//             <div>
//                 <label htmlFor="name1">Name</label>
//                 <input value={state.name} name="name1" className="border"
//                     onChange={(e) => dispatch({ name: e.target.value })} 
//                     ref={inputRef}/>
//             </div>
//             <div>
//                 <label htmlFor="phoneNumber1">Phone</label>
//                 <input value={state.phoneNumber} name="phoneNumber1" className="border"
//                     onChange={(e) => dispatch({ phoneNumber: e.target.value })} />
//             </div>
//         </div>
//     );
// }
