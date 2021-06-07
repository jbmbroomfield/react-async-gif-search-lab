import React from 'react'

export default class GifList extends React.Component {
    render() {
        const props = this.props
        const gifs = props.gifs
        return (
            <div>
                <ul>
                    {gifs.map(gif => <li key={Math.floor(Math.random()*10000)}><img src={gif} alt="gift" /></li>)}
                </ul>
            </div>
        )
    }
}