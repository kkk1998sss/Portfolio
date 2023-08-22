// import React, { useState, useEffect } from "react";
// import './outlet_cal.css'
// import { FlatList, Text } from 'react-native';


// // function OUTLET_CAL() {
// //     const [data, setData] = useState([]);

// //     useEffect(() => {
// //         async function fetchData() {
// //             const response = await fetch('https://romsons-demo.omlogistics.co.in/skulist', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify({
// //                     division: "1"
// //                 })
// //             });
// //             const data = await response.json();
// //             setData(data);
// //         }

// //         fetchData();
// //         console.log(data);
// //     }, []);

// //     console.log(data);
// //     return (
// //         // <table>
// //         //     <thead>
// //         //         <tr>
// //         //             {/* Add table headers here */}
// //         //         </tr>
// //         //     </thead>
// //         //     <tbody>
// //         //         {data.data}
// //         //     </tbody>
// //         // </table>

// //         <div className="card_OUT">
// //                      <h2>COMFIT 3D FACE MASK 1s</h2>
// //                      <div className="row">
// //                          <div className="col">
                            
// //                              <label htmlFor="">Price </label><br />
// //                              <label htmlFor="">Seg  {data.data.map(item =>(
// //                                 item.sku_id
// //                              ))}</label><br />
// //                              <label htmlFor="">Amt</label><br />
// //                          </div>
// //                          <div className="col">
// //                          <input type="text" placeholder="Unit"/>
// //                          </div>
// //                      </div>
    
// //                  </div>
// //     );
// // }

// const OUTLET_CAL = () => {
//   const [items, setItems] = useState([]);

//   const getData = async () => {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ "division": "1" })
//     };
//     const response = await fetch('https://romsons-demo.omlogistics.co.in/skulist',requestOptions);
//     const json = await response.json();
//     setItems(json);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <FlatList
//       data={items}
//       renderItem={({ item }) => <Text></Text>}
      
//     />
//   );
// };

// // function OUTLET_CAL() {
// //     const [result, setPostId] = useState([]);
    
// //     useEffect(() => {
// //         // POST request using fetch inside useEffect React hook
// //         const requestOptions = {
// //             method: 'POST',
// //             headers: { 'Content-Type': 'application/json' },
// //             body: JSON.stringify({ "division": "1" })
// //         };
// //         fetch('https://romsons-demo.omlogistics.co.in/skulist', requestOptions)
// //             .then(response => response.json())
// //             .then(data => console.log("result",data))
// //             .then(data => setPostId(data))
// //             .catch(err => console.error(err))
// //             // .then(result=>console.log("result",result.data[0].sku_id));
// //            setPostId();

           

    
// //     }, []);
// // return(
// //     <div>
// //         <ul>
// //             {result.map((item, index)=>(
                
// //                 <li key={index}> {item.data[0].sku_id} </li>
// //             ))}
// //         </ul>
// //     </div>
// // )



// //     const renderList = useEffect.map((item, index) => 
// //     <div key={index}>{item}</div>
// //   );

//         // return( 
            
//         //   <tr>
//         //     <td>{element.data.sku_id}</td>
//         //     <td>{element.data.sku_price}</td>
//         //     <td>{element.data.sku_gst}</td>
//         //   </tr>
            
//         // )


//     // return (
    //     <div className="card_OUT">
    //             <h2>COMFIT 3D FACE MASK 1s</h2>
    //             <div className="row">
    //                 <div className="col">
                        
    //                     <label htmlFor="">Price </label><br />
    //                     <label htmlFor="">Seg</label><br />
    //                     <label htmlFor="">Amt</label><br />
    //                 </div>
    //                 <div className="col">
    //                 <input type="text" placeholder="Unit"/>
    //                 </div>
    //             </div>

    //         </div>
         
        
//     // );


// // }


// // const OUTLET_CAL = (result) => {
// //     return(
// //         <table>
// //              <thead>
// //                  <tr>
// //                      {/* Add table headers here */}
// //                  </tr>
// //              </thead>
// //              <tbody>
// //                  {
// //                      <tr key={result.data.sku_id}>
// //                          {/* Add table cells here */}
// //                      </tr>
// //                 }
// //              </tbody>
// //          </table>
// //     )
// // }
// // let array1 = [1,2,3,4,5,6,7,8,9]

// // let array2 = array1.map(value=> value*2
// // );
// // console.log(array2)

// // let array3 = [1,2,3,4,5,6,7,8,9]

// // let array4 = array1.filter(value=> value%2 == 0
// // );
// // console.log(array4)


