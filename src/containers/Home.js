import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Panel, PanelHeader, PanelHeaderButton, Group, Header, List, Cell, Avatar, Div, Spinner } from '@vkontakte/vkui';

import FireEvent from '../utils/FireEvent';
import StatusCard from '../components/StatusCard';

import Icon24AddOutline from '@vkontakte/icons/dist/24/add_outline';

const Home = ({id, navigator}) => {
    const isStatusesLoaded = useSelector((store) => store.statuses.loaded);
    const statuses = useSelector((store) => store.statuses.list);

    return (
        <Panel id={id}>
            <PanelHeader
                left={
                    <PanelHeaderButton onClick={() => navigator.goForward("create")}>
                        <Icon24AddOutline fill="var(--accent)"/>
                    </PanelHeaderButton>
                }
            >
                Статусы
            </PanelHeader>
            <Group>
                <List>
                    <Cell
                        multiline
                        expandable
                        onClick={() => FireEvent("https://vk.com/this.state.user")}
                        before={<Avatar
                            src="https://sun1-93.userapi.com/impf/c855628/v855628786/1e3260/-TOChKtqItU.jpg?size=400x0&quality=90&sign=8f8a99a368e53f279961cb7e7e2a6b07"
                            size={64}/>}
                        description="Работаю за латте ☕ | По вопросам, связанным с ВКонтакте: vk.cc/help"
                    >
                        Степан Новожилов
                    </Cell>
                </List>
            </Group>
            <Group header={<Header mode="secondary">Популярные статусы</Header>}>
                {isStatusesLoaded ? (
                    <List>
                        <Div>
                            {statuses.map((status) => (
                                <StatusCard
                                    key={status.id}
                                    {...status}
                                />
                            ))}
                        </Div>
                    </List>
                ) : (
                    <Spinner />
                )}
            </Group>
        </Panel>
    );
};

Home.propTypes = {
    id: PropTypes.string.isRequired,
    navigator: PropTypes.any,
};

export default Home;
