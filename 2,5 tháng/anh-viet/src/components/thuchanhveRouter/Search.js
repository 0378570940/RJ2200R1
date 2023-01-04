import React from "react";
import { useSearchParams } from "react-router-dom"

// function Search() {
//     // let products = ["iphone 13 pro", "iphone 12", "Galaxy s22"];
//     let [searchParams, setSearchParams] = useSearchParams();

//     function hendlechange(event) {
//         let fields = event.target.value;
//         if (fields) {
//             setSearchParams({ fields })
//         } else {
//             setSearchParams({})
//         }
//     }
//     return (
//         <div>
//             <input value={searchParams.get("filter") || ""} onChange={hendlechange} />
//             {/* {products
//                 .filter(product => {
//                     let filter = searchParams.get("filter");
//                     if (!filter) return true;
//                     let name = product.toLowerCase();
//                     return name.startsWith(filter.toLowerCase());
//                 })
//                 .map((product, index) => (
//                     <li key={index}>{product}</li>
//                 ))} */}
//         </div >
//     )
// }


function Search() {
    let products = ["iphone 13 pro", "iphone 12", "Galaxy s22"];
    const [searchParams, setSearchParams] = useSearchParams(
        { search: "" }
    );

    function hendlechange(event) {
        // let fields = event.target.value;
        // if (fields) {
        //     setSearchParams({ fields })
        // } else {
        //     setSearchParams({})
        // }
        setSearchParams({ ...products, [event.target.name]: event.target.value })
    }
    return (
        <div>
            <input name="search" value={searchParams.search || ""} onChange={hendlechange} />
            {/* <input></input> */}
            {/* {products
                .filter(product => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = product.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map((product, index) => (
                    <li key={index}>{product}</li>
                ))} */}
        </div >
    )
}
export default Search;