import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, Card, Group, Header, Div, Cell, Avatar, Button, UsersStack } from '@vkontakte/vkui';

import Icon16ReplyOutline from '@vkontakte/icons/dist/16/reply_outline';
import Icon16Done from '@vkontakte/icons/dist/16/done';

const Status = ({ id, navigator }) => {
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => navigator.goForward("home")} />}
            >
                Статус #1
            </PanelHeader>
            <Group>
                <Div>
                    <div style={{
                        backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
                        height: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: '6px',
                        borderRadius: 12,
                        flexDirection: 'column',
                        position: 'relative'
                    }}>
                        <div style={{ color: 'white', fontSize: 22 }}>
                            Мы любим денежкину
                        </div>
                        <div style={{ position: 'absolute', bottom: 6 }}>
                            <UsersStack
                                photos={[
                                    'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1'
                                ]}
                                style={{ color: "#fff" }}
                            >
                                Игорь Foxik
                            </UsersStack>
                        </div>
                    </div>
                </Div>
            </Group>
            <Group header={<Header mode="secondary">Предпросмотр</Header>}>
                <Div style={{ paddingBottom: 5 }}>
                    <Card mode="shadow" size="l" style={{padding: 10, marginBottom: 15}}>
                        <Cell
                            multiline
                            before={<Avatar size={52} src="https://pp.userapi.com/c836333/v836333553/5b137/tEJNQNigU80.jpg" />}
                            description="Мы любим денежкину"
                        >
                            Ирина Денежкина
                        </Cell>
                    </Card>
                </Div>
            </Group>
            <Group>
                <Div style={{ display: 'flex', marginTop: 0 }}>
                    <Button
                        stretched
                        size="l"
                        mode="secondary"
                        before={<Icon16ReplyOutline />}
                    >
                        Поделиться
                    </Button>
                    <Button
                        stretched
                        size="l"
                        style={{ marginLeft: 8 }}
                        before={<Icon16Done />}
                    >
                        Установить
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
};

Status.propTypes = {
    id: PropTypes.string.isRequired,
    navigator: PropTypes.any,
};

export default Status;
