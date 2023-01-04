import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import BasicForm from './Components/BasicForm';
// import SingupFormik from './Components/SingupFormik';
import NewProductS from './Components/NewProductS';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// react 18.6
// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<NewProductS />)

// // ----- Thực hành hiện thị tên của ban React Element tạo bởi JSX--------------
// // khởi tạo biến mang tên giá trị
// const name="Nguyễn Anh Việt"
// // tạo 1 phần tử hiện thị tên của bạn
// React.createElement("h1",{style: { textAlign: "center" }}, name)
// // Code lạnh Render, Khai báo biến root khởi tạo 1 ReactDom.createRoot()
// const root1= ReactDOM.createRoot(document.getElementById("root"));
// // chuyền phần từ React.createElement vào Render
// root1.render(
//   React.createElement("h1",{style: { textAlign: "center" }}, name)
// );

// const fruits =['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan']
// const root2= ReactDOM.createRoot(document.getElementById("root"));
// root2.render(
//   <div>
//     <h1>List of fruits</h1>
//     <ul>
//       {fruits.map((item)=>(
//         <li>{item}</li>
//       ))}
//     </ul>
//   </div>
// )

// // khởi tạo 1 ReactDom.createRooot
// const root3= ReactDOM.createRoot(document.getElementById("root"));
// const tick = () =>{
//   root3.render(
//     <div>
//       <h1>Hiện thị ngày tháng và giờ</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
// };

// // setInterval(tick, 1000)


// // Khởi tạo 1 ReactDom.createRoot
// const root4 = ReactDOM.createRoot(document.getElementById('root'));
// root4.render(
//   <h2>Browser's details: {navigator.userAgent}</h2>
// )

// // Bài tập hiện thị ra danh sách sinh viên
// const students = [
//   {
//     company: 'Alfreds Futterkiste',
//     contact: 'Maria Anders',
//     country: 'Germany'
//   },
//   {
//     company: 'Centro comercial Moctezuma',
//     contact: 'Francisco Chang',
//     country: 'Mexico'
//   },
//   {
//     company: 'Ernst Handel',
//     contact: 'Roland Mendel',
//     country: 'Austria'
//   },
//   {
//     company: 'Island Trading',
//     contact: 'Helen Bennett',
//     country: 'UK'
//   },
//   {
//     company: 'Laughing Bacchus Winecellars',
//     contact: 'Yoshi Tannamuri',
//     country: 'Canada'
//   },
//   {
//     company: 'Magazzini Alimentari Riuniti',
//     contact: 'Giovanni Rovelli',
//     country: 'Italy'
//   }
// ]
// const root5= ReactDOM.createRoot(document.getElementById("root"))
// root5.render(
//   <div>
//     <h1>Hiện thị danh sách students</h1>
//     <table>
//       <tr>
//         <th>company</th>
//         <th>contact</th>
//         <th>country</th>
//       </tr>
//       {students.map(item=>(
//         <tr>
//           <td>{item.company}</td>
//           <td>{item.contact}</td>
//           <td>{item.country}</td>
//         </tr>
//       ))}
//     </table>
//   </div>
// )

// // Profile Card
// const root6=ReactDOM.createRoot(document.getElementById('root'))
// root6.render(
//   <div class='main-title'>
//     <div class='main-img'>
//       <img src='https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/4028eaa467f477c80167f48e23810ac6/032022/273209277_964804991075242_1705483007918029577_n_20220317193725.png'></img>
//     </div>
//     <img class='img' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
//     <div class='main-text'>
//       <h1>Ruma Khan</h1>
//       <p>Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry
//       </p>
//       <button className="btn third">FOLLOW</button>
//     </div>
//   </div>
// )

// // sủ dụng bằng boostrap
// const root7=ReactDOM.createRoot(document.getElementById('root'))
// root6.render(
//   <div className="container d-flex align-items-center text-center">
//     <div className="form-signin">
//       <form>
//         <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
//         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
//         <div className="form-floating">
//           <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com" />
//           <label>Email address</label>
//         </div>
//         <div className="form-floating">
//           <input type="password" className="form-control password" id="floatingPassword" placeholder="Password" />
//           <label>Password</label>
//         </div>
//         <div className="checkbox mb-3">
//           <label>
//             <input type="checkbox" /> Remember me
//           </label>
//         </div>
//         <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
//         <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
//       </form>
//     </div>
//   </div>
// )




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
