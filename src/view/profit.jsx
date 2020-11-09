import React from 'react';

export default function Profit(props) {
  return (
	<div className='main'>
    　<h2>バイオマス売買収益</h2>
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
				<td>売買</td>
				<td>
					<label><input type="number" name="number" value={props.capital} onChange={props.onChangeCapital}/></label>
				</td>
				<td></td>
  				<td>{props.rate}</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>年間利益</td>
  				<td>{(props.capital * props.rate / 100).toFixed(2)}</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>元本追加</td>
				<td></td>
				<td>
					<label><input type="number" name="number"/></label>
				</td>
				<td>
					<label><input type="number" name="number"/></label>
				</td>
				<td>	
					<label><input type="number" name="number"/></label>
				</td>
				<td></td>
			</tr>
		</table>
	</div>
  );
}
