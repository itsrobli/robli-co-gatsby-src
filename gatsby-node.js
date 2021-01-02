const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const photoCollection = path.resolve(`./src/templates/photo-collection.js`)


  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        posts: allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/content/blog/"}}, 
          sort: {fields: [frontmatter___date], order: DESC}
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
        photos: allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/content/photos/"}}, 
          sort: {fields: [frontmatter___id, frontmatter___date], order: ASC}
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
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
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  } else if (photos.length > 0) {
    photos.forEach((photo, index) => {
      const previousPostId = index === 0 ? null : photos[index - 1].id
      const nextPostId = index === photos.length - 1 ? null : photos[index + 1].id

      createPage({
        path: photo.fields.slug,
        component: photoCollection,
        context: {
          id: photo.id,
          previousPostId,
          nextPostId
        }
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
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
  // This way the "MarkdownRemark" queries will return `null` even when no
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

    type MarkdownRemark implements Node {
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
