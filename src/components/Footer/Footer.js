/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';

const messages = defineMessages({
  brand: {
    id: 'footer.brand',
    defaultMessage: 'Arolla',
    description: 'Brand name displayed in footer',
  },
});

function Footer() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Link className={s.link} to="/">
          <FormattedMessage {...messages.brand} />
        </Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/privacy">Privacy</Link>
      </div>
    </div>
  );
}

export default injectIntl(withStyles(s)(Footer));
