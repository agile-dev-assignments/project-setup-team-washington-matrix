import React from 'react';
import { Menu, Tab, Transition } from 'semantic-ui-react';
import Layout from '../../components/Layout';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'history',
        };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        const panes = [
            {
                menuItem: (
                    <Menu.Item
                        style={{ color: 'lightgrey' }}
                        name="history"
                        active={activeItem === 'history'}
                        onClick={this.handleItemClick}
                        color="teal"
                    />
                ),
                pane: (
                    <Transition
                        animation="fade left"
                        duration={125}
                        visible={activeItem === 'history'}
                        unmountOnHide={true}
                    >
                        <Tab.Pane style={{ backgroundColor: '#00141b', color: 'lightgrey' }}>
                            <iframe
                                id="history"
                                title="History"
                                width="1250"
                                height="1000"
                                src="https://en.wikipedia.org/wiki/History_of_chess"
                            ></iframe>
                        </Tab.Pane>
                    </Transition>
                ),
            },
            {
                menuItem: (
                    <Menu.Item
                        style={{ color: 'lightgrey' }}
                        name="Player Rankings"
                        active={activeItem === 'Player Rankings'}
                        onClick={this.handleItemClick}
                        color="teal"
                    />
                ),
                pane: (
                    <Transition
                        animation="fade left"
                        duration={125}
                        visible={activeItem === 'Player Rankings'}
                        unmountOnHide={true}
                    >
                        <Tab.Pane style={{ backgroundColor: '#00141b', color: 'lightgrey' }}>
                            <iframe
                                id="ratings"
                                title="Ratings"
                                width="1250"
                                height="825"
                                src="https://ratings.fide.com/top.phtml?list=men"
                            ></iframe>
                        </Tab.Pane>
                    </Transition>
                ),
            },
            {
                menuItem: (
                    <Menu.Item
                        style={{ color: 'lightgrey' }}
                        name="Recent Events"
                        active={activeItem === 'Recent Events'}
                        onClick={this.handleItemClick}
                        color="teal"
                    />
                ),
                pane: (
                    <Transition
                        animation="fade left"
                        duration={125}
                        visible={activeItem === 'Recent Events'}
                        unmountOnHide={true}
                    >
                        <Tab.Pane style={{ backgroundColor: '#00141b', color: 'lightgrey' }}>
                            <iframe
                                id="recentEvents"
                                title="Recent Events"
                                width="1250"
                                height="1000"
                                src="https://theweekinchess.com/chessnews/events"
                            ></iframe>
                        </Tab.Pane>
                    </Transition>
                ),
            },
        ];
        return (
            <div>
                <Layout id="sidebarneedsstyle">
                    <Tab
                        className="univbackground"
                        style={{ height: '700px' }}
                        grid={{ paneWidth: 13, tabWidth: 2 }}
                        menu={{
                            inverted: true,
                            fluid: true,
                            vertical: true,
                            tabular: true,
                            pointing: true,
                            menuPosition: 'left',
                        }}
                        renderActiveOnly={false}
                        panes={panes}
                    />
                </Layout>
            </div>
        );
    }
}

export default Info;
