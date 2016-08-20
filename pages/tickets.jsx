import React from 'react'
import BoxPage from '../components/box-page'
import ticketsTemplate from './_tickets.pug'
import icon from '!svg-inline!../images/ticket.svg'

export default () =>
  <BoxPage icon={icon} title="Tickets" inverse>
    <div dangerouslySetInnerHTML={{ __html: ticketsTemplate() }} />
  </BoxPage>
