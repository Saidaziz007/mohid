import React from "react";

const NavbarSearch = ({ data }) => {
  let searchItems = data?.map((el) => (
    <div key={el.id} className="search-items">
      <div className="search-item">
        <img src={el.images[0]} alt="" />
        <h1>{el.title}</h1>
      </div>
      <h3>${el.price}</h3>
    </div>
  ));
  return (
    <div className="nav-input-result">
      {!data || !data.length ? <h3>Malumot topilmadi</h3> : null}
      {searchItems}
    </div>
  );
};

export default NavbarSearch;
