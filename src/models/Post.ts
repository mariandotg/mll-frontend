interface Slug {
    current: string
}

export interface Post {
    title: string;
    slug: Slug;
}
