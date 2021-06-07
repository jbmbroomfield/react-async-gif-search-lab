import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
    state = {
        gifs: [],
    }

    search = searchTerm => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(json => {
            const data = json.data
            this.setState({
                gifs: data.slice(0,3).map(result => result.images.original.url)
            })
        })
    }

    render() {
        const state = this.state
        return (
            <div>
                <GifSearch search = {this.search} />
                <GifList gifs = {state.gifs} />
            </div>
        )
    }
}