import React from 'react';
import {Card, Cell, Avatar} from '@vkontakte/vkui';

const StatusCard = ({text, installed, owner_name, mine}) => {
  return (
      <Card mode='shadow'
            size='l'
            style={{padding: 10, marginBottom: 15}}
      >
        <Cell description={`Status text: ${text}`}
              multiline
              asideContent={installed}
              before={<Avatar size={52} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>
          {owner_name}
        </Cell>
      </Card>
  )
};


export default StatusCard;
