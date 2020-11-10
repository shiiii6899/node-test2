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
      buying: 100,
      capital_withdrawal: 100,
      additional_capitals: [0, 0, 0, 0],
      withdrawals: [0, 0, 0, 0]
    }
    this.onChangeRate = this.onChangeRate.bind(this);
    this.onChangeBuying = this.onChangeBuying.bind(this);
    this.onChangeCapital_withdrawal = this.onChangeCapital_withdrawal.bind(this);
    this.onChangeAdditional_capital = this.onChangeAdditional_capital.bind(this);
    this.onChangeWithdrawals = this.onChangeWithdrawals.bind(this);
  }


  onChangeRate(event) {
    console.log(event.target.value);
    this.setState({rate: event.target.value});
  }

  onChangeBuying(event) {
    console.log(event.target.value);
    this.setState({buying: parseInt(event.target.value)});
  }

  onChangeCapital_withdrawal(event) {
    console.log(event.target.value);
    this.setState({capital_withdrawal: event.target.value});
  }

  onChangeAdditional_capital(id, event) {
    // additional_capitals: [0, 0, 0, 0],
    let additional_capitals = this.state.additional_capitals;
    additional_capitals[id] = parseInt(event.target.value);
    this.setState({additional_capitals: additional_capitals});
  }

  onChangeWithdrawals(id, event) {
    let withdrawals = this.state.withdrawals;
    withdrawals[id] = parseInt(event.target.value);
    this.setState({withdrawals: withdrawals});
  }

  render()  {
    let buyings = [ this.state.buying ];
    let profits = [];
    profits.push(this.state.buying * this.state.rate / 100);

    // 2年目の売買と利益の計算
    buyings.push(buyings[0] + profits[0] - this.state.capital_withdrawal + this.state.additional_capitals[0]);
    profits.push(buyings[1] * this.state.rate / 100);

    // 3年目の売買と利益の計算
    buyings.push(buyings[1] + profits[1] - this.state.withdrawals[1] + this.state.additional_capitals[1]);
    profits.push(buyings[2] * this.state.rate / 100);

     // 4年目の売買と利益の計算
     buyings.push(buyings[2] + profits[2] - this.state.withdrawals[2] + this.state.additional_capitals[2]);
     profits.push(buyings[3] * this.state.rate / 100);

      // 5年目の売買と利益の計算
    buyings.push(buyings[3] + profits[3] - this.state.withdrawals[3] + this.state.additional_capitals[3]);
    profits.push(buyings[4] * this.state.rate / 100);

    return (
      <div>
        <h1 className={styles.title}>ウダツベーシックインカム計算機</h1>

        <p>この計算機を使用して、予想される収益とリターンに基づく5年間の売買</p>
        <p>収益を算出します。<b>利率</b>（将来のキャッシュフローの現在価値を特定する</p>
        <p>のに使う利率）を入力してから、予想される<b>売買数値</b>と<b>利確（払い戻し）</b></p>
        <p>を下の表に入力してください。</p>

        <Rate
          rate={this.state.rate}
          onChangeRate={this.onChangeRate}
        />
        <Profit
          buyings={buyings}
          profits={profits}
          additional_capitals={this.state.additional_capitals}
          onChangeBuying={this.onChangeBuying}
          onChangeCapital_withdrawal={this.onChangeCapital_withdrawal}
          onChangeAdditional_capital={this.onChangeAdditional_capital}
        />
        <Return
          capital_withdrawal={this.state.capital_withdrawal}
          additional_capitals={this.state.additional_capitals}
          withdrawals={this.state.withdrawals}
          final_withdrawals={buyings[4] + profits[4]}
          onChangeCapital_withdrawal={this.onChangeCapital_withdrawal}
          onChangeAdditional_capital={this.onChangeAdditional_capital}
          onChangeWithdrawals={this.onChangeWithdrawals}
        />
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
