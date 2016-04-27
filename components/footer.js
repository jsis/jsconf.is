import React from 'react'
import filter from 'lodash/filter'
import classNames from 'classnames'
import { config } from '../config'
const { sponsors } = config

const SponsorBox = ({ website, name, image, imagePadding }) => (
  <a key={name} href={website} className="Sponsors-box" target="_blank">
    <div className={classNames('Sponsors-inner', !imagePadding && 'Sponsors-inner--no-border')}>
      <img
        src={require(`../images/sponsors/${image}`)}
        alt={name}
        title={name}
        className="Sponsors-image" />
    </div>
  </a>
)

export default () => (
  <div>
    <div className="SponsorFooter">
      <div className="row align-center text-center">
        <div className="column large-8 medium-10 small-12">
          <h1>Sponsors</h1>
          <p>
            The great companies below are supporting us in 2016 – Thank&nbsp;you!
          </p>
          <div className="Sponsors Sponsors--silver">
            {filter(sponsors, ['level', 'silver']).map(sponsor => <SponsorBox {...sponsor} />)}
          </div>
          <div className="Sponsors Sponsors--bronze">
            {filter(sponsors, ['level', 'bronze']).map(sponsor => <SponsorBox {...sponsor} />)}
          </div>
          <p className="text-center">
            We are currently offering sponsorship opportunities for JSConf Iceland.{' '}
            <a href="https://jsconfis.typeform.com/to/FN7Bla" className="BgLink">Contact us for details</a>.
          </p>
        </div>
      </div>
    </div>
    
    <footer className="Footer">
      <div className="row">
        <div className="column">
          <div className="SocialLinks">
            <a href="https://github.com/jsis/jsconf.is" className="SocialLinks-link SocialLinks-github">Github</a>
            <a href="https://twitter.com/jsconfis" className="SocialLinks-link SocialLinks-twitter">Twitter</a> 
          </div>
          JSConf Iceland welcomes everyone and defends you from harassment.{' '}
          <div className="FooterLinks">
            <a href="http://confcodeofconduct.com/" className="FooterLinks-link">Code of conduct</a>
            {' | '}
            <a href="http://eepurl.com/bO8F8X" className="FooterLinks-link">Mailing list</a>
            {' | '}
            <a href="https://jsconfis.typeform.com/to/FN7Bla" className="FooterLinks-link">Sponsor interest</a>
            {' | '}
            <a href="mailto:team@jsconf.is" className="FooterLinks-link">team@jsconf.is</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
)
