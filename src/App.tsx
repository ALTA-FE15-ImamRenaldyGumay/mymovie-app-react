import { Component } from 'react'
import Navbar from './components/Navbar'
import Card from './components/card'
import CekTokoSebelah from './components/CekTokoSebelah'

export default class App extends Component {
  render() {
    return (
      <section>
        <div className="w-full h-full">
          <Navbar/>
          {/* <Card/> */}
          <CekTokoSebelah />
        </div>
      </section>
    )
  }
}
