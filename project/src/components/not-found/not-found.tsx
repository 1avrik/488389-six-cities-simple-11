import {Link} from 'react-router-dom';

function NotFound () {
  return (
    <div className="container">
      <h1>404 Not Found</h1>
      <Link to="/">На главную</Link>
    </div>
  );
}

export default NotFound;
