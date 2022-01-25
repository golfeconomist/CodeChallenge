import React, { createContext } from 'react';
export const Context = createContext({});

export default class ContextProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
            setCharacters: this.setCharacters
        }
    }

    setCharacters = (characters) => {
        this.setState({characters})
    };

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}