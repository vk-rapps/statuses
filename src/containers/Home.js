import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Group, Header, List, Cell, Avatar, Div } from '@vkontakte/vkui';

import FireEvent from '../utils/FireEvent';
import StatusCard from "../components/StatusCard";

const Home = ({ id }) => {
    const [ statuses, setStatuses] = useState([
      {
        id: 1,
        text: 'Привет, мир!',
        installed: 123,
        owner_name: 'Super Mem',
        owner_id: 1,
        mine: false,
      },
      {
        id: 2,
        text: 'Нормально делай — нормально будет',
        installed: 9,
        owner_name: 'Big Boy',
        owner_id: 2,
        mine: false
      },
      {
        id: 3,
        text: 'Я мою посуду',
        owner_name: 'Skinny Dude',
        installed: 95,
        owner_id: 65,
        mine: true
      },
      {
        id: 4,
        text: 'Hey, b0ss...',
        installed: 30,
        owner_name: 'Alexander Deimos',
        owner_id: 65,
        mine: true
      },
      {
        id: 5,
        text: 'Mac better then Windows. Change my mind!',
        installed: 121231233,
        owner_name: 'Alexander Deimos',
        owner_id: 65,
        mine: true
      }
    ]);



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
                  <Div>
                    {statuses.map(status => <StatusCard key={status.id} {...status}/>)}
                  </Div>
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
