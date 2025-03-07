export interface Book {
  id: number,
  type: string;
  links:  {
    self: string
  },
  attributes: {
    urn: string,
    created_at: string,
    updated_at: string,
    content: string,
    properties: null,
    display_properties: {
      type: string,
      image: string
    },
  },
  relationships: {
    authors: {
      links: {
        self: string,
        related: string
      }
    },
    publishers: {
      links: {
        self: string,
        related: string
      }
    }
  }
}
