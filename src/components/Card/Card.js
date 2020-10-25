import React from 'react';
import './Card.css';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.toggleOnClick = this.toggleOnClick.bind(this);
        this.toggleMouseOver = this.toggleMouseOver.bind(this);
        this.toggleMouseLeave = this.toggleMouseLeave.bind(this);
        this.state = {
            isClicked: false,
            mouseOver: false,
            examples : {}
        }
    }

    componentDidMount() {
        const { word } = this.props;

        var url = 'https://api.wordnik.com/v4/word.json/' +
          word +  
          '/examples?includeDuplicates=false&useCanonical=false&limit=5&api_key=1vbz9zqcow82ujpti410s5zldyyy40calkfnpz1fk8l008mor';

        var req = new Request(url);
            fetch(req)
            .then(response => response.json())
            .then(data => {  
                let example = data.examples.map((values) => {
                    return values.text;
                }
                )
                const examples = [];
                example.forEach((item) =>{
                    if(!examples.includes(item)){
                        examples.push(item);
                    }
                })
                this.setState(Object.assign(this.state.examples, { examples }));
            }         
            ).catch(console.log);
        
    }

    toggleOnClick() {
        this.setState({ mouseOver: false });
        this.setState({ isClicked: !this.state.isClicked });
    }


    toggleMouseOver(){
        if(this.state.isClicked === false){
            this.setState({ mouseOver: true });    
        }
    }

    toggleMouseLeave(){
        this.setState({ mouseOver: false});
    }

    render() {
            const { word, definition, synonyms, imgUrl, comments } = this.props;  
        
            return (
            <div className = "card" onClick = { this.toggleOnClick } onMouseEnter = { this.toggleMouseOver } onMouseLeave = { this.toggleMouseLeave }>
            <h3 className = "word" >{ word }</h3>
                {
                    definition.map((data, i) => {
                    const typeOfWord = data[0];
                    const definition = data.slice(3);
                    let partsOfSpeech;

                    //Get the parts of speech
                    switch(typeOfWord) {
                        case 'v':
                            partsOfSpeech = 'verb';
                            break;
                        case 'j':
                            partsOfSpeech = 'adj';
                            break;
                        case 'n':
                            partsOfSpeech = 'noun';
                            break;
                        default:
                            break;
                    }

                    //Get the correct synonyms for the words
                    let synonym = synonyms.filter((data) => {
                        return data.includes(String(i + 1));
                    })

                    synonym = synonym.map(data => data.slice(3));
                    
                    return (
                        <div key = { i } className = "content" >
                            <div className = "defBox" >
                            {
                                (partsOfSpeech === 'verb') ? <h6 className="partsOfSpeechVerb">{ partsOfSpeech }</h6> : 
                                (partsOfSpeech === 'noun') ? <h6 className="partsOfSpeechNoun">{ partsOfSpeech }</h6> :
                                <h6 className="partsOfSpeechAdj" >{ partsOfSpeech }</h6> 
                            }
                            <p className = "definition" >{ definition }</p>
                            </div>
                            {
                                Object.keys(synonym).length !== 0 ? 
                                <p className = "synonymHead">Synonyms</p> :
                                <p></p>
                            }
                            <div className = "synonymCover">
                            {
                            synonym.map((synonym, i) => {
                                return <p key = { i } className = "synonyms" >{ synonym }</p>
                            })
                            }
                            </div>
                            
                        </div>
                    );
                    
                })   
                }
                {
                    this.state.mouseOver ? (
                        <div>
                            <p className = "comments">{ comments }</p>
                        </div>
                    )
                    :
                    <div>
                    </div>
                }
                {
                    this.state.isClicked ?  (
                    <div>
                        <p className = "comments">{ comments }</p>
                        <img src = { String(imgUrl) } alt = 'Word representation' className = "image" />
                        <p className = "exampleHead" >Examples</p>
                        <div className = "examples">
                        {
                            this.state.examples.map((example, i) => {
                                return (<div>
                                            <p key = { i } className = "example" >{ example }</p>
                                        </div>);
                            })
                        }
                        </div>
                    </div>
                    )
                    :
                    <div>
                    </div>
                }
        </div>
        )
        
    }
}

export default Card;