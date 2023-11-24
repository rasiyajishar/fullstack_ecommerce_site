// import React, { useContext } from 'react'
// import { useState,useEffect } from 'react';
// import { Axios } from '../App'
// import { mycontext } from './Context';



// export default function Order(){
  
//   const {userID} = useContext(mycontext)
// const [order, setOrder] = useState([])

// const fetchData = async () => {
//   try {
    
//     const response = await Axios.get(`/user/showOrders/${userID}`);
//     console.log( response.data.orderProductDetails);


//     if (response.status === 200) {
//       setOrder(response.data.orderProductDetails);
//     }
//   } catch (error) {
//     console.log("userOrderPage Error Occurred" + error);
//   }
// };

// useEffect(() => {
//   fetchData();
// }, []);


// return (
//   <>
//   <h1>Order details</h1>
//     {order && order.length > 0 ? (
//       order.map((value) => (
//         <div key={value._id}>
//           {value.products.map((pvalue) => (
//             <div key={pvalue.productId}>
//               <img src={pvalue.image} alt="error" />
//               <div>
//                 <p>{pvalue.title}</p>
//               </div>
//               <div>
//                 <span>{value.time}</span>
//                 <br />
//                 <span>{value.date}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))
//     ) : (
//       <div> No orders</div>
//     )}
//   </>
// );
// }
import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Axios } from '../App';
import { mycontext } from './Context';

const OrderContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const OrderItem = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 20px;
  padding: 10px;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const ProductDetails = styled.div`
  flex-grow: 1;
`;

const ProductTitle = styled.p`
  font-weight: bold;
`;

const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NoOrdersMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #555;
`;

export default function Order() {
  const { userID } = useContext(mycontext);
  const [order, setOrder] = useState([]);

  const fetchData = async () => {
    try {
      const response = await Axios.get(`/user/showOrders/${userID}`);
      console.log(response.data.orderProductDetails);

      if (response.status === 200) {
        setOrder(response.data.orderProductDetails);
      }
    } catch (error) {
      console.log("userOrderPage Error Occurred" + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <OrderContainer>
      <h1>Order details</h1>
      {order && order.length > 0 ? (
        order.map((value) => (
          <OrderItem key={value._id}>
            {value.products.map((pvalue) => (
              <ProductContainer key={pvalue.productId}>
                <ProductImage src={pvalue.image} alt="Product" />
                <ProductDetails>
                  <ProductTitle>{pvalue.title}</ProductTitle>
                  <OrderInfo>
                    <span>{value.time}</span>
                    <br />
                    <span>{value.date}</span>
                  </OrderInfo>
                </ProductDetails>
              </ProductContainer>
            ))}
          </OrderItem>
        ))
      ) : (
        <NoOrdersMessage>No orders</NoOrdersMessage>
      )}
    </OrderContainer>
  );
}
