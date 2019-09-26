import React from 'react'

const Boiling = ({temperatureVal,divRef}) => {
    let oBox = null

    return(
        <div    style={{color: temperatureVal >= 100 ? '#f00' : '#000',transition: '1s'}}
                //ref={ el => oBox = el}
                ref={divRef}>
                Boiling</div>
    )
}

export default Boiling