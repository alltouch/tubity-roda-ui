import React from 'react';
import axios from 'axios';
import './main.scss';
import Form from './form';
import Result from './result';
import Loading from './loading';


let { Component } = React;

export default class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            resultUrl: '',
            loading: false,
            message: ''
        };
    }
    onSubmit(url){
        this.setState({
            loading: true,
            resultUrl: '',
            message: ''
        });
        this.loadShortUrl(url);
    }

    loadShortUrl(url){
        axios
            .post('http://localhost:9990/s', { url })
            .then(
                (xhr) => this.onResponse(xhr.data),
                (error) => this.onError(error)
            );
    }

    onResponse(data){
        this.setState({
            loading: false,
            resultUrl: data.shorten_url
        });
    }

    onError(){
        this.setState({
            loading: false,
            message: 'Connection problems'
        });
    }

    render(){
        let onSubmit = (event) => this.onSubmit(event);
        let { loading, resultUrl, message } = this.state;

        return (
            <div className="app">
                <div className="blue-section">
                    <Form onSubmit={onSubmit} />
                </div>

                {loading ? <Loading /> : null}
                {resultUrl ? <Result resultUrl={resultUrl} /> : null}

                <div className="message">{message}</div>

            </div>
        );
    }
}
