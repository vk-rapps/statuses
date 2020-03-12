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
    const profile = useSelector((store) => store.profile.profile);

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
                        onClick={() => FireEvent(`https://vk.com/id${profile && profile.id}`)}
                        before={
                            <Avatar
                                src={profile && profile.photo_200}
                                size={64}
                            />
                        }
                        description={profile && profile.status}
                    >
                        {profile && profile.first_name} {profile && profile.last_name}
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
