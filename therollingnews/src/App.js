import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MonedaExtr from "./components/Api/MonedaExtr";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewDetail from "./components/new/NewDetail";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Inicio from "./components/principal/Inicio";
import AgregarNoticia from "./components/administracion/noticias/AgregarNoticia";
import ListaNoticias from "./components/administracion/noticias/ListaNoticias";
import EditarNoticia from "./components/administracion/noticias/EditarNoticia";
import Ingresar from "./components/login/Ingresar";
import Registro from "./components/login/Registro";
import AgregarCategoria from "./components/administracion/categorias/AgregarCategoria";
import ListadoCategorias from "./components/administracion/categorias/ListadoCategorias";
import EditarCategoria from "./components/administracion/categorias/EditarCategoria";
import Error404 from "./components/error404/Error404";
import Nosotros from "./components/principal/Nosotros";
import Category from "./components/categoria/Category";
import Administrar from "./components/administracion/Administrar";
import ListadoUsuarios from "./components/administracion/usuarios/ListadoUsuarios";
import EditarUsuarios from "./components/administracion/usuarios/EditarUsuarios";

function App() {
  const [listadoUsuarios, setListadoUsuarios] = useState([]);
  const [recargarUsuarios, setRecargarUsuarios] = useState(true);
  const [listadoNoticias, setListadoNoticias] = useState([]);
  const [recargarNoticias, setRecargarNoticias] = useState(true);
  const [listadoCategorias, setListadoCategorias] = useState([]);
  const [recargarCategorias, setRecargarCategorias] = useState(true);
  const [usuarios, setUsuarios] = useState("");
  const [sesion, setSesion] = useState({ usuario: "Ingresar" });

  useEffect(() => {
    if (recargarNoticias || recargarCategorias || recargarUsuarios) {
      consultarAPI();
      setRecargarNoticias(false);
      setRecargarCategorias(false);
      setRecargarUsuarios(false);
    }
  }, [recargarNoticias, recargarCategorias, recargarUsuarios]);

  const consultarAPI = async () => {
    try {
      const respuestaU = await fetch(
        "https://the-rolling-new.herokuapp.com/api/theRollingNew/Administracion/Usuario"
      );

      const respuesta = await fetch(
        "https://the-rolling-new.herokuapp.com/api/theRollingNew"
      );
      const respuestaCat = await fetch(
        "https://the-rolling-new.herokuapp.com/api/theRollingNew/Categorias"
      );
      const respuestaUsu = await fetch(
        "https://the-rolling-new.herokuapp.com/api/theRollingNew/Sesion/Login"
      );
      const resultado = await respuesta.json();
      const resultadoCat = await respuestaCat.json();
      const resultadoUsu = await respuestaUsu.json();
      const resultadoU = await respuestaU.json();

      setListadoUsuarios(resultadoU);
      setListadoNoticias(resultado);
      setListadoCategorias(resultadoCat);
      setUsuarios(resultadoUsu);
    } catch (error) {}
  };

  return (
    <Router>
      <Header
        categorias={listadoCategorias}
        sesion={sesion}
        setSesion={setSesion}
      ></Header>
      <section className="container contenidoSeccion"></section>
      <MonedaExtr className="moneda"></MonedaExtr>
      <Switch>
        <Route exact path="/">
          <Inicio
            destacadas={listadoNoticias.filter(
              (destacadas) => destacadas.destacado === true
            )}
            categorias={listadoCategorias}
            noticias={listadoNoticias}
          ></Inicio>
        </Route>
        <Route
          path="/Categoria/:categoria/"
          render={(props) => {
            const categoria = props.match.params.categoria;

            const notasCategoria = listadoNoticias.filter(
              (n) => n.categoria === categoria
            );

            return (
              <Category
                categoria={categoria}
                noticias={notasCategoria}
              ></Category>
            );
          }}
        ></Route>
        <Route
          path="/:categoria/nota/:id"
          render={(props) => {
            const idParametro = props.match.params.id;
            const cat = props.match.params.categoria;
            const notasCategoria = listadoNoticias.filter(
              (n) => n.categoria === cat
            );
            const nota = notasCategoria.find(
              (item) => item._id === idParametro
            );

            return (
              <NewDetail noticia={nota} noticias={listadoNoticias}></NewDetail>
            );
          }}
        ></Route>

        <Route exact path="/Administracion/Noticias">
          <ListaNoticias
            noticias={listadoNoticias}
            setRecargarNoticias={setRecargarNoticias}
          ></ListaNoticias>
        </Route>
        <Route exact path="/Administracion/Noticia">
          <AgregarNoticia
            categorias={listadoCategorias}
            setRecargarNoticias={setRecargarNoticias}
          ></AgregarNoticia>
        </Route>
        <Route
          exact
          path="/Administracion/Noticia/:id"
          render={(props) => {
            const idNoticia = props.match.params.id;
            const noticiaSeleccionada = listadoNoticias.find(
              (noticia) => noticia._id === idNoticia
            );
            return (
              <EditarNoticia
                noticia={noticiaSeleccionada}
                categorias={listadoCategorias}
                setRecargarNoticias={setRecargarNoticias}
              ></EditarNoticia>
            );
          }}
        ></Route>
        <Route exact path="/Administracion/Categorias/">
          <ListadoCategorias
            categorias={listadoCategorias}
            setRecargarCategorias={setRecargarCategorias}
          ></ListadoCategorias>
        </Route>
        <Route exact path="/Administracion/Categoria">
          <AgregarCategoria
            setRecargarCategorias={setRecargarCategorias}
          ></AgregarCategoria>
        </Route>
        <Route
          exact
          path="/Administracion/Categoria/:id"
          render={(props) => {
            const idCategoria = props.match.params.id;
            const categoriaSeleccionada = listadoCategorias.find(
              (categoria) => categoria._id === idCategoria
            );
            return (
              <EditarCategoria
                categoria={categoriaSeleccionada}
                setRecargarCategorias={setRecargarCategorias}
              ></EditarCategoria>
            );
          }}
        ></Route>
        <Route exact path="/login/Ingresar">
          <Ingresar usuarios={usuarios} sesion={setSesion}></Ingresar>
        </Route>
        <Route exact path="/login/Registro">
          <Registro setRecargarUsuarios={setRecargarUsuarios} />
        </Route>
        <Route exact path="/principal/Nosotros">
          <Nosotros></Nosotros>
        </Route>
        <Route exact path="/administracion/Usuarios">
          <ListadoUsuarios
            usuario={listadoUsuarios}
            setRecargarUsuarios={setRecargarUsuarios}
          ></ListadoUsuarios>
        </Route>
        <Route
          exact
          path="/Administracion/Usuario/:id"
          render={(props) => {
            const idUsuario = props.match.params.id;
            const usuarioSeleccionado = listadoUsuarios.find(
              (usuario) => usuario._id === idUsuario
            );
            return (
              <EditarUsuarios
                usuario={usuarioSeleccionado}
                setRecargarUsuarios={setRecargarUsuarios}
              ></EditarUsuarios>
            );
          }}
        ></Route>
        <Route exact path="/administracion/Administrar">
          <Administrar></Administrar>
        </Route>
        <Route exact path="*">
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer categorias={listadoCategorias}></Footer>
    </Router>
  );
}

export default App;
