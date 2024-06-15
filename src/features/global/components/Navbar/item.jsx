import { Link } from "react-router-dom";

const Item = ({ name, to, ...rest }) => {
  return (
    <li>
      <Link to={to} {...rest}>{name}</Link>
    </li>
  );
}

export default Item