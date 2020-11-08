import React from 'react';

export default function Rate(props) {
  return (
    <table>
			<tr>
				<td><b>利率:</b></td>
				<td>
					<form action="xxx.php" method="post">
						<label><input type="number" name="number" onChange={props.onChangeRate}/></label>
          </form>  
				</td>
			</tr>
		</table>
  );
}
