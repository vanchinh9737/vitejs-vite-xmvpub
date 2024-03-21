import { Outlet, Link } from 'react-router-dom';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import './root.scss';
import { updateThem } from '../feature/changeTheme/theme';

function Root() {
  const isTheme = useSelector((state) => state.theme.isTheme);
  // useSelector lay ra gia tri khi thay doi
  const dispatch = useDispatch();
  // dispatch là một hàm được sử dụng để gửi các action đến Redux store, từ đó kích hoạt các reducers và cập nhật trạng thái của ứng dụng.
  return (
    <>
      <div id="sidebar" className={isTheme ? 'light' : 'dart'}>
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>

          <button onClick={() => dispatch(updateThem())}>
            {isTheme ? <MoonOutlined /> : <SunOutlined />}
          </button>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/contact`}>contact</Link>
            </li>
            <li>
              <Link to={`/signIn`}>signIn</Link>
            </li>
            <li>
              <Link to={`/HomePage`}>HomePage</Link>
            </li>
            <li>
              <Link to={`/SearchPage`}>SearchPage</Link>
            </li>
            <li>
              <Link to={`/table`}>table</Link>
            </li>
            <li>
              <Link to={`/Animation`}>animation</Link>
            </li>
            <li>
              <Link to={`/formik`}>Formik</Link>
            </li>

            <li>
              <Link to={`/homepagemain`}>homepagemain</Link>
            </li>
            <li>
              <a href={`/contacts/2`}>how are u</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail" className={isTheme ? 'light' : 'dart'}>
        {/* render children */}
        <Outlet />
      </div>
    </>
  );
}

export default Root;
