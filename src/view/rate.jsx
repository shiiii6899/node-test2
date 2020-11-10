import React from 'react';
import styles from '../../stylesheet.css';

export default function Rate(props) {
  return (
    <div>
      <div className={styles.interest}>
        <table>
          <tbody>
            <tr>
              <td><b>利率:</b></td>
              <td>
                <label><input type="number"
                  name="number"
                  value={props.rate}
                  onChange={props.onChangeRate}/> %
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}