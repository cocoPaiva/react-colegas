import React , {Component} from "react"
import Table from "./Tabla"
import Form from "./Form"
import Api from "./Api"

class App extends Component {
    state = {
        characters : 
           [
            //    {
            //      name: 'Charlie',
            //      job: 'Janitor',
            //    },
            //    {
            //      name: 'Mac',
            //      job: 'Bouncer',
            //    },
            //    {
            //      name: 'Dee',
            //      job: 'Aspring actress',
            //    },
            //    {
            //      name: 'Dennis',
            //      job: 'Bartender',
            //    },
             ]
   }

   removeCharacter = (index) => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

    render() {
      // const nombre = "coco"
      const {characters} = this.state

      return (
        // <div className="App"><h1>Hello, {nombre}!</h1></div>
        <>
        <div className="container" >
            <h4>Hello navegante</h4>
            <p>Sortea entre la lista de tus colegas a quien le quieres enviar una Lyrics como Gift:</p>
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit}></Form>
            <div>Sugerencias de wikipedia:</div>
            <Api></Api>
        </div>
        </>
      )
    }
  }

export default App
