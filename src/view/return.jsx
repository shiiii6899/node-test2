import React from 'react';

export default function Return(props) {
  return (
  <div className='main'>
    　<h2>リターン</h2>
    <table>
      <tr>
        <th>年</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>

      </tr>
      <tr>
        <td>利確（払い戻し）6/15</td>
        <td></td>
        <td>
        <label>
            <input type="number"
            name="number"
            value={props.withdrawals[1]}
            onChange={(event) => { props.onChangeWithdrawals(1, event) }}/>
          </label>
        </td>
        <td>
        <label>
            <input type="number"
            name="number"
            value={props.withdrawals[2]}
            onChange={(event) => { props.onChangeWithdrawals(2, event) }}/>
          </label>
        </td>
        <td>
        <label>
            <input type="number"
            name="number"
            value={props.withdrawals[3]}
            onChange={(event) => { props.onChangeWithdrawals(3, event) }}/>
          </label>
        </td>
        <td>{props.final_withdrawals}</td>
      </tr>
      <tr>
        <td>元本（払い戻し）3/30</td>
        <td>
          <label><input type="number" name="number" value={props.capital_withdrawal} onChange={props.onChangeCapital_withdrawal}/></label>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>年間受取（払い戻し）</td>
        <td>{props.capital_withdrawal}</td>
        <td>{props.withdrawals[1]}</td>
        <td>{props.withdrawals[2]}</td>
        <td>{props.withdrawals[3]}</td>
        <td>{props.final_withdrawals}</td>
      </tr>
    </table>
  </div>
  );
}
