import Node from './base/Node'

export default class HR extends Node {
    get name() {
        return 'horizontal_ruler'
    }

    get schema() {
        return {
            inline: false,
            group: 'block',
            isBlock: true,
            parseDOM: [
                {tag: 'hr'},
            ],
            toDOM: () => {
                return ['hr']
            },
        }
    }

    commands({type}) {
        return () => (state, dispatch) => {
            const {selection} = state
            const position = selection.anchor

            const node = type.create()
            dispatch(state.tr.insert(position, node))

            return true;
        }
    }
}
