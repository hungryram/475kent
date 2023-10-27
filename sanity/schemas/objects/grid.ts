export default {
    title: 'Grid',
    name: 'grid',
    type: 'object',
    fields: [
        {
            title: 'Grid Block',
            name: 'gridBlock',
            type: 'array',
            of: [
                {
                    title: 'Blocks',
                    type: 'object',
                    fields: [
                        {
                            title: 'Content',
                            name: 'content',
                            type: 'contentEditor'
                        }
                    ],
                    // preview: {
                    //     select: {
                    //       content: 'content',
                    //     },
                    //     prepare({ content }: any) {
                    //       const hasContent = content && content[0]?.children?.length > 0;
                      
                    //       return {
                    //         title: hasContent ? content[0].children[0].text : 'Grid Content',
                    //       };
                    //     },
                    //   },
                }
            ],
        }
    ],
    // preview: {
    //     prepare() {
    //       return {
    //         title: 'Grid Column'
    //       };
    //     },
    //   },
}