import React from "react";
import CategoryNew from "../principal/CategoryNew";

const Category = (props) => {
  return (
    <div className="p-3">
      {
        <CategoryNew
          noticiasDeCategoria={props.noticias}
          nombreCategoria={props.categoria}
        ></CategoryNew>
      }
    </div>
  );
};

export default Category;
