/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuthor = `mutation CreateAuthor(
  $input: CreateAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  createAuthor(input: $input, condition: $condition) {
    id
    firstName
    lastName
    email
    createdAt
    updatedAt
    posts {
      items {
        id
        title
        body
        tags
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const updateAuthor = `mutation UpdateAuthor(
  $input: UpdateAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  updateAuthor(input: $input, condition: $condition) {
    id
    firstName
    lastName
    email
    createdAt
    updatedAt
    posts {
      items {
        id
        title
        body
        tags
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const deleteAuthor = `mutation DeleteAuthor(
  $input: DeleteAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  deleteAuthor(input: $input, condition: $condition) {
    id
    firstName
    lastName
    email
    createdAt
    updatedAt
    posts {
      items {
        id
        title
        body
        tags
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const createPost = `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
    id
    title
    body
    tags
    createdAt
    updatedAt
    author {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
      posts {
        nextToken
      }
    }
  }
}
`;
export const updatePost = `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
    id
    title
    body
    tags
    createdAt
    updatedAt
    author {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
      posts {
        nextToken
      }
    }
  }
}
`;
export const deletePost = `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
    id
    title
    body
    tags
    createdAt
    updatedAt
    author {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
      posts {
        nextToken
      }
    }
  }
}
`;
