import { useState } from 'react';
import './homePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  decrementByAmount,
  incrementByAmount,
} from '../feature/count/count';

function HomePage({ title, content }) {
  // UseState
  const [colorTitle, setColorTitle] = useState('red');
  const [text, setText] = useState('HELLO');
  // colorTitle là giá trị khởi tạo init ban đầu và dùng để hiển thị giá trị đó
  // logic code

  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.counter.name);
  const dispatch = useDispatch();
  const onColor = () => {
    console.log('onClick !');
    // logic change here !
    setColorTitle('green');
  };

  return (
    <>
      count: <span style={{ fontWeight: 'bold', color: 'green' }}>{count}</span>
      <hr />
      name: {name}
      <hr />
      <button onClick={() => dispatch(increment())}>+20</button>
      <button onClick={() => dispatch(decrement())}>-20</button>
      =====
      <header style={{ color: colorTitle }}>{title}</header>
      <article>{content}</article>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          console.log(event, 'event');
          // dispatch(incrementByAmount(event.target.value));
          setText(event.target.value);
        }}
      />
      <button onClick={() => dispatch(incrementByAmount(text))}>
        {' '}
        tang chi so{' '}
      </button>
      <button onClick={() => dispatch(decrementByAmount(text))}>
        {' '}
        giam chi so
      </button>
      <hr />
      hello: {text}
      {/* style inline css */}
      <hr />
      <button className="bgButon" onClick={() => onColor()}>
        change title
      </button>
      {/* import { HappyProvider } from '@ant-design/happy-work-theme';

export default () => ( */}
    </>
  );
}

export default HomePage;
