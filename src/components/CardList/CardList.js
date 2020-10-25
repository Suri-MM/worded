import React from 'react';
import Card from '../Card/Card.js';
import './CardList.css';

const CardList = (props) => {
    const { data } = props;
    return (
        <div className="cardlist">
            {
                Object.keys(data).map((index, i) => {
                    return (
                            <Card className="card"                   
                                key = { i }
                                word = { data[index].word }
                                definition = { data[index].definition.map(data => {
                                    return data;
                                })}
                                synonyms = { data[index].synonyms.map(data => {
                                    return data;
                                })}
                                imgUrl = { data[index].img_url }
                                comments = { data[index].comments }
                            />
                    );
                })
            }
        </div>
    );
}

export default CardList;