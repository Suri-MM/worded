import React from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import About from './components/About/About';
import { setSearchField } from './actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      data: '',
      site: 'home'
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => {
      this.setState({ data });
    });
  }

  onSiteChange = (site) => {
    if(site === 'about'){
      this.setState({ site: 'about'});
    }
    else if(site === 'home'){
      this.setState({ site: 'home'});
    }
  }

  render() {
    const { searchField, onSearchChange } = this.props;
    const words = this.state.data;

    const filteredWords = Object.values(words).filter((index) =>{
      return index.word.toLowerCase().includes(searchField.toLowerCase()) 
    });

    return (
        <div className="App">
          <Logo className = "head"/>
          {
            this.state.site === 'home' ?
            <div>
              <SearchBox onSiteChange = { this.onSiteChange } searchChange = { onSearchChange } site = { this.state.site }/>
              <CardList className = "cardlist" data = { filteredWords }/>
            </div>
            :
            <div>
               <SearchBox onSiteChange = { this.onSiteChange } searchChange = { onSearchChange } site = { this.state.site }/>
              <About onSiteChange = { this.onSiteChange }/>
            </div>
          }
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
