import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "./../store.js";
import { subCount } from "./../store.js";
import "./../style/Cart.css";

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  return (
    <div>
      {state.user.name} 님의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#(상품번호)</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>{state.cart[i].price}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(i));
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(subCount(i));
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
