import React from 'react';
import ReactDOM from 'react-dom';
import Rate from './rate';
import Profit from './profit';
import Return from './return';
import styles from '../../stylesheet.css';

function Root() {
  return (
    <div>
      <h1 className={styles.title}>ウダツベーシックインカム計算機</h1>

      <p>この計算機を使用して、予想される収益とリターンに基づく5年間の売買</p>
      <p>収益を算出します。<b>利率</b>（将来のキャッシュフローの現在価値を特定する</p>
      <p>のに使う利率）を入力してから、予想される<b>売買数値</b>と<b>利確（払い戻し）</b></p>
      <p>を下の表に入力してください。</p>
      
      <Rate/>
      <Profit/>
      <Return/>
    </div>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
