import React from 'react';

export default function Profit(props) {
  return (
  <div className='main'>
    <h2>バイオマス売買収益</h2>
    <table>
      <thead>
        <tr>
          <th>年</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>売買</td>
          <td>
            <label>
              <input
              type="number"
              name="number"
              value={props.buyings[0]}
              onChange={props.onChangeBuying}/> 万円
            </label>
          </td>
          <td>{props.buyings[1]} 万円</td>
          <td>{props.buyings[2]} 万円</td>
          <td>{props.buyings[3]} 万円</td>
          <td>{props.buyings[4]} 万円</td>

        </tr>
        <tr>
          <td>年間利益</td>
          <td>{props.profits[0].toFixed(2)} 万円</td>
          <td>{props.profits[1].toFixed(2)} 万円</td>
          <td>{props.profits[2].toFixed(2)} 万円</td>
          <td>{props.profits[3].toFixed(2)} 万円</td>
          <td>{props.profits[4].toFixed(2)} 万円</td>

        </tr>
        <tr>
          <td>元本追加</td>
          <td></td>
          <td>
            <label>
              <input type="number"
              name="number"
              value={props.additional_capitals[0]}
  //            onChange={props.onChangeAdditional_capital}/>
              onChange={(event) => { props.onChangeAdditional_capital(0, event) }}/> 万円
            </label>
          </td>
          <td>
            <label>
              <input type="number"
              name="number"
              value={props.additional_capitals[1]}
              onChange={(event) => { props.onChangeAdditional_capital(1, event) }}/> 万円
            </label>
          </td>
          <td>
            <label>
              <input type="number"
              name="number"
              value={props.additional_capitals[2]}
              onChange={(event) => { props.onChangeAdditional_capital(2, event) }}/> 万円
            </label>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}
