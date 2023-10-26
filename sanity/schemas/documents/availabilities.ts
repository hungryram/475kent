import { defineType } from "sanity";

export default defineType({
    title: 'Availabilities',
    name: 'availabilities',
    type: 'document',
    fields: [
        {
            title: 'Availabilities',
            name: 'avail',
            type: 'array',
            of: [
                {
                    title: 'Availabilities',
                    name: 'avail',
                    type: 'object',
                    fields: [
                        {
                            title: 'Residence',
                            name: 'residence',
                            type: 'string',
                         },
                        {
                            title: 'Bed',
                            name: 'bed',
                            type: 'string',
                        },
                        {
                            title: 'Bath',
                            name: 'bath',
                            type: 'string',
                        },
                        {
                            title: 'Price',
                            name: 'price',
                            description: 'Include dollar sign',
                            type: 'string',
                        },
                        {
                            title: 'SF',
                            name: 'sf',
                            type: 'string',
                        },
                        {
                            title: 'Exposure',
                            name: 'exposure',
                            type: 'string',
                        },
                        {
                            title: 'Move in Date',
                            name: 'moveInDate',
                            type: 'string',
                        },
                        {
                            title: 'Status',
                            name: 'status',
                            type: 'string',
                            options: {
                                list: [
                                    {title: 'Available', value: 'AVAILABLE'},
                                    {title: 'In Contract', value: 'IN CONTRACT'},
                                    {title: 'Sold', value: 'SOLD'},
                                ]
                            }
                        },
                        {
                            title: 'View Listing Link',
                            name: 'viewListing',
                            type: 'url',
                        },
                        {
                            title: 'Image',
                            type: 'image',
                            name: 'image',
                            description: 'Proper image file types .jpg .png',
                        },
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'avail'
        },
        prepare() {
            return {
                title: 'Edit Availabilities & Fact Sheet'
            }
        }
    }
})