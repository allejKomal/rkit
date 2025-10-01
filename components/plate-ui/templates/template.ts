import { Value } from 'platejs';

export interface Template {
  id: string;
  name: string;
  description: string;
  content: Value;
}

export const templates: Template[] = [
  {
    id: 'table-format',
    name: 'Table Format',
    description: 'Create a table with predefined headers',
    content: [
      {
        type: 'table',
        children: [
          {
            type: 'tr',
            children: [
              {
                type: 'th',
                children: [{ text: 'h1' }],
              },
              {
                type: 'th',
                children: [{ text: 'h2' }],
              },
              {
                type: 'th',
                children: [{ text: 'h3' }],
              },
            ],
          },
          {
            type: 'tr',
            children: [
              {
                type: 'td',
                children: [{ text: '' }],
              },
              {
                type: 'td',
                children: [{ text: '' }],
              },
              {
                type: 'td',
                children: [{ text: '' }],
              },
            ],
          },
          {
            type: 'tr',
            children: [
              {
                type: 'td',
                children: [{ text: '' }],
              },
              {
                type: 'td',
                children: [{ text: '' }],
              },
              {
                type: 'td',
                children: [{ text: '' }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'code-block-typescript',
    name: 'TypeScript Code Block',
    description: 'Create a TypeScript code block with sample code',
    content: [
      {
        type: 'code_block',
        lang: 'typescript',
        children: [
          {
            text: `typescript code here`,
          },
        ],
      },
    ],
  },
];
