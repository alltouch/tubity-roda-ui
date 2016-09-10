import React from 'react';
import './result.scss';

let { Component, PropTypes } = React;

export default class Result extends Component {

    render() {
        let { resultUrl } = this.props;
        return (
            <div className="result">
                <h2>Your short url</h2>
                <div>
                    <span className="result-text">{resultUrl}</span>
                    <a href={resultUrl} className="result-link">open</a>
                </div>
            </div>
        );
    }
}

Result.propTypes = {
    resultUrl: PropTypes.string
};
