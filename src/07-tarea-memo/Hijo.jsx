
import React from "react";


// Aqui con memo () memorizamos el componete para evitar que cambie si sus properties no cambian
export const Hijo = React.memo( ({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
