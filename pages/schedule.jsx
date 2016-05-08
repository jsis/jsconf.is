import React from 'react'
import BoxPage from '../components/box-page'
import icon from '!svg-inline!../images/schedule.svg'

export default () =>
  <BoxPage icon={icon} title="Schedule">
    <p>
      <strong>Note:</strong> This schedule is tentative and will change
      without notice leading up to the event.
    </p>

    <h2>Wednesday August 24, 2016</h2>
    <dl className="Agenda">
      <dt className="Agenda-term">09:00 - 17:00</dt>
      <dd className="Agenda-description">
        Full day workshops with{' '}
        <a href="/speakers/brian-holt">Brian Holt</a> &{' '}
        <a href="/speakers/vitaly-friedman">Vitaly Friedman</a> -{' '}
        <a href="https://ti.to/svef/2016-workshops" target="_blank">Buy workshop tickets</a>
      </dd>
      <dt className="Agenda-term">20:00 - 23:00</dt>
      <dd className="Agenda-description">Welcome reception and badge pick-up</dd>
    </dl>

    <h2>Thursday August 25, 2016</h2>
    <dl className="Agenda">
      <dt className="Agenda-term">08:00 - 09:30</dt>
      <dd className="Agenda-description">Breakfast and badge pick-up</dd>
      <dt className="Agenda-term">09:30 - 10:00</dt>
      <dd className="Agenda-description">Opening JSConf Iceland 2016</dd>
      <dt className="Agenda-term">10:00 - 12:00</dt>
      <dd className="Agenda-description">Sessions in two tracks</dd>
      <dt className="Agenda-term">12:00 - 13:00</dt>
      <dd className="Agenda-description">Lunch</dd>
      <dt className="Agenda-term">13:00 - 17:30</dt>
      <dd className="Agenda-description">Sessions in two tracks</dd>
      <dt className="Agenda-term">19:00 - 23:00</dt>
      <dd className="Agenda-description">Party</dd>
    </dl>

    <h2>Friday August 26, 2016</h2>
    <dl className="Agenda">
      <dt className="Agenda-term">09:00 - 10:00</dt>
      <dd className="Agenda-description">Breakfast</dd>
      <dt className="Agenda-term">10:00 - 12:00</dt>
      <dd className="Agenda-description">Sessions in two tracks</dd>
      <dt className="Agenda-term">12:00 - 13:00</dt>
      <dd className="Agenda-description">Lunch</dd>
      <dt className="Agenda-term">13:00 - 17:30</dt>
      <dd className="Agenda-description">Sessions in two tracks</dd>
      <dt className="Agenda-term">17:30</dt>
      <dd className="Agenda-description">Closing remarks</dd>
      <dt className="Agenda-term">19:00 - 23:00</dt>
      <dd className="Agenda-description">Closing party</dd>
    </dl>

    <h2>Saturday August 27, 2016</h2>
    <dl className="Agenda">
      <dt className="Agenda-term">10:00</dt>
      <dd className="Agenda-description">Experience Iceland with friends and family</dd>
    </dl>

    <p>
      During conference hours, we'll do our best to accomodate your partner and kids.
      Child-care is provided at the venue, as well as day trips to see the local sights.
    </p>
  </BoxPage>
