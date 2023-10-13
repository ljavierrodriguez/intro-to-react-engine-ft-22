import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ComponentA = () => {
    return (
        <>
            <h1>Componente A</h1>
            <Saludo name={"Luis"} edad={40} activo={false} />
            <Saludo name={"Demian"} edad={27} activo={true} />
            <Saludo name={"Paloma"} edad={29} activo={false} />
            <Saludo name={"Cristian"} edad={19} activo={true} />
        </>
    )
}

const ComponentB = (props) => {
    return (
        <Fragment>
            <h1>{props.title}</h1>
            <h5>Subcomponent B</h5>
        </Fragment>
    )
}

function Saludo({ name, edad, activo }) { // destructuring  props = { name, edad, activo }
    return (
        <h1>Hola, {name}, tengo {edad} años de edad. activo: {activo ? "si" : "No"}</h1>
    )
}

Saludo.propTypes = {
    name: PropTypes.string,
    edad: PropTypes.number,
    activo: PropTypes.bool
}

export const App = () => {
    return (
        <>
            <ComponentA />
            <ComponentB title={"Component B"} />
        </>
    )
}

