import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    FormLayout,
    Textarea,
    FixedLayout,
    Div,
    Button
} from '@vkontakte/vkui';

import Icon24AddOutline from '@vkontakte/icons/dist/24/add_outline';

const Create = ({ id, navigator }) => {
    const [ text, setText ] = useState("");

    const publish = () => {
        const hideLoader = navigator.showLoader();
        setTimeout(() => hideLoader(), 2000);
    };

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => navigator.goForward("home")}/>}
            >
                Создать
            </PanelHeader>
            <FormLayout>
                <Textarea
                    top="Ваш статус"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </FormLayout>
            <FixedLayout vertical="bottom">
                <Div>
                    <Button
                        size="xl"
                        before={<Icon24AddOutline />}
                        onClick={publish}
                    >
                        Создать
                    </Button>
                </Div>
            </FixedLayout>
        </Panel>
    );
};

Create.propTypes = {
    id: PropTypes.string.isRequired,
    navigator: PropTypes.any,
};

export default Create;
