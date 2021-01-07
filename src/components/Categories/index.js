// import React from 'react'
// import CategoryLinkIcon from '../icons/CategoryLinkIcon';

// const Categories = (props) => {
//   return (
//     <div >
//       {(props.items || []).map((item, i) => <a href="https://ardensanalmarket.com/"><span>{item.label}</span> <CategoryLinkIcon /></a>)}
//     </div>
// }
// export default Categories;

import React from 'react'
import { Link } from 'react-router-dom';
import CategoryLinkIcon from '../icons/CategoryLinkIcon';
import './Categories.css';

export const Categories = (props) => {
  console.log(props);
  return (
    <div>
      <Link to={`/products`} style={{ textDecoration: "none" }}>
        <div className="category-link">
          <span>All</span>
          <span><CategoryLinkIcon />
          </span>
        </div>
      </Link>
      {(props.items || []).map((item, i) => (
        <Link to={`/products/${item}`} style={{ textDecoration: "none" }} key={`Menu-item-${i}`}>
          <div className="category-link">
            <span>{item}</span>
            <span><CategoryLinkIcon />
            </span>
          </div>
        </Link>
      ))
      }
    </div>
  )
}
export default Categories;

