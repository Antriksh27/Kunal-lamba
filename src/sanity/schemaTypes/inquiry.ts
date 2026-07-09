import { defineType, defineField } from 'sanity';

export const inquiry = defineType({
  name: 'inquiry',
  title: 'Inquiries',
  type: 'document',
  fields: [
    defineField({
      name: 'inquiryType',
      title: 'Inquiry Type',
      type: 'string',
      options: {
        list: [
          { title: 'Wedding / Event', value: 'wedding' },
          { title: 'Restaurant Consulting', value: 'consulting' },
          { title: 'Media / Press', value: 'media' },
        ],
      },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'timestamp',
      title: 'Received At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'new',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'In Progress', value: 'progress' },
          { title: 'Closed', value: 'closed' },
        ],
      },
    }),
    defineField({
      name: 'payload',
      title: 'Form Details',
      type: 'text',
      description: 'Conditionally submitted form fields in JSON format',
    }),
  ],
});
