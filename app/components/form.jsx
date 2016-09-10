import React from 'react';
import './form.scss';

let { Component, PropTypes } = React;

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            errorMessage: ''
        };
    }

    render() {
        let { inputValue, errorMessage } = this.state;
        let { onSubmit } = this.props;
        let onChange = (event) => {
            this.setState({
                inputValue: event.target.value
            })
        };
        let onFormSubmit = (event) => {
            event.preventDefault();

            if (!inputValue.match(/^https?:\/(\/[^\/]+)+\/?$/)) {
                this.setState({
                    errorMessage: 'Please type correct url'
                });
                return;
            }

            this.setState({
                errorMessage: ''
            });

            onSubmit(inputValue);
        };

        return (
            <form className="form" onSubmit={onFormSubmit}>
                <h1>Simplify your links</h1>
                <div className="input-container">
                    <input placeholder="Your original url here" value={inputValue} onChange={onChange}/>
                    <button>Shorten url</button>
                </div>
                <div className="error-message">
                    {errorMessage}
                </div>
            </form>
        );
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func
};
