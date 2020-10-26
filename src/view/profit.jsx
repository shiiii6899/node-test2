import React from 'react';

export default function Profit() {
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
					<form action="xxx.php" method="post">
						<label>?<input type="number" name="number"/></label>
					</form>
				</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>年間利益</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>元本追加</td>
				<td></td>
				<td>
					<form action="xxx.php" method="post">
						<label>?<input type="number" name="number"/></label>
					</form>
				</td>
				<td>
					<form action="xxx.php" method="post">
						<label>?<input type="number" name="number"/></label>
					</form>
				</td>
				<td>	
					<form action="xxx.php" method="post">
						<label>?<input type="number" name="number"/></label>
				</form></td>
				<td></td>
			</tr>
		</table>
	</div>
  );
}
