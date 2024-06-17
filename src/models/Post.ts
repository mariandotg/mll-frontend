interface Slug {
    _type: string,
    current: string
}

interface Asset {
    _ref: string;
    _type: string;
}

interface Image {
    _type: string,
    asset: Asset
}

export interface Post {
    title: string;
    slug: Slug;
    category: string;
    body: string;
    imageUrl: Image;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _type: string;
    _id: string;
}
