import React from 'react';
import CloseIco from '../Ico/Close';
import Messages from '../Messages/Messages';
import NotMessages from '../NotMessages/NotMessages';
import {
  BtnViewsAll,
  Container,
  ContentViewsAll,
  DivisionLine,
  Fragment,
} from './notifications.styled';

function Notifications({
  setIsVisible,
  HanldenViewsAll,
  dataNotifications,
}) {
  return (
    <Container>
      {dataNotifications.length > 0 ? (
        <React.Fragment>
          <Fragment>
            {dataNotifications?.slice(0, 5).map((notification, key) => (
              <Messages key={key} title={notification.title} data={'1/03/2022 - 19:33'} />
            ))}
            <DivisionLine />
            <ContentViewsAll>
              <BtnViewsAll onClick={HanldenViewsAll}>VER TODOS</BtnViewsAll>
            </ContentViewsAll>
          </Fragment>
          <CloseIco setIsVisible={setIsVisible} />
        </React.Fragment>
      ) : (
        <Fragment>
          <NotMessages />
        </Fragment>
      )}
    </Container>
  );
}

export default Notifications;
