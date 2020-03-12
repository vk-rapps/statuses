import React from 'react';
import PropTypes from 'prop-types';
import { Card, Cell, Avatar } from '@vkontakte/vkui';

const StatusCard = ({ text, owner, onOpen }) => {
    return (
        <Card mode="shadow" size="l" style={{padding: 10, marginBottom: 15}} onClick={onOpen}>
            <Cell
                expandable
                multiline
                description={text}
                before={
                    <Avatar size={52} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" />
                }
            >
                {owner.name}
            </Cell>
        </Card>
    )
};

StatusCard.propTypes = {
    text: PropTypes.string.isRequired,
    owner: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    }),
    onOpen: PropTypes.func,
};

export default StatusCard;