// // let array5 = [1,2,3,4,5,6,7,8,9]

// // let array6 = array1.filter(function(value){
// //     if(value%2 === 0){

// //     }
// //     return value
// // } 
// // );
// // console.log(array6)

// To Display on screen
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
// credintial for API
var raw = JSON.stringify({
    "division": "1"
});
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
//Data fetching from API
fetch("https://romsons-demo.omlogistics.co.in/skulist",requestOptions).then(
  res => {
    res.json().then(
      data => {
        console.log(data);
        if (data.data.length > 0) {
          //calculation part finding GST and Adding Values
            var NET_AMT = Int16Array;
            var TOT_AMOUNT =Int32Array;
            data.data.forEach(ele=> {
                ele['NET_AMT']=(ele.order_amt/100)*ele.order_gst_amt;
                ele['TOT_AMOUNT']=ele.NET_AMT+ele.order_amt;
                });
          //creating array in javascript to display all data
          var temp = "";
          data.data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.item_id + "</td>";
            temp += "<td>" + itemData.item_price_unit + "</td>";
            temp += "<td>" + itemData.item_qty + "</td>";
            temp += "<td>" + itemData.order_amt + "</td>";
            temp += "<td>" + itemData.order_gst_amt.toFixed(2) +'%'+ "</td>";
            temp += "<td>" + itemData.TOT_AMOUNT.toFixed(2) + "</td></tr>";
        });
        //Addition Part
        let addqty = 0;
        let totalaftertax = 0;
        let NetTotal = 0;
            data.data.forEach(el => {
            //   console.log(el);
              addqty +=el.item_qty;
              NetTotal += el.TOT_AMOUNT;
            });
            let totalQty=addqty;
            console.log(NetTotal);

            temp += "<tr>";
            temp += `<th>` + "Total" + "</th>"
            temp += "<td>" + "" + "</td>"
            temp += "<td>" + totalQty + "</td>"
            temp += "<td>" + data.data[0].total_quantity + "</td>"
            temp += "<td>" + "" + "</td>"
            temp += "<th>" + NetTotal.toFixed(2) + "</th></tr>";

          var temp1 = "";
          data.data.forEach((itemData1) => {
            temp1 += "<tr>";
            temp1 += "<td>" + itemData1.item_id + "</td>";
            temp1 += "<td>" + itemData1.item_price_unit + "</td>";
            temp1 += "<td>" + itemData1.item_qty + "</td>";
            temp1 += "<td>" + itemData1.order_amt + "</td>";
            temp1 += "<td>" + itemData1.order_gst_amt.toFixed(2) +'%'+ "</td>";
            temp1 += "<td>" + itemData1.TOT_AMOUNT.toFixed(2) + "</td></tr>";
          });
          temp1 += "<tr>";
            temp1 += `<th>` + "Total" + "</th>"
            temp1 += "<td>" + "" + "</td>"
            temp1 += "<td>" + totalQty + "</td>"
            temp1 += "<td>" + data.data[0].total_quantity + "</td>"
            temp1 += "<td>" + "" + "</td>"
            temp1 += "<th>" + NetTotal.toFixed(2) + "</th></tr>";
            //DOM Selection 
          document.getElementById('data').innerHTML = temp1;
          document.getElementById('tableupper').innerHTML = temp;
          document.getElementById("ph_no").innerText = data.data[0].phone_no;
          document.getElementById("item_gst").innerText = data.data[0].total_quantity;
        }
      }
    )

  },
);


// // function App() {
// //     const [data, setData] = useState([]);

// //     useEffect(() => {
// //         async function fetchData() {
// //             const response = await fetch('/api/data');
// //             const data = await response.json();
// //             setData(data);
// //         }

// //         fetchData();
// //     }, []);

// //     return (
// //         <table>
// //             <thead>
// //                 <tr>
// //                     {/* Add table headers here */}
// //                 </tr>
// //             </thead>
// //             <tbody>
// //                 {data.map(item => (
// //                     <tr key={item.id}>
// //                         {/* Add table cells here */}
// //                     </tr>
// //                 ))}
// //             </tbody>
// //         </table>
// //     );
// // }

// // return(
// //     <table>
// //      <thead>
// //          <tr>
// //           {/* Add table headers here */}
// //          </tr>
// //      </thead>
// //      <tbody>
// //          {result.map(item => (
// //             <tr key={item.sku_id}>
// //                 {/* Add table cells here */}
// //             </tr>
// //         ))}
// //     </tbody>
// // </table>
// //    )

// export default OUTLET_CAL