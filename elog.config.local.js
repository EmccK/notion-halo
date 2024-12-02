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
            sorts: [
                {
                    property: "date",
                    direction: "ascending",
                },
            ],
            catalog: {
                enable: true,
                property: "category",
            },
        },
    },
    deploy: {
        platform: "local",
        local: {
            outputDir: "./docs",
            filename: "title",
            format: "markdown",
            frontMatter: {
                enable: true,
                exclude: ["cover"],
            },
        },
    },
    image: {
        enable: true,
        platform: "local",
        local: {
            outputDir: "./images",
            pathFollowDoc: true,
        },
    },
};
