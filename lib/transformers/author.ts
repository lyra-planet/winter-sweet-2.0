export const authorTransformer = (author: { id: string; name: string; email: string; profileImage: string }) => {
    return {
        id: author.id,
        name: author.name,
        email: author.email,
        profileImage: author.profileImage,
    }
}