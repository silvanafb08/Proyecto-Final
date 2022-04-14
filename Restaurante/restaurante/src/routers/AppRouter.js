import React from 'react'
import Navigation from '../components/Navigation'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import Layout from '../components/layouts/Layout'
import MenuPage from '../pages/MenuPage'
import PrivateRoute from './PrivateRoute'
import AyudaAdmiPage from '../pages/AyudaAdmiPage'
import AyudaSeguridadPage from '../pages/AyudaSeguridaPage'
import AyudaRestaurantePage from '../pages/AyudaRestaurantePage'
import AyudaLicoresPage from '../pages/AyudaLicoresPage'
import AyudaVinosPage from '../pages/AyudaVinosPage'
import MenuSeguridad from '../pages/MenuSeguridad'
import UsuarioPage from '../pages/UsuarioPage'
import UsuarioAgregar from '../pages/UsuarioAgregar'
import ConsecutivoPage from '../pages/ConsecutivoPage'
import ConsecutivoAgregar from '../pages/ConsecutivoAgregar'
import PaisPage from '../pages/PaisPage'
import PaisAgregar from '../pages/PaisAgregar'
import CajaPage from '../pages/CajaPage'
import RolPage from '../pages/RolPage'
import RolAgregar from '../pages/RolAgregar'
import UnidadPage from '../pages/UnidadPage'
import UnidadAgregar from '../pages/UnidadAgregar'
import InformacionPage from '../pages/InformacionPage'
import Ejemplo from '../pages/Ejemplo'
export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/menu" component={MenuPage}/>
            
            <Route exact path="/ayudaAdmi" component={AyudaAdmiPage}/>
            <Route exact path="/ayudaRestaurante" component={AyudaRestaurantePage}/>
            <Route exact path="/ayudaLicores" component={AyudaLicoresPage}/>
            <Route exact path="/ayudaVino" component={AyudaVinosPage}/>
            <Route exact path="/ayudaSeguridad" component={AyudaSeguridadPage}/>
            
            
            
            <Route exact path="/menuSeguridad/usuario" component={UsuarioPage}/>
            <Route exact path="/menuSeguridad/consecutivo" component={ConsecutivoPage}/>
            <Route exact path="/menuSeguridad/pais" component={PaisPage}/>
            <Route exact path="/menuSeguridad/caja" component={CajaPage}/>
            <Route exact path="/menuSeguridad/rol" component={RolPage}/>
            <Route exact path="/menuSeguridad/unidad" component={UnidadPage}/>

            

            <Route exact path="/menuSeguridad/usuario/agregar" component={UsuarioAgregar}/>
            <Route exact path="/menuSeguridad/consecutivo/agregar" component={ConsecutivoAgregar}/>
            <Route exact path="/menuSeguridad/pais/agregar" component={PaisAgregar}/>
            <Route exact path="/menuSeguridad/rol/agregar" component={RolAgregar}/>
            <Route exact path="/menuSeguridad/unidad/agregar" component={UnidadAgregar}/>



            <Route exact path="/menuSeguridad" component={MenuSeguridad}/>
            <Route exact path="/informacion" component={InformacionPage}/>

            <Route exact path="/ejemplo" component={Ejemplo}/>

            
            <Route exact path="*" component={NotFoundPage}/>
            

            <Navigation/>
            
        </Switch>
        </Layout>

    </Router>
  )
}
