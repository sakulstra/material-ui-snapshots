import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Hidden from 'material-ui/Hidden';
import Button from 'material-ui/Button';
import { Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Hidden', module).add('hidden', () => <Hidden lgUp><div>test</div></Hidden>)

storiesOf('MuiButton', module).add('raised', () => <Button raised onClick={action('clicked')}>
    ButtonText
</Button>)
