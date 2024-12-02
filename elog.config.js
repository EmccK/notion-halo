module.exports = {
    write: {
        platform: "notion",
        notion: {
            token: process.env.NOTION_TOKEN,
            databaseId: process.env.NOTION_DATABASE_ID,
            filter: {
                and: [
                    { property: "status", select: { equals: "Published" } },
                    { property: "type", select: { equals: "Post" } },
                ],
            },
        },
    },
    deploy: {
        platform: "halo",
        halo: {
            endpoint: process.env.HALO_ENDPOINT,
            token: process.env.HALO_TOKEN,
            policyName: process.env.HALO_POLICY_NAME,
            needUploadImage: true,
        },
    },
    image: {
        enable: false,
    },
};
