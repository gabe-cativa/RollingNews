import React from "react";
import NewContent from "./NewContent";
import NewRelated from "./related/NewRelated";
import NewTop from "./topNew/NewTop";
import "./style/newDetail.css";

const NewDetail = (props) => {
  return (
    <div className="pl-4 pr-4 newDetail mt-1">
      <div className="d-flex justify-content-center mb-3 newDetail-container">
        <NewContent noticia={props.noticia} className=""></NewContent>
        {
          <div className="border pl-2 pr-2 mt-3 rounded-lg col-2 shadow bg-white rounded newDetail-col_publicity type-Future">
            <NewTop
              noticiasRelevantes={props.noticias.filter(
                (n) => n.destacado === true
              )}
            ></NewTop>
            <div className="mt-3 type-Future">
              <div className=" d-flex justify-content-center   ">
                <div className="align-item">
                  <img
                    src={process.env.PUBLIC_URL + "/boa.gif"}
                    alt="publicidad"
                    width="150px"
                    height="150px"
                  />
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-center shadow  rounded ">
              <div className="align-item">
                <img
                  src={process.env.PUBLIC_URL + "/coto.jpg"}
                  alt="publicidad"
                  width="150px"
                  height="150px"
                />
              </div>
            </div>
            <div className="bk-naranja mt-3">
              <h1> </h1>
            </div>
          </div>
        }
      </div>
      <NewRelated
        noticiasRelacionadas={props.noticias.filter(
          (n) =>
            n.categoria === props.noticia.categoria &&
            n._id !== props.noticia._id
        )}
      ></NewRelated>
    </div>
  );
};

export default NewDetail;
