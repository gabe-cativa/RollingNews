import React, { Fragment } from "react";
import CardNew from "./CardNew";
import CardDeck from "react-bootstrap/CardDeck";
import "./style/category.css";
import { Link } from "react-router-dom";

const CategoryNew = (props) => {
  if (props.noticiasDeCategoria.length > 0) {
    return (
      <Fragment>
        <div className="border-bottom mb-3 pb-2">
          <h2 className="mt-2 mb-3 font-weight-bolder type-Future">
            <Link to="">{props.nombreCategoria}</Link>
          </h2>
          <CardDeck className="mb-3 categoryNew-cardDeck">
            {props.noticiasDeCategoria.map((noticia, i) => (
              <CardNew
                key={noticia._id}
                noticia={noticia}
                nombreCategoria={props.nombreCategoria}
              ></CardNew>
            ))}
          </CardDeck>
        </div>
      </Fragment>
    );
  } else {
    return null;
  }
};

export default CategoryNew;
