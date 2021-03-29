import React from 'react';
import { Menu, Tab, Transition } from 'semantic-ui-react';
import SidebarPerm from '../../components/SidebarPerm';

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
                            Some Info Text Some Info Text Some Info Text Some Info Text Some Info
                            Text Some Info Text Some Info Text Some Info Text
                            <br />
                            Some Info Text Some Info Text Some Info Text Some Info Text Some Info
                            Text Some Info Text Some Info Text Some Info Text Some Info Text Some
                            Info Text
                            <br />
                            Some Info Text Some Info Text Some Info Text Some Info Text Some Info
                            Text Some Info Text Some Info Text Some Info Text Some Info Text
                            <br />
                            Some Info Text Some Info Text Some Info Text Some Info Text Some Info
                            Text Some Info Text Some Info Text Some Info Text
                            <br />
                            Some Info Text Some Info Text Some Info Text Some Info Text Some Info
                            Text Some Info Text Some Info Text
                            <br />
                            Some Info Text Some Info Text Some Info Text Some Info Text Some Info
                            Text Some Info Text
                            <br />
                            Some Info Text Some Info Text Some Info Text Some Info Text Some Info
                            Text
                            <br />
                            Some Info Text Some Info Text Some Info Text Some Info Text
                            <br />
                            Some Info Text Some Info Text Some Info Text
                            <br />
                            Some Info Text Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                            <br />
                            Some Info Text
                        </Tab.Pane>
                    </Transition>
                ),
            },
            {
                menuItem: (
                    <Menu.Item
                        style={{ color: 'lightgrey' }}
                        name="notable players"
                        active={activeItem === 'notable players'}
                        onClick={this.handleItemClick}
                        color="teal"
                    />
                ),
                pane: (
                    <Transition
                        animation="fade left"
                        duration={125}
                        visible={activeItem === 'notable players'}
                        unmountOnHide={true}
                    >
                        <Tab.Pane style={{ backgroundColor: '#00141b', color: 'lightgrey' }}>
                            Some Info Text Some Info Text
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
                            Some Info Text Some Info Text Some Info Text
                        </Tab.Pane>
                    </Transition>
                ),
            },
            {
                menuItem: (
                    <Menu.Item
                        style={{ color: 'lightgrey' }}
                        name="Resources"
                        active={activeItem === 'Resources'}
                        onClick={this.handleItemClick}
                        color="teal"
                    />
                ),
                pane: (
                    <Transition
                        animation="fade left"
                        duration={125}
                        visible={activeItem === 'Resources'}
                        unmountOnHide={true}
                    >
                        <Tab.Pane style={{ backgroundColor: '#00141b', color: 'lightgrey' }}>
                            Some Info Text Some Info Text Some Info Text Some Info Text
                            <br />
                            <a href="https://en.wikipedia.org/wiki/Chess">Hey it's a link</a>
                        </Tab.Pane>
                    </Transition>
                ),
            },
        ];
        return (
            <div>
                <SidebarPerm id="sidebarneedsstyle">
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
                </SidebarPerm>
            </div>
        );
    }
}

export default Info;
