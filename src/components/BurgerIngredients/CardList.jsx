import React from 'react';
// import {  } from '@ya.praktikum/react-developer-burger-ui-components';
import Style from './CardList.module.css';
import Card from "./Card.jsx";
import data from '../Utils/data';
import PropTypes from 'prop-types';
import {propType} from "../Utils/propTypes";


const CardList = (props) => {
    const newArr = data.filter(el => (el.type === props.type))
    return (
        <div id={props.type} >
            <h2 className={`${Style.titleList}
                    pt-8 text text_type_main-default`}>{props.text}</h2>
            <ul className={`${Style.columns} pl-1`}>
                {newArr.map(element => (
                    <Card key={element._id} {...element}/>
                ))}
            </ul>
        </div>
    )
}
CardList.propTypes = {
    props: PropTypes.arrayOf(propType.isRequired)
}
export default CardList;
