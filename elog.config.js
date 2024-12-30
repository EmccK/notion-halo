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
        },
    },
    deploy: {
        platform: "halo",
        halo: {
            endpoint: process.env.HALO_ENDPOINT,
            token: process.env.HALO_TOKEN,
            policyName: process.env.HALO_POLICY_NAME,
            needUploadImage: false,
            rowType: 'markdown',
        },
    },
    image: {
        enable: true,
        platform: "github",
        github: {
            token: process.env.GITHUB_TOKEN,
            user: process.env.ELOG_GITHUB_USER,
            repo: process.env.ELOG_GITHUB_REPO,
            host: "cdn.jsdelivr.net",
            // 当前日期,试一下
            prefixKey: new Date().toISOString().split("T")[0],
        },
    },
};
