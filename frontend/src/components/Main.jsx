import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Contacts from './Contacts';
import Gallery from './Gallery';
import './style.css';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            activePageId: 0,
            pages: [
                { pageId: 0, name: 'Главная', path: '/'},
                { pageId: 1, name: 'Галерея', path: '/gallery' },
                { pageId: 2, name: 'Контакты', path: '/contacts' },
            ],
        };

        this.setPage = this.setPage.bind(this);
    }

    setPage(pageId) {
        this.setState({
            activePageId: pageId,
        });
    }

    render() {

        return (
            <Router>
                <div className={'page'}>
                    <Header
                        pages={this.state.pages}
                        setPage={this.setPage}
                    />
                    <Switch>

                        <Route path={this.state.pages[0].path} exact render={() => {
                            return (
                                <Content />
                            );
                        }}/>

                        <Route path={this.state.pages[1].path} render={() => {
                            return (
                                <Gallery />
                            );
                        }} />

                        <Route path={this.state.pages[2].path} render={() => {
                            return (
                                <Contacts />
                            );
                        }} />

                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}