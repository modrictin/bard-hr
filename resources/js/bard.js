import {HR} from './HR'

Statamic.$bard.addExtension(() =>  HR)
Statamic.$bard.buttons((buttons) => {
    buttons.push({
        name: 'horizontalRuler',
        text: __('Horizontal Ruler'),
        args: {},
        html: '&mdash;',
        command: (editor) => editor.chain().focus().addHorizontalRuler().run(),
    })
})
