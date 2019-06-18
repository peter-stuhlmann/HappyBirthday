import React, { Component } from 'react'

export default class SingleBalloon extends Component {

    render() {
        return (
            this.props.renderBalloon && <div className="bln-1" />
        )
    }
}
