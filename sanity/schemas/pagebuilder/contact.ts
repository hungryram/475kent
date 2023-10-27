import { defineType, defineField } from "sanity";
import {copyPaste} from '@superside-oss/sanity-plugin-copy-paste'

export default defineType({
  title: 'Contact Page',
  name: 'contactPage',
  type: 'object',
  fields: [
    defineField(copyPaste),
    {
      title: 'Content',
      name: 'content',
      type: 'contentEditor'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'Hide Contact Information',
      name: 'hideContact',
      type: 'boolean'
    },
    {
      title: 'Form Builder',
      name: 'formBuilder',
      type: 'formBuilder'
    },
    {
      title: 'ID',
      name: 'id',
      type: 'string'
  },
    {
      title: 'Color Options',
      name: 'background',
      type: 'backgroundOptions',
    }
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({ content }) {
      const hasContent = content && content[0]?.children?.length > 0;

      return {
        title: hasContent ? content[0].children[0].text : 'Contact Section',
      };
    },
  },
})