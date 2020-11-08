import React from 'react';
import ReactDOM from 'react-dom';
import Rate from './rate';
import Profit from './profit';
import Return from './return';
import styles from '../../stylesheet.css';


class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 300,
      capital: 100,
      capital_withdrawal: 100,
      additional_capital: [0, 0, 0],
      withdrawal: [0, 0, 0]
    }
  }

  onChangeRate(event) {
    this.setState({rate: event.value});
  }

  render()  {
    return (
      <div>
        <h1 className={styles.title}>ウダツベーシックインカム計算機</h1>

        <p>この計算機を使用して、予想される収益とリターンに基づく5年間の売買</p>
        <p>収益を算出します。<b>利率</b>（将来のキャッシュフローの現在価値を特定する</p>
        <p>のに使う利率）を入力してから、予想される<b>売買数値</b>と<b>利確（払い戻し）</b></p>
        <p>を下の表に入力してください。</p>
        
        <Rate
          onChangeRate={this.onChangeRate}
        />
        <Profit
          rate={this.state.rate}
        />
        <Return/>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
