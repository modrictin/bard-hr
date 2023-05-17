const { Node } = Statamic.$bard.tiptap.core;

export const HR = Node.create({
    name: 'horizontalRuler',
    content: 'block*',
    group: 'block',
    parseHTML(){
        return [{ tag: 'hr' }]
    },
    renderHTML() {
        return ['hr',0];
    },
    addCommands() {
        return {
            addHorizontalRuler: () => ({ tr, dispatch }) => {
                dispatch(tr.replaceSelectionWith(this.type.create()));
                return true;
            }
        };
    },
});