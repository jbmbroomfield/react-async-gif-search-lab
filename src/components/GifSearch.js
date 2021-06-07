import React from 'react'

export default class GifSearch extends React.Component {
    state = {
        searchTerm: "",
    }

    handleChange = event => {
        const target = event.target
        this.setState({
            [target.name]: target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const state = this.state
        const props = this.props
        props.search(state.searchTerm)
    }

    render() {
        const state = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="searchTerm" value={state.searchTerm} onChange={this.handleChange} />
                <input type="submit" value="Find Gifs" />
            </form>
        )
    }
}