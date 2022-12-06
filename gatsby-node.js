const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const photoCollectionTemplate = path.resolve(`./src/templates/photo-collection.js`)


  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `{
  posts: allMdx(
    filter: {fileAbsolutePath: {regex: "/content/blog/"}}
    sort: {frontmatter: {date: DESC}}
  ) {
    nodes {
      id
      fields {
        slug
      }
    }
  }
  photos: allMdx(
    filter: {fileAbsolutePath: {regex: "/content/photos/"}}
    sort: [{frontmatter: {id: ASC}}, {frontmatter: {date: ASC}}]
  ) {
    nodes {
      id
      fields {
        slug
      }
      frontmatter {
        filesystem_directory
      }
    }
  }
}`
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.posts.nodes
  const photos = result.data.photos.nodes


  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const nextPostId = index === 0 ? null : posts[index - 1].id
      const previousPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: `/blog${post.fields.slug}`,
        component: blogPostTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  if (photos.length > 0) {
    photos.forEach((photo, index) => {
      const previousPhotoId = index === 0 ? null : photos[index - 1].id
      const nextPhotoId = index === photos.length - 1 ? null : photos[index + 1].id
      const photoCollectionLocationRegex = `/${photo.frontmatter.filesystem_directory}/collection/`

      createPage({
        path: `/photos${photo.fields.slug}`,
        component: photoCollectionTemplate,
        context: {
          id: photo.id,
          previousPhotoId,
          nextPhotoId,
          photoCollectionLocationRegex
        }
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "Mdx" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
