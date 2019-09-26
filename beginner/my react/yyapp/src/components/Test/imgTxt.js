import React,{Fragment} from 'react'
import PropTypes from 'prop-types'

let style = {
    ul: {
        float: 'left'
    },
    ul2: {
        float: 'right'
    },
    div: {
        overflow: 'hidden',
        border: '1px #000 solid'
    }
}

const Txt = (props) => (
    <Fragment>
        <ul style={style.ul2}>
            <li style={{color: props.flag ? '#f00' : ''}}>{props.txtContent}</li>
            <li>{props.txtId}</li>
            <li>{props.txtYear}</li>
        </ul>
    </Fragment>
)
const ImgTxt = (props) => (
    <Fragment>
        <div style={style.div}>
            <p>imgTxt：</p>
            <ul style={style.ul}>
                <li><img src={props.imgBig} alt=""/>{props.imgBig}</li>
                <li><img src={props.imgMedium} alt=""/>{props.imgMedium}</li>
                <li><img src={props.imgSmall} alt=""/>{props.imgSmall}</li>
            </ul>
            <Txt
                txtContent={props.txt.content}
                txtId={props.txt.id}
                txtYear={props.txt.year}
                flag={props.txt.flag}
            />
        </div>
    </Fragment>                                                                                                                                                                                                                                                                          
)

ImgTxt.propTypes = {
    imgBig: PropTypes.string,
    imgSmall: PropTypes.string,
    imgMedium: PropTypes.string,
    txt: PropTypes.object
}

export default ImgTxt