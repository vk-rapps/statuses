import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Group, Header, List, Cell, Avatar } from '@vkontakte/vkui';

import FireEvent from '../utils/FireEvent';

const Home = ({ id }) => {
    return (
        <Panel id={id}>
            <PanelHeader>
                Статусы
            </PanelHeader>
            <Group>
                <List>
                    <Cell
                        multiline
                        expandable
                        onClick={() => FireEvent("https://vk.com/this.state.user")}
                        before={<Avatar src="https://sun1-93.userapi.com/impf/c855628/v855628786/1e3260/-TOChKtqItU.jpg?size=400x0&quality=90&sign=8f8a99a368e53f279961cb7e7e2a6b07" size={64} />}
                        description="Работаю за латте ☕ | По вопросам, связанным с ВКонтакте: vk.cc/help"
                    >
                        Степан Новожилов
                    </Cell>
                </List>
            </Group>
            <Group header={<Header mode="secondary">Популярные статусы</Header>}>
                <List>
                </List>
            </Group>
        </Panel>
    );
};

Home.propTypes = {
    id: PropTypes.string.isRequired,
    navigator: PropTypes.any,
};

export default Home;
