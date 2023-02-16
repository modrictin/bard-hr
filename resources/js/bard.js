import HR from './HR'
import HRButton from './HRButton'

Statamic.$bard.extend(() => new HR())
Statamic.$bard.buttons((buttons) => {
    buttons.push({
        name: 'horizontal_ruler',
        text: __('Horizontal Ruler'),
        command: 'horizontal_ruler',
        args: {},
        html: '&mdash;',
        component: HRButton,
    })
})
