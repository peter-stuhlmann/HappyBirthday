import React, { Component } from 'react'

export default class SingleBalloon extends Component {
    state = { renderBalloon: true }

    componentDidMount() {
        this.setState({ renderBalloon: false })
    }

    render() {
        return (
            this.state.renderBalloon && <div className="bln-1" />
        )
    }
}
