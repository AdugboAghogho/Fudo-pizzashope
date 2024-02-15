import sanityClient from "@sanity/client"
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"

export const client = sanityClient ({
    projectId: '2umrtm2g',
    dataset: 'production',
    apiVersion: '2024-02-16',
    useCdn: true,
    token: 'skHBeayrOaRAhpawcsaY01cKqnBdHiKeCHULQ8fR8lih9tVkqjbcHSQiZ1fgt8HGIzzcvw2FsdltqvM8OvE7aVNhLMjawCKFy0bxBD1a2juC4t2MPbjU7MTu3cCwJbs5uTlr2vFpJ621VSQZEopdC1mitbD7MtG12mDpSuJ7kTKDRC7uELsN'
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)