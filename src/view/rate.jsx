import React from 'react';

export default function Rate(props) {
  return (
    <table>
      <tbody>
         <tr>
          <td><b>利率:</b></td>
          <td>
            <label><input type="number" name="number" value={props.rate} onChange={props.onChangeRate}/></label>
          </td>
        </tr>
      </tbody>
    </table>
  );
}